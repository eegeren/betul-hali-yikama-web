import { processSteps } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionTitle } from "./section-title";

export function ProcessSteps() {
  return (
    <section className="section-space">
      <div className="site-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Süreç"
            title="Hizmet almak birkaç basit adımda tamamlanır"
            description="Süreci mümkün olduğunca kolay ve yorulmadan ilerletebilmeniz için hizmet akışını net tutuyoruz."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.06}>
              <article className="section-card relative h-full p-7">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                  {step.step}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
