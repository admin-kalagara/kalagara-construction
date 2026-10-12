import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { faqs, images } from "@/content/site";

export function Faq() {
  const [open, setOpen] = useState(4);
  return (
    <section id="faq" className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
      <div>
        <Label>FAQ</Label>
        <h2 className="text-4xl font-semibold leading-tight">
          Your Construction
          <br />
          FAQ For Customer
        </h2>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
          Answers to the questions we hear most often from homeowners and businesses.
        </p>
        <div className="mt-16 flex max-w-sm items-center gap-4 rounded-2xl border bg-card p-4 shadow-lg">
          <img src={images.tower} alt="" loading="lazy" className="h-20 w-20 rounded-xl object-cover" />
          <div>
            <p className="text-sm font-semibold">Hello, Do Ask From Expert</p>
            <p className="mt-1 text-xs text-muted-foreground">Get help from our specialists.</p>
            <a href="#contact" className="mt-2 inline-block rounded-full bg-primary px-4 py-1.5 text-xs text-primary-foreground">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const on = open === i;
          return (
            <div key={f.q} className="rounded-xl border bg-card transition">
              <button
                onClick={() => setOpen(on ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium"
              >
                {f.q}
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${on ? "bg-ink text-ink-foreground" : "bg-primary text-primary-foreground"}`}
                >
                  {on ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                </span>
              </button>
              {on && <p className="px-5 pb-5 text-xs text-muted-foreground">{f.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
