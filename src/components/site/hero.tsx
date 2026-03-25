import { CheckCircle2, PhoneCall } from "lucide-react";
import Image from "next/image";
import { businessBlurb, businessInfo, heroStats, trustHighlights } from "@/lib/site";
import { ContactButtons } from "./contact-buttons";
import { ParallaxAccent } from "./parallax-accent";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="anasayfa" className="relative overflow-hidden pb-10 pt-6 sm:pb-16 sm:pt-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top_right,rgba(21,151,165,0.18),transparent_34%),radial-gradient(circle_at_left_center,rgba(14,116,144,0.12),transparent_28%)]" />
      <ParallaxAccent className="animate-pulse-soft absolute right-[8%] top-24 -z-10 h-44 w-44 rounded-full bg-sky-200/35 blur-3xl" offset={80} />
      <ParallaxAccent className="animate-float-slow absolute left-[6%] top-44 -z-10 hidden h-32 w-32 rounded-full bg-[var(--color-accent)]/12 blur-3xl lg:block" offset={120} />
      <div className="site-shell">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Bandırma Halı Yıkama</span>
              <h1 className="mt-5 font-display text-[2.9rem] leading-[0.94] text-slate-950 sm:mt-6 sm:text-6xl lg:text-7xl">
                Bandırma&apos;da temizliği ilk bakışta hissettiren profesyonel halı yıkama hizmeti
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:mt-6 sm:text-lg sm:leading-8">
                Hijyen, hızlı teslim, özenli hizmet ve müşteri memnuniyeti odağında; halı, koltuk ve ev tekstili temizliğinde düzenli, güven veren bir süreç sunuyoruz.
              </p>
              <div className="mt-7 sm:mt-8">
                <ContactButtons />
              </div>
              <div className="mt-7 flex flex-col gap-3 text-sm text-slate-600 sm:mt-8 sm:flex-row sm:flex-wrap">
                {heroStats.map((item) => (
                  <div
                    key={item}
                    className="glass-panel inline-flex w-full items-center gap-2 rounded-2xl px-4 py-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:w-auto sm:rounded-full"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-xl text-sm leading-7 text-slate-500">{businessBlurb}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="section-card relative overflow-hidden bg-white p-4 sm:p-8">
                <div className="animate-pulse-soft absolute right-0 top-0 h-36 w-36 rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
                <div className="animate-float-slow absolute bottom-0 left-0 h-32 w-32 rounded-full bg-sky-100 blur-3xl" />

                <div className="relative rounded-[1.5rem] border border-slate-100 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:rounded-[1.75rem] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                        Premium Servis
                      </p>
                      <div className="mt-3 flex h-14 items-center overflow-hidden sm:h-16">
                        <Image
                          src="/betullogo.png"
                          alt={`${businessInfo.businessName} logosu`}
                          width={220}
                          height={64}
                          className="h-full w-auto object-contain object-left"
                        />
                      </div>
                    </div>
                    <div className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent-strong)]">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {trustHighlights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[var(--color-accent)] shadow-sm">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="mt-4 text-base font-semibold text-slate-950">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[1.5rem] bg-slate-950 px-5 py-4 text-white">
                      <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                        Bandırma&apos;da güven veren hizmet
                      </p>
                      <p className="mt-2 text-base leading-7 text-white/90">
                        Adresten alım, özenli yıkama süreci ve düzenli teslim akışı ile yorucu bir süreç yaşamadan hizmet alın.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Hızlı İletişim
                      </p>
                      <p className="mt-3 break-words font-display text-[2rem] leading-none text-slate-950 sm:text-3xl">
                        {businessInfo.phoneDisplay}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        WhatsApp ve telefon üzerinden hızlı geri dönüş.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
