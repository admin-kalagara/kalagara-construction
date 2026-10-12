import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/button";
import { company, images } from "@/content/site";
import contactConstruction from "@/assets/contact-construction.png";

const inputCls =
  "min-w-0 w-full rounded-lg border border-transparent bg-card px-4 py-3 text-xs text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary";

export function Contact() {
  const info = [
    { Icon: Phone, label: "Call Us", value: company.phone, href: "tel:+19803425726" },
    { Icon: Mail, label: "Email Us", value: company.email, href: `mailto:${company.email}` },
    { Icon: MapPin, label: "Location", value: company.address },
    { Icon: Clock, label: "Opening Hours", value: company.hours },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative isolate overflow-hidden bg-muted py-14 lg:py-16">
      <img
        src={images.tower}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-muted/80 via-muted/50 to-muted/20" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[1.25fr_0.9fr_1.85fr] lg:gap-10">
        <div className="mx-auto w-full max-w-80 md:col-span-2 md:max-w-72 lg:col-span-1 lg:max-w-none">
          <img
            src={contactConstruction}
            alt="Architectural model of a building under construction with tower cranes"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full object-contain lg:scale-[1.25] lg:origin-right"
          />
        </div>
        <div className="space-y-6 self-center">
          {info.map(({ Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{label}</p>
                <p className="mt-1 break-words text-[11px] text-muted-foreground">
                  {href ? (
                    <a href={href} className="transition hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }} className="min-w-0">
          <Label>Contact Us</Label>
          <h2 id="contact-heading" className="text-3xl font-semibold leading-tight">
            Let's Work Together
          </h2>
          <p className="mt-2 text-xs text-muted-foreground">Tell us about your project and we'll respond within one business day.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <input required name="name" autoComplete="name" aria-label="Name" placeholder="Full Name *" className={inputCls} />
            <input required name="email" autoComplete="email" aria-label="Email" type="email" placeholder="Email Address *" className={inputCls} />
            <input name="phone" autoComplete="tel" aria-label="Phone" type="tel" placeholder="Phone Number" className={inputCls} />
            <input name="company" autoComplete="organization" aria-label="Company or Organization" placeholder="Company / Organization" className={inputCls} />
            <select name="projectType" aria-label="Project type" defaultValue="" className={inputCls}>
              <option value="" disabled>I'm interested in *</option>
              <option>Multi Family</option>
              <option>General Commercial</option>
              <option>Industrial</option>
              <option>Other</option>
            </select>
            <input name="location" aria-label="Project location" placeholder="Project Location (City, State)" className={inputCls} />
            <select name="timeline" aria-label="Project timeline" defaultValue="" className={inputCls}>
              <option value="" disabled>Estimated Start Timeline</option>
              <option>As soon as possible</option>
              <option>Within 1–3 months</option>
              <option>Within 3–6 months</option>
              <option>6+ months from now</option>
              <option>Just exploring</option>
            </select>
            <select name="budget" aria-label="Budget range" defaultValue="" className={inputCls}>
              <option value="" disabled>Estimated Budget Range</option>
              <option>Under $250K</option>
              <option>$250K – $500K</option>
              <option>$500K – $1M</option>
              <option>$1M – $5M</option>
              <option>$5M+</option>
              <option>Not sure yet</option>
            </select>
            <select name="referral" aria-label="How did you hear about us" defaultValue="" className={inputCls}>
              <option value="" disabled>How did you hear about us?</option>
              <option>Google Search</option>
              <option>Social Media</option>
              <option>Referral / Word of Mouth</option>
              <option>Online Ad</option>
              <option>Other</option>
            </select>
            <textarea
              required
              name="message"
              aria-label="Your message"
              placeholder="Tell us about your project *"
              rows={3}
              className={`${inputCls} resize-y sm:col-span-2`}
            />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-52 text-[11px] leading-relaxed text-muted-foreground">
              For construction inquiries,
              <br />
              let's discuss your next project.
            </p>
            <Button type="submit" className="group h-auto gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-xs shadow-none">
              Submit Now
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-ink-foreground">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
