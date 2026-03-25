import Image from "next/image";
import { businessInfo, contactLinks, navigationItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,241,249,0.92))]">
      <div className="site-shell py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex h-16 items-center overflow-hidden">
              <Image
                src="/betullogo.png"
                alt={`${businessInfo.businessName} logosu`}
                width={240}
                height={64}
                className="h-full w-auto object-contain object-left"
              />
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
              Bandırma&apos;da halı, koltuk ve ev tekstili temizliğinde hijyen, özen ve düzenli iletişimi bir araya getiren yerel hizmet anlayışı.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-pink-strong)]">
              Hızlı Linkler
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-700 transition hover:text-[var(--color-brand-pink-strong)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-pink-strong)]">
              İletişim
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-700">
              <a href={contactLinks.tel}>{businessInfo.phoneDisplay}</a>
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp ile yazın
              </a>
              <p>{businessInfo.address}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--color-line)] pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {businessInfo.businessName}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
