import { QuoteForm } from "@/components/QuoteForm";
import { SiteShell } from "@/components/SiteShell";
import { mailHref, phoneHref, site, waHref } from "@/lib/site";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SOPAN Constructions" },
      { name: "description", content: "Contact SOPAN Constructions and Infra Developers for residential construction, apartment projects, planning, design and renovation enquiries." },
      { property: "og:title", content: "Contact SOPAN Constructions" },
      { property: "og:description", content: "Get in touch with our team to discuss your construction or design requirements." },
      { property: "og:url", content: "https://sopanconstructions.in/contact" },
    ],
    links: [{ rel: "canonical", href: "https://sopanconstructions.in/contact" }],
  }),
  component: Contact,
});

const fullAddress = `${site.address.line1}, ${site.address.line2}`;
const mapsQuery = encodeURIComponent(fullAddress);
const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

function Contact() {
  return (
    <SiteShell>
      <section className="bg-primary text-white">
        <div className="container-x py-14 sm:py-24">
          <span className="eyebrow">Contact</span>
          <h1 className="heading-xl mt-3 text-white max-w-3xl">Let’s discuss your home or project requirements</h1>
          <p className="mt-5 text-white/80 max-w-2xl">Visit our office, give us a call or send a message with your construction or design requirements. We would be glad to hear about your project.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-5">
            <div className="card-base p-6">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-gold shrink-0">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-primary">Office Address</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{fullAddress}</p>
                  <a href={mapsDirections} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold-text">
                    Get directions →
                  </a>
                </div>
              </div>
            </div>
            <div className="card-base p-6">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-gold shrink-0">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-primary">Phone</h3>
                  <a href={phoneHref} className="mt-1 block text-base font-semibold text-primary hover:text-gold-text">{site.phone}</a>
                </div>
              </div>
            </div>
            <div className="card-base p-6">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-whatsapp text-white shrink-0">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-primary">WhatsApp</h3>
                  <a href={waHref()} target="_blank" rel="noreferrer" className="mt-1 text-sm text-muted-foreground hover:text-primary block">
                    Chat with us instantly
                  </a>
                </div>
              </div>
            </div>
            <div className="card-base p-6">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-gold shrink-0">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-primary">Email</h3>
                  <a href={mailHref()} className="mt-1 block break-all text-sm font-medium text-primary hover:text-gold-text">{site.email}</a>
                </div>
              </div>
            </div>
            <div className="card-base p-6">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-gold shrink-0">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-primary">Working Hours</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Mon – Sat: 9:00 AM – 7:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: By appointment</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <QuoteForm variant="compact" />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-16 sm:pb-24">
        <div className="container-x">
          <h2 className="heading-lg text-primary">Find our office</h2>
          <div className="card-base mt-6 overflow-hidden">
            <iframe
              title="SOPAN Constructions office location"
              src={mapsEmbed}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block border-0 w-full"
            />
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
