import { ticker } from "@/content/site";

export function Ticker() {
  const row = [...ticker, ...ticker];
  return (
    <section className="overflow-hidden py-12">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap text-4xl font-bold uppercase">
        {row.map((t, i) => (
          <span key={i} className={`flex items-center gap-8 ${i % 2 ? "text-outline" : ""}`}>
            {t}
            <span className="text-primary">✱</span>
          </span>
        ))}
      </div>
      <div className="mt-4 -rotate-2 bg-primary py-3">
        <div className="flex w-max animate-marquee-rev gap-6 whitespace-nowrap text-sm font-semibold uppercase text-primary-foreground">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-6">
              {t}
              <span>✱</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
