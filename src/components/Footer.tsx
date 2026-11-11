import { mailHref, phoneHref, site, waHref } from "@/lib/site";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-x py-16 md:py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/sopan-logo-footer.png"
            alt="SOPAN Constructions and Infra Developers"
            width={800}
            height={303}
            className="block h-14 w-auto md:h-16 lg:h-20 object-contain"
          />
          <p className="mt-5 text-[15px] text-white/75 leading-relaxed max-w-xs">
            Residential construction and design solutions with clear communication, practical planning and quality workmanship.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-[15px] text-white/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Projects</Link></li>
            <li><Link to="/quote" className="hover:text-gold">Get a Free Quote</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-gold mb-4">Services</h4>
          <ul className="space-y-2.5 text-[15px] text-white/80">
            <li>Residential Construction</li>
            <li>Apartment Construction</li>
            <li>Planning & Design</li>
            <li>Renovation & Remodeling</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-gold mb-5">Get in touch</h4>
          <ul className="space-y-4 text-[15px] text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              <span className="leading-relaxed">
                {site.address.line1}, {site.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              <a href={phoneHref} className="hover:text-gold transition-colors">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              <a href={mailHref()} className="break-all hover:text-gold transition-colors">{site.email}</a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              <a href={waHref()} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-white/65">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <p>Residential construction and design solutions.</p>
        </div>
      </div>
    </footer>
  );
}
