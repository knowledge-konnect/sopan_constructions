import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { phoneHref, waHref } from "@/lib/site";

export function CallbackBar({ showContact = false, topGap = false }: { showContact?: boolean; topGap?: boolean }) {
  return (
    <section className={`bg-background pb-14 sm:pb-20 ${topGap ? "pt-12 sm:pt-16" : ""}`}>
      <div className="container-x">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-white shadow-elegant">
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,var(--color-gold),transparent_40%),radial-gradient(circle_at_80%_80%,var(--color-gold),transparent_45%)]" />
          <div className="relative grid gap-8 px-6 py-10 sm:px-12 sm:py-14 md:grid-cols-[1.4fr_auto] md:items-center">
            <div>
              <span className="eyebrow">Free Estimate</span>
              <h3 className="heading-lg mt-2 text-white">Ready to Build Your Dream Home?</h3>
              <p className="mt-3 text-white/75 max-w-xl leading-relaxed">
                Tell us about your construction or design requirements. Our team will connect with you to discuss your project.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-3 md:justify-end">
              <Link to="/quote" className="btn-primary">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              {showContact && (
                <>
                  <a href={phoneHref} className="btn-outline-light">Call us</a>
                  <a href={waHref()} target="_blank" rel="noreferrer" className="btn-whatsapp">WhatsApp</a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
