import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Cta({ children, href = "#contact", dark }: { children: ReactNode; href?: string; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-medium transition hover:shadow-lg ${dark ? "bg-ink text-ink-foreground" : "bg-primary text-primary-foreground"}`}
    >
      {children}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-ink-foreground transition group-hover:rotate-45">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}

export function RoundArrow() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}
