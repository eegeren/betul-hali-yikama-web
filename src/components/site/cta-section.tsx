import { ContactButtons } from "./contact-buttons";
import { ParallaxAccent } from "./parallax-accent";
import { Reveal } from "./reveal";

export function CTASection() {
  return (
    <section className="section-space relative overflow-hidden">
      <ParallaxAccent
        className="absolute left-[8%] top-8 hidden h-28 w-28 rounded-full bg-[var(--color-accent)]/18 blur-3xl lg:block"
        offset={52}
      />
      <ParallaxAccent
        className="absolute right-[10%] top-24 hidden h-36 w-36 rounded-full bg-[var(--color-brand-pink)]/14 blur-3xl lg:block"
        offset={84}
      />
      <div className="site-shell">
        <Reveal>
          <div className="section-card mesh-surface overflow-hidden px-5 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <span className="eyebrow">Hızlı İletişim</span>
                <h2 className="mt-5 font-display text-[2.35rem] leading-[1] text-slate-950 sm:text-5xl">
                  Halılarınız için temiz, düzenli ve güven veren bir hizmet arıyorsanız bize ulaşın
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                  WhatsApp üzerinden birkaç bilgi paylaşmanız yeterli. Uygun planlama ve fiyat bilgisi için hızlıca dönüş sağlayalım.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <ContactButtons />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
