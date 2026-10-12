import hero from "@/assets/hero.jpg";
import site from "@/assets/site.jpg";
import tower from "@/assets/tower.jpg";
import team from "@/assets/team.jpg";
import kalagaraLogo from "@/assets/kalagara_logo.png";

export const images = { hero, site, tower, team };

export const company = {
  name: "Kalagara",
  short: "Kalagara",
  logo: kalagaraLogo as string,
  phone: "(980) DIAL-RAM",
  email: "support@kalagara.com",
  address: "3540 Toringdon Way, Suite 200, Charlotte, NC 28277",
  hours: "Mon – Sat, 9:00 AM – 5:00 PM EST",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Our Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  { title: "Multi Family", text: "Ground-up multi-family residential builds designed for lasting value and community living.", img: site },
  { title: "General Commercial", text: "Full-service commercial construction delivering functional, high-quality spaces on time and on budget.", img: tower },
  { title: "Industrial", text: "Durable, purpose-built industrial facilities engineered to meet demanding operational needs.", img: hero },
];

export const reasons = [
  { n: "01", title: "Client-First Approach", text: "We listen before we build. Every decision is made with your goals, timeline and budget in mind." },
  { n: "02", title: "Transparent Pricing", text: "No surprises, no hidden costs. You receive a detailed estimate upfront and we stick to it." },
  { n: "03", title: "End-to-End Accountability", text: "One dedicated project manager owns your build from consultation to post-completion support." },
  { n: "04", title: "Built To Last", text: "We use quality materials and proven methods across Multi Family, General Commercial and Industrial projects." },
];

export const projects = [
  { title: "Multi Family Residential Build", place: "Coming Soon", img: site, tilt: "-rotate-2" },
  { title: "General Commercial Project", place: "Coming Soon", img: tower, tilt: "rotate-2" },
  { title: "Industrial Facility", place: "Coming Soon", img: tower, tilt: "rotate-1" },
  { title: "Multi Family Development", place: "Coming Soon", img: hero, tilt: "-rotate-1" },
];

export const testimonial = {
  quote: "Kalagara brought professionalism and genuine care to every step of our build. Their transparent pricing and clear communication made the whole process stress-free.",
  name: "A Satisfied Client",
  role: "Homeowner",
};

export const crew = [
  { icon: "clipboard", stage: "Step 1", title: "Consultation", text: "We take time to understand your goals, requirements and expectations before a single plan is drawn." },
  { icon: "compass", stage: "Step 2", title: "Design & Planning", text: "We collaborate with trusted consultants to develop tailored plans and designs that bring your vision to life." },
  { icon: "hardhat", stage: "Step 3", title: "Construction", text: "Every project is executed with precision and professionalism, delivered on time and within budget." },
  { icon: "shield", stage: "Step 4", title: "Post-Completion Support", text: "Our commitment doesn't end at handover. We stand behind every build with an industry-leading warranty and ongoing assistance." },
] as const;

export const partners = ["Gormley", "Buildco", "Archline", "Summit", "Hexacore"];

export const ticker = ["Multi Family", "General Commercial", "Industrial", "Quality Craftsmanship", "Built To Last", "Transparent Pricing", "On Time Delivery"];

export const faqs = [
  { q: "What types of construction does Kalagara specialise in?", a: "We focus on three core sectors: Multi Family residential, General Commercial, and Industrial construction — delivering each with the same commitment to quality and transparency." },
  { q: "Do you handle permits and inspections?", a: "Yes, we manage all permits, inspections and regulatory paperwork on your behalf so you can focus on your project, not the admin." },
  { q: "How does your pricing work?", a: "We provide detailed, line-by-line estimates before any work begins. The number you sign is the number you pay — no hidden costs." },
  { q: "Who will be my point of contact throughout the project?", a: "One named project manager owns your build from first site visit to final handover. You always know who to call." },
  { q: "How long does a typical project take?", a: "Timelines vary by scope and sector. We provide a clear, detailed schedule during the estimation phase and keep you updated throughout." },
  { q: "What warranty do you offer on completed work?", a: "All projects include structural and workmanship coverage. Full warranty details are outlined in your contract before work begins." },
];

export const posts = [
  { title: "What to Expect When Starting a Multi Family Construction Project", date: "Oct 2025", img: site },
  { title: "General Commercial Construction: Key Factors for a Successful Build", date: "Oct 2025", img: tower },
  { title: "Industrial Construction 101: Planning, Safety and Quality Standards", date: "Oct 2025", img: hero },
];
