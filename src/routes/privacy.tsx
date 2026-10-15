import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${company.name}` },
      { name: "description", content: "Privacy Policy for Kalagara Builders." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <a href="#home">
          <img src={company.logo} alt="Kalagara" className="mb-10 h-12 w-auto rounded-lg bg-white px-3 py-1.5 shadow" />
        </a>
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          Kalagara Builders ("Company," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy describes how
          we collect, use, disclose, and protect your personal information in connection with our website and related services. By accessing
          or using our site, you acknowledge that you have read and understood this Privacy Policy.
        </p>

        <Section n="1" title="Information We Collect">
          <Sub title="a. Personal Information">
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Contact details such as name, email address, phone number, and mailing address.</li>
              <li>Project-related information such as property address and service needs.</li>
              <li>Payment information if you engage in transactions through our site.</li>
              <li>Employment application data, if you submit job inquiries.</li>
            </ul>
          </Sub>
          <Sub title="b. Information Collected Automatically">
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>IP address, browser type, operating system, and device identifiers.</li>
              <li>Website usage data such as pages viewed, time spent on the site, and referring URLs.</li>
              <li>Information collected through cookies, analytics tools, and similar tracking technologies.</li>
            </ul>
          </Sub>
          <Sub title="c. Sensitive Information">
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              We generally do not collect sensitive information (e.g., Social Security numbers, health data). If such information is
              required for a specific purpose, it will be handled securely and only with your consent.
            </p>
          </Sub>
        </Section>

        <Section n="2" title="Legal Basis for Processing">
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Where required by law, we rely on one or more of the following legal bases for processing your personal information:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Your consent;</li>
            <li>Performance of a contract;</li>
            <li>Compliance with a legal obligation;</li>
            <li>Legitimate business interests, provided they do not override your rights.</li>
          </ul>
        </Section>

        <Section n="3" title="How We Use Information">
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>Provide, operate, and maintain our services;</li>
            <li>Respond to inquiries, requests, or job applications;</li>
            <li>Process payments and deliver requested services;</li>
            <li>Improve the site and customer experience;</li>
            <li>Send administrative and promotional communications (with opt-out options available);</li>
            <li>Comply with legal and regulatory obligations;</li>
            <li>Prevent, detect, and investigate fraud or security incidents.</li>
          </ul>
        </Section>

        <Section n="4" title="Information Sharing and Disclosure">
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            We do not sell or rent personal information. We may share your information:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            <li>With vendors, contractors, and service providers who perform services on our behalf (e.g., hosting, payment processing, analytics);</li>
            <li>To comply with applicable laws, regulations, or legal processes;</li>
            <li>In connection with a merger, acquisition, reorganization, or sale of assets;</li>
            <li>When you provide consent or direct us to share information.</li>
          </ul>
        </Section>

        <Section n="5" title="Cookies and Tracking Technologies">
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Our site uses cookies and similar technologies to enhance functionality, analyze usage, and personalize experiences. You may
            disable cookies in your browser settings, though some features may not work as intended.
          </p>
        </Section>

        <Section n="6" title="Data Retention">
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            We retain personal information only as long as necessary to fulfill the purposes described in this Policy, unless a longer
            retention period is required by law.
          </p>
        </Section>

        <Section n="7" title="Data Security">
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            We implement reasonable physical, technical, and administrative safeguards to protect personal information against unauthorized
            access, disclosure, alteration, or destruction. However, no system or method of transmission over the internet is completely
            secure.
          </p>
        </Section>

        <Section n="8" title="Children's Privacy">
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            The site is not directed to children under 13 years of age, and we do not knowingly collect personal information from them. If
            we become aware of such collection, we will delete it promptly.
          </p>
        </Section>

        <Section n="9" title="Third-Party Links">
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            The site may contain links to external websites. We are not responsible for the content, privacy practices, or security of
            such third-party websites.
          </p>
        </Section>

        <Section n="10" title="Changes to This Privacy Policy">
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated "Last Updated" date.
            We encourage you to review this Policy periodically.
          </p>
        </Section>

        <div className="mt-12 border-t pt-6 text-xs text-muted-foreground">
          <p>For questions about this Privacy Policy, contact us at <a href={`mailto:${company.email}`} className="text-primary hover:underline">{company.email}</a></p>
          <p className="mt-1">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold">{n}. {title}</h2>
      {children}
    </div>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      {children}
    </div>
  );
}
