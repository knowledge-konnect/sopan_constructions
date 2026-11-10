import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CallbackBar() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,var(--color-gold),transparent_40%),radial-gradient(circle_at_80%_80%,var(--color-gold),transparent_45%)]" />
      <div className="container-x relative py-14 sm:py-16 grid gap-8 md:grid-cols-[1.4fr_auto] md:items-center">
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
        </div>
      </div>
    </section>
  );
}

