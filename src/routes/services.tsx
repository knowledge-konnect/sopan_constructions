import { CallbackBar } from "@/components/CallbackBar";
import { SiteShell } from "@/components/SiteShell";
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
  Wrench
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Residential Construction & Design Services | SOPAN Constructions" },
      { name: "description", content: "Residential construction, apartment construction, planning & design, and renovation services by SOPAN Constructions and Infra Developers." },
      { property: "og:title", content: "Residential Construction & Design Services" },
      { property: "og:description", content: "Construction, planning and renovation services for homes and apartment projects." },
      { property: "og:url", content: "https://sopanconstructions.in/services" },
    ],
    links: [{ rel: "canonical", href: "https://sopanconstructions.in/services" }],
  }),
  component: Services,
});

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Construction",
    desc: "Build your dream home with thoughtful planning, quality construction and careful execution. We undertake independent house construction tailored to your family's requirements, plot dimensions and budget.",
    items: ["Independent houses", "Duplex homes", "G+1 and G+2 residential houses", "Custom home construction"],
    benefits: ["Practical construction planning", "Quality-conscious execution", "Clear project communication"],
    process: ["Project Discussion", "Site Review", "Planning & Estimate", "Construction", "Handover"],
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
    process: ["Project Discussion", "Site & Requirements Review", "Planning & Estimate", "Construction", "Handover"],
    quoteValue: "Apartment Construction",
  },
  {
    id: "planning-design",
    icon: DraftingCompass,
    title: "Planning & Design",
    desc: "Turn your ideas into a well-planned home with comprehensive architectural and technical design solutions. From 2D layouts and 3D visualisation to structural drawings and exterior elevations, we help you plan before construction begins.",
    items: [
      "Independent house planning",
      "Residential apartment planning",
      "2D architectural floor plans",
      "3D floor plan visualisation",
      "Space planning and room layouts",
      "Structural designs and working drawings",
      "Foundation, column, beam and slab details",
      "3D front elevations and exterior visualisation",
      "Renovation and remodeling layouts",
    ],
    benefits: [
      "Better space utilisation",
      "Clear visualisation before construction",
      "Detailed technical documentation",
      "Better coordination between design and execution",
    ],
    process: ["Requirements", "Concept & Planning", "2D/3D Design", "Technical Drawings", "Design Review & Finalisation"],
    quoteValue: "Planning & Design",
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
    process: ["Site Review", "Requirements & Scope", "Estimate", "Renovation Execution", "Final Walkthrough"],
    quoteValue: "Renovation & Remodeling",
  },
];

const planningSubcategories = [
  {
    id: "architectural-planning",
    icon: Ruler,
    title: "Architectural Planning & 2D/3D Floor Plans",
    desc: "Plan practical layouts and room flow before construction with clear 2D and 3D floor planning support.",
    points: [
      "Independent house planning",
      "Apartment planning",
      "2D floor plans",
      "3D floor plans",
      "Space planning and room layouts",
    ],
  },
  {
    id: "structural-design",
    icon: Layers,
    title: "Structural Designs & Working Drawings",
    desc: "Prepare technical design inputs and working-level drawings to coordinate execution with clarity.",
    points: [
      "Structural designs",
      "Foundation details",
      "Column and beam details",
      "Slab and reinforcement drawings",
      "Construction working drawings",
    ],
  },
  {
    id: "elevations-visualization",
    icon: Compass,
    title: "3D Elevations & Architectural Visualization",
    desc: "Review exterior style, proportions and material direction before final execution.",
    points: [
      "3D front elevations",
      "Exterior architectural views",
      "Colour and material visualisation",
      "Elevation drawings",
    ],
  },
];

function Services() {
  return (
    <SiteShell>
      <section className="bg-primary text-white">
        <div className="container-x py-14 sm:py-24">
          <span className="eyebrow">Our Services</span>
          <h1 className="heading-xl mt-3 text-white max-w-3xl">Residential construction and design services</h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            SOPAN Constructions and Infra Developers provides residential construction, apartment construction, planning & design, and renovation services.
          </p>
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
                <ul className="mt-4 space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2 items-start text-sm text-foreground/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {it}
                    </li>
                  ))}
                </ul>
                <Link to="/quote" search={{ service: s.quoteValue }} className="btn-primary mt-6 text-sm">
                  Get a Quote for This Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="rounded-md border border-border bg-surface p-5">
                  <h4 className="font-display font-semibold text-primary">Benefits</h4>
                  <ul className="mt-3 space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-foreground/85">
                        <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md border border-border bg-surface p-5">
                  <h4 className="font-display font-semibold text-primary">Our Process</h4>
                  <ol className="mt-3 space-y-2">
                    {s.process.map((p, idx) => (
                      <li key={p} className="flex gap-3 text-sm text-foreground/85">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-gold text-[10px] font-bold shrink-0">
                          {idx + 1}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ol>
                </div>
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
            <span className="eyebrow">Planning & Design</span>
            <h2 className="heading-lg mt-2 text-primary">Complete Planning & Design Solutions</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Whether you are planning an independent house, residential apartment or renovation project, we help you visualise and plan important details before construction begins.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {planningSubcategories.map((sub) => (
              <article key={sub.id} className="card-base p-6">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-primary text-gold">
                  <sub.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">{sub.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{sub.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {sub.points.map((point) => (
                    <li key={point} className="flex gap-2 items-start text-sm text-foreground/85">
                      <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallbackBar />
    </SiteShell>
  );
}
