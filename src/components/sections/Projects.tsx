import { MapPin } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { RoundArrow } from "@/components/ui/Cta";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Label center>Our Projects</Label>
      <h2 className="text-center text-4xl font-semibold leading-tight">
        Built Across Every
        <br />
        Construction Sector
      </h2>
      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`${p.tilt} rounded-2xl border bg-card p-3 shadow-lg transition hover:rotate-0 hover:shadow-2xl`}
          >
            <img src={p.img} alt={p.title} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" />
            <div className="flex items-center justify-between px-2 py-4">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {p.place}
                </p>
              </div>
              <RoundArrow />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
