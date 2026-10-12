import { Building2, Hammer, Ruler } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { RoundArrow } from "@/components/ui/Cta";
import { services } from "@/content/site";

const icons = [Building2, Hammer, Ruler];

export function Services() {
  return (
    <section id="services" className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 md:grid-cols-12">
      <div className="md:col-span-3">
        <Label>Our Services</Label>
        <h2 className="text-4xl font-semibold leading-tight">
          Driven By
          <br />
          Quality,
          <br />
          Defined By
          <br />
          Results
        </h2>
        <p className="mt-7 text-xs text-muted-foreground leading-relaxed">
          From residential to industrial — every build delivered with the same standard of care.
        </p>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-2 md:col-span-9">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <article
              key={s.title}
              className="min-w-[240px] flex-1 overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={s.img} alt={s.title} loading="lazy" className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-semibold leading-tight">{s.title}</h3>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">{s.text}</p>
                <div className="mt-4 flex justify-end">
                  <RoundArrow />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
