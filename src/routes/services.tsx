import { CallbackBar } from "@/components/CallbackBar";
import { SiteShell } from "@/components/SiteShell";
import { waHref } from "@/lib/site";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  Compass,
  DraftingCompass,
  Home,
  Layers,
  Ruler,
  Store,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Construction & Design Services in Visakhapatnam | SOPAN Constructions" },
      { name: "description", content: "Planning & design, residential construction, apartment construction, commercial construction and renovation services in Visakhapatnam by SOPAN Constructions and Infra Developers." },
      { property: "og:title", content: "Construction & Design Services" },
      { property: "og:description", content: "Planning, design, construction and renovation services for homes, apartments and commercial buildings." },
      { property: "og:url", content: "https://sopanconstructions.in/services" },
    ],
    links: [{ rel: "canonical", href: "https://sopanconstructions.in/services" }],
  }),
  component: Services,
});

type Group = { id: string; icon: typeof Ruler; title: string; points: string[] };
type Service = {
  id: string;
  icon: typeof Home;
  title: string;
  desc: string;
  benefits: string[];
  quoteValue: string;
  items?: string[];
  groups?: Group[];
};

const services: Service[] = [
  {
    id: "planning-design",
    icon: DraftingCompass,
    title: "Planning & Design",
    desc: "Turn your ideas into a well-planned home with comprehensive architectural and technical design solutions. From 2D layouts and 3D visualisation to structural drawings and exterior elevations, we help you plan before construction begins.",
    benefits: [
      "Better space utilisation",
      "Clear visualisation before construction",
      "Detailed technical documentation",
      "Better coordination between design and execution",
    ],
    groups: [
      {
        id: "architectural-planning",
        icon: Ruler,
        title: "Architectural Planning & 2D/3D Floor Plans",
        points: ["Independent house planning", "Apartment planning", "2D floor plans", "3D floor plans", "Space planning and room layouts"],
      },
      {
        id: "structural-design",
        icon: Layers,
        title: "Structural Designs & Working Drawings",
        points: ["Structural designs", "Foundation details", "Column and beam details", "Slab and reinforcement drawings", "Construction working drawings"],
      },
      {
        id: "elevations-visualization",
        icon: Compass,
        title: "3D Elevations & Architectural Visualization",
        points: ["3D front elevations", "Exterior architectural views", "Colour and material visualisation", "Elevation drawings"],
      },
    ],
    quoteValue: "Planning & Design",
  },
  {
    id: "residential",
    icon: Home,
    title: "Residential Construction",
    desc: "Build your dream home with thoughtful planning, quality construction and careful execution. We undertake independent house construction tailored to your family's requirements, plot dimensions and budget.",
    items: ["Independent houses", "Duplex homes", "G+1 and G+2 residential houses", "Custom home construction"],
    benefits: ["Practical construction planning", "Quality-conscious execution", "Clear project communication"],
    quoteValue: "Residential Construction",
  },
  {
    id: "apartment",
    icon: Building2,
    title: "Apartment Construction",
    desc: "Develop residential apartment buildings with practical layouts, coordinated construction planning and a focus on functionality, durability and efficient use of space.",
    items: [
      "Residential apartment buildings",
      "Multi-storey residential construction",
      "Apartment layout coordination",
      "Common areas and building facilities",
    ],
    benefits: ["Functional apartment layouts", "Coordinated construction execution", "Practical space utilisation"],
    quoteValue: "Apartment Construction",
  },
  {
    id: "commercial",
    icon: Store,
    title: "Commercial Construction",
    desc: "Construct commercial buildings with practical layouts, coordinated planning and a focus on functionality, durability and efficient use of space for your business.",
    items: ["Shops and showrooms", "Office buildings", "Small commercial complexes", "Warehouses and industrial sheds"],
    benefits: ["Functional layouts for business use", "Planned and coordinated execution", "Durable construction"],
    quoteValue: "Commercial Construction",
  },
  {
    id: "renovation",
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "Give your existing home a fresh look with thoughtful renovation and remodeling solutions. We help improve layouts, upgrade essential spaces and enhance the appearance and functionality of your home.",
    items: [
      "Independent house renovation",
      "Apartment renovation",
      "Kitchen and bathroom remodeling",
      "Room and layout modifications",
      "Flooring, painting and finishing",
      "Exterior and facade upgrades",
    ],
    benefits: ["Improved functionality", "Better use of existing spaces", "Updated appearance and finishes"],
    quoteValue: "Renovation & Remodeling",
  },
];

