"use client";

import { Calculator, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { businessInfo } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionTitle } from "./section-title";

const pricingOptions = [
  { label: "Makina Halısı", pricePerSquareMeter: 100 },
  { label: "Shaggy Halı", pricePerSquareMeter: 110 },
  { label: "Yün Halı", pricePerSquareMeter: 130 },
  { label: "El Halısı", pricePerSquareMeter: 150 },
  { label: "Doğal / Bambu / İpek Halı", pricePerSquareMeter: 200 },
] as const;

function formatNumber(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function PriceCalculator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [selectedType, setSelectedType] = useState(pricingOptions[0].label);

  const selectedPricing =
    pricingOptions.find((item) => item.label === selectedType) ?? pricingOptions[0];

  const area = useMemo(() => {
    const parsedWidth = Number(width.replace(",", "."));
    const parsedHeight = Number(height.replace(",", "."));

    if (!Number.isFinite(parsedWidth) || !Number.isFinite(parsedHeight)) {
      return 0;
    }

    if (parsedWidth <= 0 || parsedHeight <= 0) {
      return 0;
    }

    return parsedWidth * parsedHeight;
  }, [height, width]);

  const total = area * selectedPricing.pricePerSquareMeter;
  const hasResult = area > 0;
  const whatsappMessage = encodeURIComponent(
    hasResult
      ? `Merhaba, ${selectedPricing.label} için ölçüm ${width} m x ${height} m. Toplam ${formatNumber(area)} m² için fiyat bilgisi almak istiyorum.`
      : "Merhaba, halı yıkama fiyat bilgisi almak istiyorum."
  );

  return (
    <section id="fiyat-hesaplama" className="section-space bg-[var(--color-surface-soft)]">
      <div className="site-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Fiyat Hesaplama"
            title="Metrekareye göre hızlı fiyat hesabı yapın"
            description="Halı türünü seçin, en ve boy ölçüsünü girin. Sistem seçtiğiniz halı tipinin m² fiyatına göre tahmini toplam tutarı anında hesaplasın."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <Reveal>
            <div className="section-card h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-brand-pink-soft)] text-[var(--color-accent)]">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-ink)]">Ölçü Girin</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                    Önce halı türünü seçin, ardından en ve boy ölçüsünü metre cinsinden yazın.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--color-ink)]">Halı Türü</span>
                  <select
                    value={selectedType}
                    onChange={(event) => setSelectedType(event.target.value)}
                    className="w-full rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-base text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
                  >
                    {pricingOptions.map((item) => (
                      <option key={item.label} value={item.label}>
                        {item.label} - {formatNumber(item.pricePerSquareMeter)} TL / m²
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--color-ink)]">En (metre)</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="0.01"
                    value={width}
                    onChange={(event) => setWidth(event.target.value)}
                    placeholder="Örn. 2"
                    className="w-full rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-base text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[var(--color-ink)]">Boy (metre)</span>
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="0.01"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    placeholder="Örn. 3"
                    className="w-full rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-base text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
                  />
                </label>
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-[linear-gradient(135deg,var(--color-brand-pink-soft),rgba(255,255,255,0.95))] p-5 text-sm leading-7 text-[var(--color-muted)]">
                Hesaplama mantığı: <strong>en x boy = metrekare</strong>
                <br />
                Seçilen fiyat:{" "}
                <strong>
                  {selectedPricing.label} - {formatNumber(selectedPricing.pricePerSquareMeter)} TL / m²
                </strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="section-card h-full p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-pink-strong)]">
                Tahmini Sonuç
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/90 p-5">
                  <p className="text-sm text-[var(--color-muted)]">Toplam alan</p>
                  <p className="mt-2 font-display text-5xl leading-none text-[var(--color-ink)]">
                    {hasResult ? formatNumber(area) : "0"} <span className="text-2xl">m²</span>
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,var(--color-brand-pink),var(--color-brand-pink-strong))] p-5 text-white shadow-[0_20px_44px_rgba(242,8,139,0.22)]">
                  <p className="text-sm text-white/80">Tahmini fiyat</p>
                  <p className="mt-2 font-display text-5xl leading-none">
                    {hasResult ? formatNumber(total) : "0"} <span className="text-2xl">TL</span>
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-[var(--color-line)] bg-white/88 p-5 text-sm leading-7 text-[var(--color-muted)]">
                Örnek: 2 metre x 3 metre halı için toplam alan 6 m² olur.
                <br />
                {selectedPricing.label} için tahmini ücret:{" "}
                <strong>{formatNumber(6 * selectedPricing.pricePerSquareMeter)} TL</strong>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-[var(--color-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(255,244,251,0.9))] p-5 text-sm leading-7 text-[var(--color-muted)]">
                İstisnai durumlar olabilir:
                <br />
                Çok hassas doku, ağır leke, özel işlem gerektiren ürünler, saçak ve kenar onarımı gibi durumlarda nihai fiyat inceleme sonrası netleşebilir.
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${businessInfo.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp&apos;tan Gönder
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
