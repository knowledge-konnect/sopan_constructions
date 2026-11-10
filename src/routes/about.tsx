import teamImg from "@/assets/project-team.jpg";
import { CallbackBar } from "@/components/CallbackBar";
import { SiteShell } from "@/components/SiteShell";
import { createFileRoute } from "@tanstack/react-router";
import { Award, Eye, HeartHandshake, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | SOPAN Constructions and Infra Developers" },
      { name: "description", content: "SOPAN Constructions and Infra Developers is committed to residential construction, architectural planning, structural design and dedicated project support." },
      { property: "og:title", content: "About SOPAN Constructions" },
      { property: "og:description", content: "Residential construction, thoughtful planning, technical design and project support for homes and apartments." },
      { property: "og:url", content: "https://sopanconstructions.in/about" },
    ],
    links: [{ rel: "canonical", href: "https://sopanconstructions.in/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <section className="bg-primary text-white">
        <div className="container-x py-14 sm:py-24">
          <span className="eyebrow">About Us</span>
          <h1 className="heading-xl mt-3 text-white max-w-3xl">Building Trust Through Thoughtful Construction</h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            SOPAN Constructions and Infra Developers focuses on residential construction, apartment projects, architectural planning and renovation. We work to understand each customer's requirements and provide practical planning, clear estimates and quality-conscious execution.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={teamImg} alt="Construction planning and site collaboration" loading="lazy" width={1280} height={960} className="rounded-xl shadow-elegant w-full h-full object-cover" />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-lg mt-2 text-primary">Practical planning and dependable execution</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our work is centred on residential homes, apartment construction, planning and renovation projects. We focus on practical layouts, clear project coordination and a straightforward process from the initial discussion to handover.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Each project deserves careful planning, honest recommendations and quality-conscious execution. Whether the requirement is a new home, an apartment development or a renovation, the aim is always a dependable result and a smooth client experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid md:grid-cols-3 gap-5">
          {[
            { icon: Eye, t: "Vision", d: "To be a trusted partner for residential construction and design solutions rooted in practicality, quality and clarity." },
            { icon: Target, t: "Mission", d: "Deliver well-planned residential projects with disciplined execution, transparent guidance and dependable support." },
            { icon: HeartHandshake, t: "Values", d: "Quality, transparency, accountability and respectful communication guide every stage of the project." },
          ].map((b) => (
            <div key={b.t} className="card-base p-6">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-primary text-gold">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-primary">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-x card-base p-8 sm:p-12 bg-primary text-white">
          <Award className="h-10 w-10 text-gold" />
          <h2 className="heading-lg mt-4 text-white">A message from our team</h2>
          <p className="mt-4 text-white/85 leading-relaxed max-w-3xl">
            "Every home and apartment project deserves thoughtful planning, clean execution and a client experience built on trust. We focus on practical design, well-managed construction and transparent communication so the final result feels considered, durable and comfortable to live in."
          </p>
          <p className="mt-4 text-gold font-semibold">— SOPAN Constructions and Infra Developers</p>
        </div>
      </section>

      <CallbackBar />
    </SiteShell>
  );
}
