import hero from "@/assets/hero-construction.jpg";
import { QuoteForm } from "@/components/QuoteForm";
import { SiteShell } from "@/components/SiteShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, processSteps, stats, testimonials } from "@/lib/content";
import { projects, realValue } from "@/lib/projects";
import { site, waHref } from "@/lib/site";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Layers,
  Building2,
  Calendar,
  Hammer,
  HardHat,
  HelpCircle,
  Home,
  MapPin,
  MessageCircle,
  MessageSquare,
  PencilRuler,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.legalName} | Residential Construction in Visakhapatnam` },
      { name: "description", content: "SOPAN Constructions and Infra Developers delivers residential construction, apartment construction, planning & design, and renovation services in Visakhapatnam and nearby areas." },
      { property: "og:title", content: `${site.legalName} | Residential Construction in Visakhapatnam` },
      { property: "og:description", content: "Residential construction, apartment construction, planning & design and renovation in Visakhapatnam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://sopanconstructions.in/" },
    ],
    links: [{ rel: "canonical", href: "https://sopanconstructions.in/" }],
  }),
  component: Home_,
});

const features = [
  { icon: Wallet, title: "Clear estimates", desc: "We discuss the project scope and provide an itemised estimate covering the expected requirements and costs." },
  { icon: Layers, title: "Material planning", desc: "Project discussions include practical material recommendations and finish considerations for the proposed work." },
  { icon: HardHat, title: "Site-focused execution", desc: "The work is planned around the site conditions, structural requirements and practical build sequence." },
  { icon: MessageSquare, title: "Straightforward communication", desc: "We keep the process clear and easy to follow, with regular updates as the work progresses." },
  { icon: ShieldCheck, title: "Practical project approach", desc: "We focus on realistic planning, organised execution and a quality-conscious finish for each home or apartment project." },
  { icon: Users, title: "Responsive support", desc: "Our team stays engaged from first discussion through final walkthrough and handover planning." },
];



const services = [
  { id: "residential", icon: Home, title: "Residential Construction", desc: "Independent houses and villas built to approved drawings with supervised civil work and practical detailing." },
  { id: "apartment", icon: Building2, title: "Apartment Construction", desc: "Multi-storey residential developments planned for structure, services and long-term practicality." },
  { id: "planning-design", icon: PencilRuler, title: "Planning & Design", desc: "Layout planning, design guidance, and technical detailing that supports a functional, well-considered home." },
  { id: "renovation", icon: Hammer, title: "Renovation & Remodeling", desc: "Upgrades, structural repairs and layout improvements to refresh and modernise existing homes." },
];

function Home_() {
  return (
    <SiteShell>
      {/* HERO */}
      <section id="home" data-nav-section="home" className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Construction site of a residential building project"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />

        <div className="container-x relative py-20 sm:py-32 lg:py-40 text-white">
          <span className="eyebrow">
            <MapPin className="h-3.5 w-3.5" /> Visakhapatnam · Residential construction &amp; design
          </span>
          <h1 className="heading-xl mt-5 max-w-3xl text-white fade-up">
            Your Dream Home. Our Commitment. Quality in Every Step.
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-white/90 fade-up">
            From planning your home to building independent houses and residential apartments, SOPAN brings your vision to life with thoughtful designs, strong construction and quality workmanship.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 sm:gap-4 fade-up">
            <Link to="/quote" className="btn-primary">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={waHref()} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/15 rounded-2xl overflow-hidden max-w-3xl">
            {stats.map((s) => (
              <div key={s.label} className="bg-primary/80 backdrop-blur px-4 py-5 sm:px-5 text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-gold">{s.value}</div>
                <div className="text-[11px] sm:text-xs text-white/80 mt-1.5 uppercase tracking-wider leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" data-nav-section="why-us" className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Why Choose SOPAN</span>
            <h2 className="heading-lg mt-2 text-primary">A practical, detail-focused construction approach</h2>
            <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
              We focus on residential planning, practical execution and clear communication to make each project easier to understand and manage.
            </p>


          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-base flex h-full flex-col p-6 sm:p-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-gold transition-colors duration-300">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary">{f.title}</h3>
                <p className="mt-2 flex-1 text-base text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" data-nav-section="services" className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Services</span>
              <h2 className="heading-lg mt-2 text-primary">Construction services we offer</h2>
            </div>
            <Link to="/services" className="text-sm font-semibold text-primary hover:text-gold-text inline-flex items-center gap-1">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                to="/services"
                hash={s.id}
                key={s.title}
                className="card-base group flex h-full flex-col p-6 sm:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold-text transition-colors duration-300 group-hover:bg-gold group-hover:text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary group-hover:text-gold-text transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-5 inline-flex items-center text-xs font-semibold text-primary group-hover:text-gold-text transition-colors">
                  Learn more <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* HOW WE WORK */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">How We Work</span>
            <h2 className="heading-lg mt-2 text-primary">A simple five-step process</h2>
            <p className="mt-3 text-base font-semibold text-primary/80">
              Discuss <span className="text-gold-text">→</span> Site Visit <span className="text-gold-text">→</span> Estimate{" "}
              <span className="text-gold-text">→</span> Execute <span className="text-gold-text">→</span> Handover
            </p>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              From the first conversation to handover, you always know what happens next.
            </p>
          </div>

          <ol className="mt-10 relative grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <li key={s.step} className="relative flex sm:block gap-4">
                {/* mobile vertical connector */}
                {i < processSteps.length - 1 && (
                  <span className="sm:hidden absolute left-[19px] top-11 bottom-[-1rem] w-px bg-gold/30" aria-hidden />
                )}
                <span className="sm:hidden relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-display text-xs font-bold text-gold">
                  {s.step}
                </span>
                <div className="card-base h-full w-full p-5 sm:p-6">
                  <div className="hidden sm:flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-xs font-bold text-gold">
                      {s.step}
                    </span>
                    <span className="h-px flex-1 bg-gold/30" aria-hidden />
                  </div>
                  <h3 className="mt-0 sm:mt-4 font-display text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">{s.desc}</p>

                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>


      {/* ABOUT */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="heading-lg mt-2 text-primary">Residential planning and construction with a practical approach</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              SOPAN Constructions and Infra Developers focuses on housing and renovation projects, apartment work and planning support. We aim to understand the requirement clearly and provide practical recommendations before execution begins.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-xl">
              We keep the process clear and straightforward, with practical planning, honest estimates and careful execution from initial discussions to handover.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Transparent, itemised estimates",
                "Practical planning before execution",
                "Quality-conscious construction approach",
                "Responsive project communication",
              ].map((i) => (
                <div key={i} className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-4 py-3 text-[15px] font-medium text-foreground/85">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-text">
                    <ShieldCheck className="h-3 w-3" />
                  </span>
                  {i}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <Link to="/quote" className="btn-primary text-sm">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>

              <Link to="/about" className="btn-ghost-primary text-sm">
                More about us
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((st) => (
              <div key={st.label} className="card-base p-6 sm:p-7 text-center">
                <div className="font-display text-3xl font-bold text-gold-text">{st.value}</div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground leading-tight">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="eyebrow">Project Categories</span>
              <h2 className="heading-lg mt-2 text-primary">Construction Work We Undertake</h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                Residential construction, apartment work, planning support and renovation categories handled with a practical, quality-conscious approach.
              </p>
            </div>

            <Link to="/projects" className="text-sm font-semibold text-primary hover:text-gold-text inline-flex items-center gap-1">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.slice(0, 6).map((p) => (
              <Link
                to="/projects"
                key={p.slug}
                className="card-base overflow-hidden group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 text-[11px] font-semibold tracking-wider uppercase">
                    <span className="text-gold-text truncate">{p.type}</span>
                    <span className="text-primary shrink-0">{p.status}</span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-primary group-hover:text-gold-text transition-colors">
                    {p.name}
                  </h3>
                  <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[15px] text-muted-foreground">
                    {realValue(p.location) ? (
                      <span className="inline-flex items-center gap-1.5 min-w-0">
                        <MapPin className="h-4 w-4 shrink-0" /> <span className="truncate">{p.location}</span>
                      </span>
                    ) : null}
                    {realValue(p.year) ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 shrink-0" /> {p.year}
                      </span>
                    ) : null}
                    {realValue(p.area) ? (
                      <span className="inline-flex items-center gap-1.5">
                        <Ruler className="h-4 w-4 shrink-0" /> {p.area}
                      </span>
                    ) : null}
                  </div>
                  {p.scope ? (
                    <p className="mt-3 border-t border-border pt-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-primary">Scope: </span>
                      {p.scope}
                    </p>
                  ) : null}

                </div>
              </Link>
            ))}

          </div>
        </div>

      </section>

      {/* TESTIMONIALS — hidden until genuine, approved client reviews exist */}
      {testimonials.length > 0 && (
        <section className="section-y bg-surface">
          <div className="container-x">
            <div className="max-w-2xl">
              <span className="eyebrow">Testimonials</span>
              <h2 className="heading-lg mt-2 text-primary">What our clients say</h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {testimonials.map((t, idx) => (
                <figure key={idx} className="card-base flex h-full flex-col p-7 sm:p-8">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-base text-foreground/85 leading-[1.75]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-border">
                    <div className="font-display font-semibold text-primary">{t.name}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{t.project}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* FAQ */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow"><HelpCircle className="h-3.5 w-3.5" /> FAQ</span>
            <h2 className="heading-lg mt-2 text-primary">Common questions</h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Answers to what clients ask us most. Still unsure? Message us on WhatsApp — we
              reply the same day.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-[17px] font-semibold text-primary hover:text-gold-text hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>


      {/* QUICK CALLBACK FORM */}
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Free Estimate</span>
            <h2 className="heading-lg mt-2 text-primary">Ready to Build Your Dream Home?</h2>
            <p className="mt-3 text-lg text-muted-foreground leading-relaxed max-w-md">
              Tell us about your construction or design requirements. Our team will connect with you to discuss your project.
            </p>
            <ul className="mt-6 space-y-3 text-base">
              {["No-obligation estimate", "Site visit on request", "Itemised, rate-wise pricing"].map((i) => (
                <li key={i} className="flex gap-2 items-center text-foreground/85">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-gold/20 text-gold-text">
                    <PaintBucket className="h-3 w-3" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-6">
              <p className="text-base font-semibold text-primary">Prefer to chat?</p>
              <p className="mt-1 text-base text-muted-foreground leading-relaxed">
                Share your construction or design requirements on WhatsApp and our team will get in touch.
              </p>
              <div className="mt-4">
                <a href={waHref()} target="_blank" rel="noreferrer" className="btn-whatsapp text-sm inline-flex">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <QuoteForm variant="compact" />
        </div>
      </section>

    </SiteShell>
  );
}
