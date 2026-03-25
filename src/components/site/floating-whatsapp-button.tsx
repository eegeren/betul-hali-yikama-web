"use client";

import { motion } from "framer-motion";
import { MessageCircleMore } from "lucide-react";
import { contactLinks } from "@/lib/site";

export function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={contactLinks.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp'tan teklif al"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
      className="fixed bottom-5 right-5 z-40 hidden items-center gap-3 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,23,42,0.24)] transition hover:bg-slate-900 md:inline-flex"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-white">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp&apos;tan Teklif Al</span>
    </motion.a>
  );
}
