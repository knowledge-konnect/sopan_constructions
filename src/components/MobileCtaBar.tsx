import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { phoneHref, waHref } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-white/10 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/85 pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a href={phoneHref} className="flex flex-col items-center gap-1 py-3 text-white/90 active:bg-white/10">
          <Phone className="h-5 w-5 text-gold" />
          <span className="text-[11px] font-semibold tracking-wide">Call</span>
        </a>
        <a
          href={waHref()}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-white/90 active:bg-white/10"
        >
          <MessageCircle className="h-5 w-5 text-whatsapp" />
          <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
        </a>
        <Link to="/quote" className="flex flex-col items-center gap-1 py-3 bg-gold text-primary">
          <FileText className="h-5 w-5" />
          <span className="text-[11px] font-bold tracking-wide">Quote</span>
        </Link>
      </div>
    </div>
  );
}
