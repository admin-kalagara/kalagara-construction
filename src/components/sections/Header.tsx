import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Cta } from "@/components/ui/Cta";
import { company, nav } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-4 z-30 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-ink-foreground/20 bg-ink/40 px-4 py-2 backdrop-blur-md">
        <a href="#home" className="flex items-center text-ink-foreground" aria-label="Kalagara home">
          <img src={company.logo} alt="Kalagara" className="h-10 w-auto rounded-lg bg-white px-2.5 py-1" />
        </a>
        <nav className="hidden gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="rounded-full px-3 py-1.5 text-sm text-ink-foreground/80 transition hover:bg-ink-foreground/10 hover:text-ink-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
<div className="hidden md:block">
            <Cta>Let's Talk</Cta>
          </div>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-ink p-4 md:hidden">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-ink-foreground hover:bg-ink-foreground/10"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
