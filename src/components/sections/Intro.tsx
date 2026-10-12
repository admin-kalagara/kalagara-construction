import { Cta } from "@/components/ui/Cta";

export function Intro() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12">
      <div className="relative md:col-span-4">
        <div className="relative z-10 w-52 rounded-2xl border bg-card p-5 shadow-lg">
          <p className="text-2xl font-semibold leading-snug">Who We Are</p>
          <p className="mt-2 text-sm font-medium">Kalagara Construction</p>
          <p className="mt-1 text-xs text-muted-foreground">A dedicated team building Multi Family, Commercial and Industrial spaces with care.</p>
        </div>
        <div className="blueprint mt-[-2rem] h-56 rounded-3xl opacity-70" />
        <div className="absolute bottom-4 right-6 grid h-24 w-24 -rotate-12 place-items-center rounded-full bg-primary text-center text-[10px] font-bold uppercase leading-tight text-primary-foreground shadow-xl">
          Under
          <br />
          Construction
        </div>
      </div>
      <div className="md:col-span-5">
        <h2 className="text-4xl font-semibold leading-tight">
          Building With
          <br />
          Purpose, Precision
          <br />
          And Integrity
        </h2>
        <p className="mt-5 text-sm text-muted-foreground">
          Our mission is to deliver construction that stands the test of time — across Multi Family, General Commercial and Industrial sectors. We believe every project, regardless of size, deserves the same standard of care: clear communication, skilled execution and a team that is accountable from the first conversation to post-completion support.
        </p>
        <div className="mt-7">
          <Cta>Read More</Cta>
        </div>
      </div>
      <div className="flex items-end md:col-span-3">
        <div className="w-full rounded-2xl bg-ink p-6 text-ink-foreground shadow-xl">
          <p className="text-[10px] uppercase tracking-widest text-ink-foreground/60">Our Commitment</p>
          <p className="mt-6 text-xl font-semibold leading-snug">Built On Trust</p>
          <p className="mt-1 text-xs text-ink-foreground/60">Transparent process, honest pricing, and lasting results.</p>
        </div>
      </div>
    </section>
  );
}
