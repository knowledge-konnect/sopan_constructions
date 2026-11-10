import { QuoteForm } from "@/components/QuoteForm";
import { SiteShell } from "@/components/SiteShell";
import { mailHref, phoneHref, site, waHref } from "@/lib/site";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";

const allowedServices = new Set([
  "Residential Construction",
  "Apartment Construction",
  "Planning & Design",
  "Renovation & Remodeling",
  "Other Enquiry",
]);

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search.service === "string" && allowedServices.has(search.service) ? search.service : "",
  }),
  head: () => ({
    meta: [
      { title: "Request a Free Quote | SOPAN Constructions" },
      { name: "description", content: "Request a free quote for residential construction, apartment construction, planning, design and renovation services." },
      { property: "og:title", content: "Request a Free Quote | SOPAN Constructions" },
      { property: "og:description", content: "Free quote for residential construction and design requirements." },
      { property: "og:url", content: "https://sopanconstructions.in/quote" },
    ],
    links: [{ rel: "canonical", href: "https://sopanconstructions.in/quote" }],
  }),
  component: Quote,
});

function Quote() {
  const { service } = Route.useSearch();

  return (
    <SiteShell>
      <section className="bg-primary text-white">
        <div className="container-x py-14 sm:py-24">
          <span className="eyebrow">Free Estimate</span>
          <h1 className="heading-xl mt-3 text-white max-w-3xl">Request your free quote</h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            Share your construction or design requirements and our team will connect with you to discuss the next steps.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <QuoteForm defaultService={service} />

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="card-base p-6 bg-primary text-white">
              <h3 className="font-display text-lg font-semibold text-gold">Prefer to talk directly?</h3>
              <p className="mt-2 text-sm text-white/80">Reach our team on phone or WhatsApp and share your requirement.</p>
              <div className="mt-5 space-y-2">
                <a href={phoneHref} className="btn-primary w-full text-sm"><Phone className="h-4 w-4" /> {site.phone}</a>
                <a href={waHref()} target="_blank" rel="noreferrer" className="btn-outline-light w-full text-sm">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <a href={mailHref("Quote request")} className="btn-outline-light w-full text-sm">
                  <Mail className="h-4 w-4" /> Email Us
                </a>
              </div>
            </div>

            <div className="card-base p-6">
              <h4 className="font-display font-semibold text-primary flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold" /> Working Hours
              </h4>
              <dl className="mt-3 text-sm text-muted-foreground space-y-1.5">
                <div className="flex justify-between"><dt>Monday – Saturday</dt><dd className="text-foreground">9:00 AM – 7:00 PM</dd></div>
                <div className="flex justify-between"><dt>Sunday</dt><dd className="text-foreground">By appointment</dd></div>
              </dl>
            </div>

            <div className="card-base p-6">
              <h4 className="font-display font-semibold text-primary">What happens next?</h4>
              <ol className="mt-3 space-y-2.5 text-sm">
                {[
                  "We review your requirements",
                  "A team member calls you to understand the project",
                  "An estimate and project discussion follow",
                  "We move ahead with the right scope and process",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3 items-start text-foreground/85">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-gold text-[11px] font-bold shrink-0">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
