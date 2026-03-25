import { Clock3, MapPinned, MessageCircle, Phone } from "lucide-react";
import { businessInfo, businessInfoList, contactLinks, workingHours } from "@/lib/site";
import { ContactButtons } from "./contact-buttons";
import { Reveal } from "./reveal";
import { SectionTitle } from "./section-title";

export function ContactSection() {
  return (
    <section id="iletisim" className="section-space pb-32 md:pb-24">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="section-card h-full p-7 sm:p-8">
              <SectionTitle
                eyebrow="İletişim"
                title="Tek dokunuşla ulaşın"
                description="Mobilde hızlı arama, WhatsApp üzerinden teklif alma ve konum bilgisine doğrudan erişim için tüm iletişim kanallarını sade şekilde bir araya getirdik."
              />
              <div className="mt-8 grid gap-4">
                <a
                  href={contactLinks.tel}
                  className="rounded-[1.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,244,251,0.9))] p-5 transition hover:border-[var(--color-line-strong)] hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[var(--color-accent)]" />
                    <span className="font-semibold text-slate-950">Telefon</span>
                  </div>
                  <p className="mt-2 text-lg text-slate-700">{businessInfo.phoneDisplay}</p>
                </a>
                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(240,251,255,0.92))] p-5 transition hover:border-[var(--color-line-strong)] hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-[var(--color-accent)]" />
                    <span className="font-semibold text-slate-950">WhatsApp</span>
                  </div>
                  <p className="mt-2 text-lg text-slate-700">Hızlı teklif ve bilgi için yazın</p>
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {businessInfoList.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/92 p-4">
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    <p className="mt-2 break-words text-base font-semibold leading-7 text-slate-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-[var(--color-line)] bg-white/92 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Çalışma Saatleri
                </h3>
                <div className="mt-4 grid gap-3">
                  {workingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex flex-col items-start justify-between gap-1 border-b border-slate-100 pb-3 text-sm last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:gap-4"
                    >
                      <span className="font-medium text-slate-700">{item.day}</span>
                      <span className="text-slate-500">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-[1.5rem] bg-[linear-gradient(135deg,var(--color-brand-pink-soft),var(--color-accent-soft))] p-5 text-sm leading-7 text-slate-700">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-[var(--color-accent-strong)]" />
                <p>
                  Bandırma içinde servis planlaması için WhatsApp üzerinden yazabilir ya da doğrudan arayabilirsiniz. Yoğunluğa göre en uygun alım ve teslim gününü birlikte netleştiririz.
                </p>
              </div>

              <div className="mt-8">
                <ContactButtons compact />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="section-card h-full overflow-hidden p-4 sm:p-5">
              <div className="flex items-center gap-3 px-3 pb-4 pt-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-brand-pink-soft),var(--color-accent-soft))] text-[var(--color-accent)]">
                  <MapPinned className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-slate-950">Konum</h3>
                  <p className="break-words text-sm leading-6 text-slate-500">
                    {businessInfo.address}
                  </p>
                </div>
              </div>
              <iframe
                title={`${businessInfo.businessName} konumu`}
                src={contactLinks.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full rounded-[1.5rem] border border-[var(--color-line)] sm:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
