import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().optional(),
  location: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  referral: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type ContactResult = { ok: true } | { ok: false; error: string };

async function getGraphToken(): Promise<string> {
  const tenantId = process.env["GRAPH_TENANT_ID"];
  const clientId = process.env["GRAPH_CLIENT_ID"];
  const clientSecret = process.env["GRAPH_CLIENT_SECRET"];

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("Email service is not configured. Please contact us directly at support@kalagara.com");
  }

  const res = await fetch(
    `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
        scope: "https://graph.microsoft.com/.default",
      }),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to authenticate with email service. Please try again.");
  }

  const data = (await res.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("Invalid auth response from email service.");
  return data.access_token;
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((raw: unknown) => schema.parse(raw))
  .handler(async ({ data }): Promise<ContactResult> => {
    try {
      const token = await getGraphToken();
      const sender = process.env["GRAPH_SENDER_EMAIL"] ?? "support@kalagara.com";

      const row = (label: string, value?: string) =>
        value
          ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:13px;width:160px;vertical-align:top">${label}</td><td style="padding:6px 0;font-size:13px;color:#111827">${value}</td></tr>`
          : "";

      const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)">
        <tr>
          <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);padding:32px 40px">
            <p style="margin:0;color:#d4af37;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:600">New Inquiry</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:24px;font-weight:700">Contact Form Submission</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 40px">
            <h2 style="margin:0 0 20px;font-size:16px;color:#1a1a2e;font-weight:600;border-bottom:2px solid #f3f4f6;padding-bottom:12px">Contact Details</h2>
            <table cellpadding="0" cellspacing="0" width="100%">
              ${row("Full Name", data.name)}
              ${row("Email", `<a href="mailto:${data.email}" style="color:#d4af37">${data.email}</a>`)}
              ${row("Phone", data.phone)}
              ${row("Company", data.company)}
            </table>
            <h2 style="margin:28px 0 20px;font-size:16px;color:#1a1a2e;font-weight:600;border-bottom:2px solid #f3f4f6;padding-bottom:12px">Project Details</h2>
            <table cellpadding="0" cellspacing="0" width="100%">
              ${row("Project Type", data.projectType)}
              ${row("Location", data.location)}
              ${row("Timeline", data.timeline)}
              ${row("Budget", data.budget)}
              ${row("How they heard", data.referral)}
            </table>
            <h2 style="margin:28px 0 20px;font-size:16px;color:#1a1a2e;font-weight:600;border-bottom:2px solid #f3f4f6;padding-bottom:12px">Message</h2>
            <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;background:#f9fafb;padding:16px;border-radius:8px;border-left:3px solid #d4af37">${data.message.replace(/\n/g, "<br>")}</p>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:20px 40px;border-top:1px solid #e5e7eb">
            <p style="margin:0;font-size:12px;color:#9ca3af;text-align:center">Sent from the contact form at <strong>kalagara.com</strong></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

      const mailRes = await fetch(
        `https://graph.microsoft.com/v1.0/users/${sender}/sendMail`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: {
              subject: `New Contact Inquiry from ${data.name}`,
              body: { contentType: "HTML", content: html },
              toRecipients: [{ emailAddress: { address: "support@kalagara.com" } }],
              replyTo: [{ emailAddress: { address: data.email, name: data.name } }],
            },
            saveToSentItems: false,
          }),
        },
      );

      if (!mailRes.ok) {
        const errText = await mailRes.text();
        let friendlyError = "Failed to send your message. Please try again or email us directly at support@kalagara.com.";
        try {
          const errJson = JSON.parse(errText) as { error?: { code?: string } };
          if (errJson.error?.code === "ErrorAccessDenied") {
            friendlyError = "Email service permission error. Please contact us at support@kalagara.com.";
          } else if (errJson.error?.code === "MailboxNotEnabledForRESTAPI") {
            friendlyError = "Email service temporarily unavailable. Please contact us at support@kalagara.com.";
          }
        } catch {}
        return { ok: false, error: friendlyError };
      }

      return { ok: true };
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      return { ok: false, error: message };
    }
  });
