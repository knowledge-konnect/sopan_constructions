import hero from "@/assets/hero-construction.jpg";
import apartment from "@/assets/project-apartment.jpg";
import team from "@/assets/project-team.jpg";
import townhouse from "@/assets/project-townhouse.jpg";
import villa from "@/assets/project-villa.jpg";
import { CallbackBar } from "@/components/CallbackBar";
import { SiteShell } from "@/components/SiteShell";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/gallery")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" }, // hidden for now — remove when Gallery goes live
      { title: "Gallery | SOPAN Constructions" },
      { name: "description", content: "Residential construction and design gallery featuring homes, apartments and renovation inspiration." },
      { property: "og:title", content: "Gallery | SOPAN Constructions" },
      { property: "og:description", content: "Residential project inspiration, site progress and home-focused design visuals." },
      { property: "og:url", content: "https://sopanconstructions.in/gallery" },
    ],
    links: [{ rel: "canonical", href: "https://sopanconstructions.in/gallery" }],
  }),
  component: Gallery,
});

const images = [
  { src: hero, label: "Residential building under construction", category: "Construction" },
  { src: villa, label: "Independent house exterior", category: "Residential" },
  { src: apartment, label: "Apartment exterior view", category: "Apartment" },
  { src: townhouse, label: "Duplex home elevation", category: "Residential" },
  { src: team, label: "Planning and design discussion", category: "Planning" },
  { src: townhouse, label: "Residential home facade", category: "Residential" },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <SiteShell>
      <section className="bg-primary text-white">
        <div className="container-x py-14 sm:py-24">
          <span className="eyebrow">Gallery</span>
          <h1 className="heading-xl mt-3 text-white max-w-3xl">A look at homes, apartments and renovation work</h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            Practical residential construction, design inspiration and finished home details from our project work.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                aria-label={`View ${img.label}`}
                onClick={() => setOpen(img.src)}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] card-base"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white opacity-0 group-hover:opacity-100 transition">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gold">{img.category}</div>
                  <div className="text-sm font-semibold">{img.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm grid place-items-center p-4 cursor-zoom-out"
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setOpen(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="Enlarged" className="max-h-[88vh] max-w-[92vw] rounded-lg shadow-2xl" />
        </div>
      )}

      <CallbackBar />
    </SiteShell>
  );
}
