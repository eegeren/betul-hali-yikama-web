import { MessageCircle, Phone } from "lucide-react";
import { contactLinks } from "@/lib/site";

type ContactButtonsProps = {
  compact?: boolean;
};

export function ContactButtons({ compact = false }: ContactButtonsProps) {
  const baseClass = compact ? "px-5 py-3 text-sm" : "";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        className={`btn-primary w-full sm:w-auto ${baseClass}`}
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp&apos;tan Teklif Al
      </a>
      <a className={`btn-secondary w-full sm:w-auto ${baseClass}`} href={contactLinks.tel}>
        <Phone className="h-4 w-4" />
        Hemen Ara
      </a>
    </div>
  );
}
