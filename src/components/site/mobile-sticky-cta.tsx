"use client";

import { MessageCircle, Phone } from "lucide-react";
import { contactLinks } from "@/lib/site";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/96 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-3">
        <a className="btn-secondary w-full px-4 py-3 text-sm" href={contactLinks.tel}>
          <Phone className="h-4 w-4" />
          Hemen Ara
        </a>
        <a
          className="btn-primary w-full px-4 py-3 text-sm"
          href={contactLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
