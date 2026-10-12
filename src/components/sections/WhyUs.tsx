import { Label } from "@/components/ui/Label";
import { images, reasons } from "@/content/site";

function ReasonBody({ r }: { r: (typeof reasons)[number] }) {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          {r.n}
        </span>
        <h3 className="font-semibold leading-tight">{r.title}</h3>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{r.text}</p>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="process" className="relative bg-muted py-24">
      <div className="blueprint absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6">
        <Label center>Why Choose Us</Label>
        <h2 className="text-center text-4xl font-semibold">What Makes Us Different</h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-muted-foreground">
          A people-first approach backed by decades of building expertise.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border bg-card md:row-span-2">
            <img src={images.hero} alt="" loading="lazy" className="h-48 w-full object-cover" />
            <ReasonBody r={reasons[2]!} />
          </div>
          <div className="rounded-2xl border bg-card">
            <ReasonBody r={reasons[0]!} />
          </div>
          <div className="flex flex-col overflow-hidden rounded-2xl border bg-card md:row-span-2">
            <ReasonBody r={reasons[1]!} />
            <img src={images.tower} alt="" loading="lazy" className="min-h-0 w-full flex-1 object-cover" />
          </div>
          <div className="rounded-2xl border bg-card">
            <ReasonBody r={reasons[3]!} />
          </div>
        </div>
      </div>
    </section>
  );
}
