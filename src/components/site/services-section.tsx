import { services } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionTitle } from "./section-title";
import { ServiceCard } from "./service-card";

export function ServicesSection() {
  return (
    <section id="hizmetler" className="section-space">
      <div className="site-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Hizmetler"
            title="Bandırma için özenle planlanmış temizlik hizmetleri"
            description="Profesyonel halı yıkama Bandırma aramalarında beklenen şey sadece temizlik değil; düzenli iletişim, doğru işlem ve güvenli teslimattır. Hizmetlerimizi tam olarak bu anlayışla sunuyoruz."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <ServiceCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
