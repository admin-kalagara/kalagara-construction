import { company } from "@/content/site";

const footerLinks = [
  { heading: "Services", links: [{ label: "Multi Family", href: "#services" }, { label: "General Commercial", href: "#services" }, { label: "Industrial", href: "#services" }] },
  { heading: "Navigate", links: [{ label: "About", href: "#about" }, { label: "Projects", href: "#projects" }, { label: "Our Process", href: "#process" }, { label: "FAQ", href: "#faq" }] },
  { heading: "Get In Touch", links: [{ label: "Contact Us", href: "#contact" }] },
];

export function Footer() {
  return (
    <footer className="px-4 pb-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-ink-foreground md:px-12">
        <div className="relative z-10 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <img src={company.logo} alt="Kalagara" className="h-12 w-auto rounded-lg bg-white px-3 py-1.5" />
            <p className="mt-4 max-w-xs text-xs text-ink-foreground/60">
              {company.name} builds lasting spaces with precision, integrity and care.
            </p>
          </div>
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold">{col.heading}</p>
              <ul className="mt-4 space-y-2 text-xs text-ink-foreground/60">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-primary">
                      + {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none text-[16vw] font-bold leading-none text-ink-foreground/5">
          {company.short}
        </p>
        <div className="relative z-10 mt-12 flex flex-wrap justify-between gap-4 border-t border-ink-foreground/15 pt-6 text-xs text-ink-foreground/50">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>
            <a href="/privacy" className="hover:text-primary transition">Privacy Policy</a>
            {" · "}
            <a href="/privacy" className="hover:text-primary transition">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
