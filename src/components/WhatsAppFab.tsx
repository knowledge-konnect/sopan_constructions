import { MessageCircle } from "lucide-react";
import { waHref } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={waHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden lg:inline-flex fixed bottom-6 right-6 z-50 items-center gap-2.5 rounded-full bg-whatsapp pl-4 pr-5 py-3.5 text-white font-semibold text-sm shadow-[0_14px_36px_-10px_color-mix(in_oklab,var(--color-whatsapp)_70%,transparent)] hover:brightness-105 transition"
    >
      <MessageCircle className="h-5 w-5" />
      Chat on WhatsApp
    </a>
  );
}
