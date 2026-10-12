import { ArrowUpRight, HardHat, ClipboardList, Compass, ShieldCheck } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { crew } from "@/content/site";

const crewIcons = {
  clipboard: ClipboardList,
  compass: Compass,
  hardhat: HardHat,
  shield: ShieldCheck,
} as const;

export function Team() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <Label>Our Process</Label>
          <h2 className="text-4xl font-semibold leading-tight">
            A Clear Process.
            <br />
            A Dedicated Team.
          </h2>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Every Kalagara project follows a structured four-step process — from the first consultation to post-completion support. You always know where your project stands and who is responsible.
          </p>
          <div className="blueprint-dark mt-8 overflow-hidden rounded-3xl bg-ink p-6 text-ink-foreground">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <HardHat className="h-5 w-5" />
            </span>
            <p className="mt-4 text-base font-semibold">One point of contact, start to finish</p>
            <p className="mt-2 max-w-xs text-xs text-ink-foreground/60">
              A dedicated project manager owns your build across Multi Family, Commercial and Industrial projects — no hand-offs, no confusion.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">How we work with you</p>
          <ol>
            {crew.map((r, i) => {
              const Icon = crewIcons[r.icon];
              return (
                <li key={r.title} className="flex gap-5">
                  <div className="flex w-10 shrink-0 flex-col items-center">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border bg-card text-primary shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                    {i < crew.length - 1 && <span className="my-1 w-px flex-1 border-l border-dashed" />}
                  </div>
                  <div className="pb-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-sm font-semibold">{r.title}</p>
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                        {r.stage}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{r.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
