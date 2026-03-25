import { reasons } from "@/lib/site";
import { FeatureCard } from "./feature-card";
import { ParallaxAccent } from "./parallax-accent";
import { Reveal } from "./reveal";
import { SectionTitle } from "./section-title";

export function WhyChooseUs() {
  return (
    <section id="neden-biz" className="section-space relative overflow-hidden bg-[var(--color-surface-soft)]">
      <ParallaxAccent
        className="absolute right-[10%] mt-10 hidden h-40 w-40 rounded-full bg-[var(--color-accent)]/10 blur-3xl lg:block"
        offset={72}
      />
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionTitle
              eyebrow="Neden Biz"
              title="Temizlik kadar süreç yönetimine de önem veriyoruz"
              description="Bandırma halı yıkama hizmetinde memnuniyet çoğu zaman detaylarda oluşur. Kullanılan ekipman, kumaşa uygun işlem, iletişim biçimi ve teslim düzeni sonuç kadar önemlidir."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <FeatureCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
