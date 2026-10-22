import { Phone, Mail, MapPin, Clock, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/button";
import { company, images } from "@/content/site";
import contactVideo from "@/assets/contact-video.mp4";
import { sendContactEmail } from "@/lib/send-contact-email";

const inputCls =
  "min-w-0 w-full rounded-lg border border-transparent bg-card px-4 py-3 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

type Status = "idle" | "loading" | "success" | "error";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  location: "",
  timeline: "",
  budget: "",
  referral: "",
  message: "",
};

function VideoChromaKey({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    let rafId: number;

    const draw = () => {
      if (video.videoWidth > 0) {
        if (canvas.width !== video.videoWidth) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = frame.data;
        for (let i = 0; i < d.length; i += 4) {
          if (d[i] > 200 && d[i + 1] > 200 && d[i + 2] > 200) d[i + 3] = 0;
        }
        ctx.putImageData(frame, 0, 0);
      }
      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      />
      <canvas
        ref={canvasRef}
        className={className}
        style={{ maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 50%, transparent 90%)" }}
      />
    </div>
  );
}

function SuccessCard({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-2xl border border-primary/20 bg-card/60 px-8 py-12 text-center shadow-xl backdrop-blur-sm">
      <span className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
        <CheckCircle2 className="relative h-12 w-12 text-primary" strokeWidth={1.5} />
      </span>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight">Message Sent!</h3>
        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
          Thank you for reaching out. Our team will review your project details and get back to you within one business day.
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
        <Mail className="h-3.5 w-3.5 text-primary" />
        <span className="text-[11px] text-muted-foreground">Sent to <strong className="text-foreground">support@kalagara.com</strong></span>
      </div>
      <button
        onClick={onReset}
        className="mt-2 text-[11px] text-muted-foreground underline underline-offset-4 transition hover:text-primary"
      >
        Submit another inquiry
      </button>
    </div>
  );
}

function ErrorBanner({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
      <div className="flex-1 text-[11px] leading-relaxed text-destructive">
        {message}
      </div>
      <button onClick={onDismiss} className="text-destructive/60 hover:text-destructive text-xs">✕</button>
    </div>
  );
}

export function Contact() {
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const info = [
    { Icon: Phone, label: "Call Us", value: company.phone, href: "tel:+19803425726" },
    { Icon: Mail, label: "Email Us", value: company.email, href: `mailto:${company.email}` },
    { Icon: MapPin, label: "Location", value: company.address },
    { Icon: Clock, label: "Opening Hours", value: company.hours },
  ];

  const set = (k: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const result = await sendContactEmail({ data: fields });
      if (result.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(result.error ?? "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      const raw = err instanceof Error ? err.message : String(err);
      // Map network/server issues to readable messages without keyword-matching Zod internals
      if (raw.toLowerCase().includes("fetch") || raw.toLowerCase().includes("networkerror")) {
        setErrorMsg("Network error — please check your connection and try again.");
      } else if (raw.toLowerCase().includes("credentials") || raw.toLowerCase().includes("configured")) {
        setErrorMsg("Email service is not configured. Please contact us directly at support@kalagara.com.");
      } else {
        setErrorMsg("Something went wrong sending your message. Please try again or email us at support@kalagara.com.");
      }
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative isolate overflow-hidden bg-muted py-14 lg:py-16">
      <img
        src={images.tower}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-muted/80 via-muted/50 to-muted/20" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[1.25fr_0.9fr_1.85fr] lg:gap-10">

        {/* Animated character */}
        <div className="mx-auto w-full max-w-80 md:col-span-2 md:max-w-72 lg:col-span-1 lg:max-w-none">
          <VideoChromaKey
            src={contactVideo}
            className="w-full object-contain lg:scale-[1.25] lg:origin-right animate-float3d"
          />
        </div>

        {/* Info column */}
        <div className="space-y-6 self-center">
          {info.map(({ Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{label}</p>
                <p className="mt-1 break-words text-[11px] text-muted-foreground">
                  {href ? (
                    <a href={href} className="transition hover:text-primary">{value}</a>
                  ) : (
                    value
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form / Success */}
        <div className="min-w-0">
          {status === "success" ? (
            <SuccessCard onReset={() => { setStatus("idle"); setFields(EMPTY); }} />
          ) : (
            <form onSubmit={handleSubmit}>
              <Label>Contact Us</Label>
              <h2 id="contact-heading" className="text-3xl font-semibold leading-tight">
                Let's Work Together
              </h2>
              <p className="mt-2 text-xs text-muted-foreground">
                Tell us about your project and we'll respond within one business day.
              </p>

              {status === "error" && (
                <div className="mt-4">
                  <ErrorBanner message={errorMsg} onDismiss={() => { setStatus("idle"); setErrorMsg(""); }} />
                </div>
              )}

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input
                  required
                  name="name"
                  autoComplete="name"
                  aria-label="Name"
                  placeholder="Full Name *"
                  value={fields.name}
                  onChange={set("name")}
                  className={inputCls}
                />
                <input
                  required
                  name="email"
                  autoComplete="email"
                  aria-label="Email"
                  type="email"
                  placeholder="Email Address *"
                  value={fields.email}
                  onChange={set("email")}
                  className={inputCls}
                />
                <input
                  name="phone"
                  autoComplete="tel"
                  aria-label="Phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={fields.phone}
                  onChange={set("phone")}
                  className={inputCls}
                />
                <input
                  name="company"
                  autoComplete="organization"
                  aria-label="Company or Organization"
                  placeholder="Company / Organization"
                  value={fields.company}
                  onChange={set("company")}
                  className={inputCls}
                />
                <select
                  name="projectType"
                  aria-label="Project type"
                  value={fields.projectType}
                  onChange={set("projectType")}
                  className={inputCls}
                >
                  <option value="" disabled>I'm interested in *</option>
                  <option>Multi Family</option>
                  <option>General Commercial</option>
                  <option>Industrial</option>
                  <option>Other</option>
                </select>
                <input
                  name="location"
                  aria-label="Project location"
                  placeholder="Project Location (City, State)"
                  value={fields.location}
                  onChange={set("location")}
                  className={inputCls}
                />
                <select
                  name="timeline"
                  aria-label="Project timeline"
                  value={fields.timeline}
                  onChange={set("timeline")}
                  className={inputCls}
                >
                  <option value="" disabled>Estimated Start Timeline</option>
                  <option>As soon as possible</option>
                  <option>Within 1–3 months</option>
                  <option>Within 3–6 months</option>
                  <option>6+ months from now</option>
                  <option>Just exploring</option>
                </select>
                <select
                  name="budget"
                  aria-label="Budget range"
                  value={fields.budget}
                  onChange={set("budget")}
                  className={inputCls}
                >
                  <option value="" disabled>Estimated Budget Range</option>
                  <option>Under $250K</option>
                  <option>$250K – $500K</option>
                  <option>$500K – $1M</option>
                  <option>$1M – $5M</option>
                  <option>$5M+</option>
                  <option>Not sure yet</option>
                </select>
                <select
                  name="referral"
                  aria-label="How did you hear about us"
                  value={fields.referral}
                  onChange={set("referral")}
                  className={inputCls}
                >
                  <option value="" disabled>How did you hear about us?</option>
                  <option>Google Search</option>
                  <option>Social Media</option>
                  <option>Referral / Word of Mouth</option>
                  <option>Online Ad</option>
                  <option>Other</option>
                </select>
                <textarea
                  required
                  name="message"
                  aria-label="Your message"
                  placeholder="Tell us about your project *"
                  rows={3}
                  value={fields.message}
                  onChange={set("message")}
                  className={`${inputCls} resize-y sm:col-span-2`}
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <p className="max-w-52 text-[11px] leading-relaxed text-muted-foreground">
                  For construction inquiries,
                  <br />
                  let's discuss your next project.
                </p>
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="group h-auto gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-xs shadow-none disabled:opacity-70"
                >
                  {status === "loading" ? "Sending…" : "Submit Now"}
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-ink-foreground">
                    {status === "loading" ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    )}
                  </span>
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
