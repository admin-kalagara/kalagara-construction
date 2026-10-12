import { Label } from "@/components/ui/Label";
import { Cta } from "@/components/ui/Cta";
import { posts } from "@/content/site";

export function Blog() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Label>Our Blog</Label>
          <h2 className="text-4xl font-semibold leading-tight">
            Insights From
            <br />
            The Job Site
          </h2>
        </div>
        <Cta href="#">View All</Cta>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border bg-card transition hover:shadow-xl">
            <div className="relative">
              <img src={p.img} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition group-hover:scale-105" />
              <span className="absolute bottom-3 right-3 rounded-md bg-ink px-2 py-1 text-[10px] font-semibold text-ink-foreground">
                {p.date}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold leading-snug">{p.title}</h3>
              <div className="mt-4 flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
                <span>By Admin</span>
                <span className="text-primary">Read More →</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
