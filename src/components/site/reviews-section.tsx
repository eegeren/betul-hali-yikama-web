import { reviews } from "@/lib/site";
import { Reveal } from "./reveal";
import { ReviewCard } from "./review-card";
import { SectionTitle } from "./section-title";

export function ReviewsSection() {
  return (
    <section id="yorumlar" className="section-space bg-[var(--color-surface-soft)]">
      <div className="site-shell">
        <Reveal>
          <SectionTitle
            eyebrow="Yorumlar"
            title="Bandırma'daki müşterilerimizin deneyimleri"
            description="Abartılı vaatlerden çok, düzenli hizmet deneyimi önemlidir. Yorumları da bu samimiyetle seçtik."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.06}>
              <ReviewCard {...review} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
