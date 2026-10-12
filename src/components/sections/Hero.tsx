import { Star } from "lucide-react";
import { Cta } from "@/components/ui/Cta";
import { images } from "@/content/site";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[680px] overflow-hidden rounded-b-[2.5rem]">
      <img
        src={images.hero}
        alt="Modern residential building"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
      <div className="relative mx-auto flex min-h-[680px] max-w-6xl flex-col justify-center px-6 pt-24">
        <h1 className="text-5xl font-semibold leading-[1.05] text-ink-foreground md:text-7xl">
          Where Quality
          <br />
          Meets Every
          <br />
          Deadline.
        </h1>
        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-sm">
            <p className="text-sm text-ink-foreground/80">
              Precision craftsmanship, transparent pricing, and a team that stands behind every build — that's the Kalagara promise.
            </p>
            <div className="mt-6">
              <Cta>Get Started</Cta>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-full bg-ink-foreground/10 p-2 pr-5 backdrop-blur-md">
            <div className="flex -space-x-3">
              {[images.team, images.site, images.tower].map((src, i) => (
                <img key={i} src={src} alt="" className="h-10 w-10 rounded-full border-2 border-ink-foreground object-cover" />
              ))}
            </div>
            <div className="text-ink-foreground">
              <p className="text-xs font-semibold">Trusted Quality</p>
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
