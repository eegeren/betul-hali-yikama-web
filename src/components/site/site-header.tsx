"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { businessInfo, contactLinks, navigationItems } from "@/lib/site";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        isScrolled ? "bg-white/78 shadow-[0_12px_40px_rgba(242,8,139,0.08)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="site-shell">
        <div className="flex h-18 items-center justify-between gap-3 sm:h-20 sm:gap-4">
          <a href="#anasayfa" className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 items-center overflow-hidden sm:h-14">
              <Image
                src="/betullogo.png"
                alt={`${businessInfo.businessName} logosu`}
                width={210}
                height={56}
                className="h-full w-auto object-contain object-left"
                priority
              />
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[var(--color-brand-pink-strong)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a className="btn-secondary px-5 py-3" href={contactLinks.tel}>
              <Phone className="h-4 w-4" />
              Hemen Ara
            </a>
            <a
              className="btn-primary px-5 py-3"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Menüyü aç"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/90 text-[var(--color-ink)] shadow-sm lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-[var(--color-line)] bg-white/94 backdrop-blur-xl lg:hidden"
          >
            <div className="site-shell max-h-[calc(100vh-4.5rem)] overflow-y-auto py-6 pb-8">
              <nav className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-[var(--color-brand-pink-soft)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-5 flex flex-col gap-3">
                <a className="btn-secondary" href={contactLinks.tel} onClick={() => setIsOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Hemen Ara
                </a>
                <a
                  className="btn-primary"
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp&apos;tan Yaz
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
