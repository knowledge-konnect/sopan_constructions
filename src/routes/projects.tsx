import { CallbackBar } from "@/components/CallbackBar";
import { SiteShell } from "@/components/SiteShell";
import { projects, realValue } from "@/lib/projects";
import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Ruler } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects | SOPAN Constructions" },
      { name: "description", content: "Explore residential houses, apartments and renovation projects by SOPAN Constructions and Infra Developers." },
      { property: "og:title", content: "Our Projects | SOPAN Constructions" },
      { property: "og:description", content: "Residential construction, apartment work and renovation project highlights." },
      { property: "og:url", content: "https://sopanconstructions.in/projects" },
    ],
    links: [{ rel: "canonical", href: "https://sopanconstructions.in/projects" }],
  }),
  component: Projects,
});

const filters = ["All", "Residential", "Apartment", "Renovation"] as const;

function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) =>
    active === "All" ? true : p.type === active,
  );

  return (
    <SiteShell>
      <section className="bg-primary text-white">
        <div className="container-x py-14 sm:py-24">
          <span className="eyebrow">Portfolio</span>
          <h1 className="heading-xl mt-3 text-white max-w-3xl">Construction Work We Undertake</h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            Residential construction categories and renovation work undertaken by SOPAN Constructions and Infra Developers. Reference imagery is used for visual guidance where project photography is not available.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${active === f
                  ? "bg-primary text-gold"
                  : "bg-surface text-foreground/70 hover:bg-primary/10"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((p) => (
              <article key={p.slug} className="card-base overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary text-gold text-[10px] font-bold uppercase tracking-wider"
                  >
                    {p.status}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-gold-text">{p.type}</div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-primary">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  {realValue(p.location) || realValue(p.area) || realValue(p.year) ? (
                    <dl className="mt-5 pt-5 border-t border-border grid grid-cols-3 gap-3 text-xs">
                      {realValue(p.location) ? (
                        <div className="min-w-0">
                          <dt className="flex items-center gap-1 text-muted-foreground"><MapPin className="h-3 w-3" /> Location</dt>
                          <dd className="mt-0.5 font-semibold text-foreground/90 truncate">{p.location.split(",")[0]}</dd>
                        </div>
                      ) : null}
                      {realValue(p.area) ? (
                        <div className="min-w-0">
                          <dt className="flex items-center gap-1 text-muted-foreground"><Ruler className="h-3 w-3" /> Area</dt>
                          <dd className="mt-0.5 font-semibold text-foreground/90 truncate">{p.area}</dd>
                        </div>
                      ) : null}
                      {realValue(p.year) ? (
                        <div className="min-w-0">
                          <dt className="flex items-center gap-1 text-muted-foreground"><Calendar className="h-3 w-3" /> Year</dt>
                          <dd className="mt-0.5 font-semibold text-foreground/90 truncate">{p.year}</dd>
                        </div>
                      ) : null}
                    </dl>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <CallbackBar />
    </SiteShell>
  );
}
