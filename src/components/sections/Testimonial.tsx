import { Star } from "lucide-react";
import { company, images, testimonial } from "@/content/site";

export function Testimonial() {
  return (
    <section className="relative overflow-hidden">
      <img src={images.hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/50" />
      <p className="text-outline-light pointer-events-none absolute inset-x-0 top-6 select-none text-center text-[18vw] font-bold leading-none lowercase">
        {company.short}
      </p>
      <div className="relative mx-auto max-w-6xl px-6 py-40">
        <div className="max-w-md rounded-2xl bg-card p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex -space-x-3">
              {[images.team, images.site, images.tower].map((src, i) => (
                <img key={i} src={src} alt="" className="h-10 w-10 rounded-full border-2 border-card object-cover" />
              ))}
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold">Trusted Quality</p>
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">"{testimonial.quote}"</p>
          <p className="mt-4 text-sm font-semibold">{testimonial.name}</p>
          {testimonial.role && <p className="text-xs text-muted-foreground">{testimonial.role}</p>}
        </div>
      </div>
    </section>
  );
}
