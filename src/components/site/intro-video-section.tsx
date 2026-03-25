import { Reveal } from "./reveal";
import { SectionTitle } from "./section-title";

export function IntroVideoSection() {
  return (
    <section id="tanitim-videosu" className="section-space">
      <div className="site-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Tanıtım Videosu"
            title="Betül Halı Yıkama hizmetini yakından izleyin"
            description="Halı yıkama sürecimizi ve çalışma düzenimizi videodan inceleyebilir, hizmet kalitemizi daha yakından görebilirsiniz."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="section-card mt-12 overflow-hidden p-3 sm:mt-14 sm:p-4">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-950">
              <video
                autoPlay
                muted
                loop
                controls
                preload="metadata"
                playsInline
                className="aspect-video w-full"
                aria-label="Betül Halı Yıkama tanıtım videosu"
              >
                <source src="/videos/betulhaliyikama-tanitim.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