const guide = [
  { situation: "I have a plot but no plan yet", answer: "Planning & Design", href: "#planning-design" },
  { situation: "I have approved plans and want to build", answer: "Residential, Apartment or Commercial Construction", href: "#residential" },
  { situation: "I want to upgrade an existing home", answer: "Renovation & Remodeling", href: "#renovation" },
];

const steps = [
  { title: "Project Discussion", text: "Share your requirements, plot details and budget." },
  { title: "Site & Requirements Review", text: "We review the site and confirm the scope of work." },
  { title: "Planning & Estimate", text: "You receive a clear plan and an itemised estimate." },
  { title: "Construction", text: "Work proceeds with regular updates." },
  { title: "Handover", text: "Final walkthrough and handover." },
];

function Dot() {
  return (
    // wrapper is exactly one line tall, so the dot centres on the first line of text
    <span aria-hidden className="flex h-[1lh] shrink-0 items-center">
      <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
    </span>
  );
}

function Services() {
  return (
    <SiteShell>
      <section className="bg-primary text-white">
        <div className="container-x py-14 sm:py-24">
          <span className="eyebrow">Our Services</span>
          <h1 className="heading-xl mt-3 text-white max-w-3xl">Construction and design services</h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            SOPAN Constructions and Infra Developers provides planning & design, residential, apartment and commercial construction, and renovation services.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center rounded-full border border-white/25 px-4 py-1.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {s.title}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quote" className="btn-primary">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={waHref()} target="_blank" rel="noreferrer" className="btn-whatsapp">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <section className="pt-12 sm:pt-16">
        <div className="container-x">
          <h2 className="font-display text-xl font-bold text-primary">Not sure where to start?</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {guide.map((g) => (
              <a key={g.situation} href={g.href} className="card-base group block p-5">
                <p className="text-sm text-muted-foreground">{g.situation}</p>
                <p className="mt-2 flex items-center gap-2 font-display font-semibold text-primary group-hover:text-gold-text transition-colors">
                  {g.answer} <ArrowRight className="h-4 w-4 shrink-0" />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x space-y-12">
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className="grid lg:grid-cols-[1fr_1.4fr] gap-8 card-base p-6 sm:p-10">
              <div>
                <div className="grid h-14 w-14 place-items-center rounded-md bg-primary text-gold">
                  <s.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-primary">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/quote" search={{ service: s.quoteValue }} className="btn-primary mt-6 text-sm">
                  Get a Quote for This Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className={`grid sm:grid-cols-2 gap-5 ${s.groups ? "" : "sm:items-start"}`}>
                {s.items && (
                  <div className="rounded-md border border-border bg-surface p-5">
                    <h4 className="font-display font-semibold text-primary">What&apos;s included</h4>
                    <ul className="mt-3 space-y-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-2.5 items-start text-sm text-foreground/85">
                          <Dot />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="rounded-md border border-border bg-surface p-5">
                  <h4 className="font-display font-semibold text-primary">Benefits</h4>
                  <ul className="mt-3 space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-foreground/85">
                        <Check className="h-4 w-4 text-gold-text mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {s.groups?.map((g) => (
                  <div key={g.id} className="rounded-md border border-border bg-surface p-5">
                    <div className="flex items-start gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary text-gold">
                        <g.icon className="h-4 w-4" />
                      </span>
                      <h4 className="font-display font-semibold text-primary leading-snug">{g.title}</h4>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {g.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-foreground/85">
                          <Check className="h-4 w-4 text-gold-text mt-0.5 shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-2 text-[11px] text-muted-foreground">
                Service {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow">How we work</span>
            <h2 className="heading-lg mt-2 text-primary">A clear process from first discussion to handover</h2>
          </div>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((st, idx) => (
              <li key={st.title} className="card-base p-5">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-gold text-sm font-bold">{idx + 1}</span>
                <h3 className="mt-3 font-display font-semibold text-primary">{st.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{st.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">
            Planning & Design projects follow: Requirements → Concept & Planning → 2D/3D Design → Technical Drawings → Design Review & Finalisation.
          </p>
        </div>
      </section>

      <CallbackBar showContact topGap />
    </SiteShell>
  );
}
