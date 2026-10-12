import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/content/site";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Projects } from "@/components/sections/Projects";
import { Testimonial } from "@/components/sections/Testimonial";
import { Team } from "@/components/sections/Team";
import { Ticker } from "@/components/sections/Ticker";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${company.name} — Construction & Architecture` },
      { name: "description", content: "Premium construction company turning your vision into beautifully crafted spaces." },
      { property: "og:title", content: `${company.name} — Construction & Architecture` },
      { property: "og:description", content: "Premium construction company turning your vision into beautifully crafted spaces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <WhyUs />
      <Projects />
      <Testimonial />
      <Team />
      <Ticker />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
