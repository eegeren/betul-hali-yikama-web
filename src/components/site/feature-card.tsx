import type { IconItem } from "@/lib/site";

type FeatureCardProps = {
  item: IconItem;
};

export function FeatureCard({ item }: FeatureCardProps) {
  const Icon = item.icon;

  return (
    <article className="section-card card-hover group h-full p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition duration-300 group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
        </div>
      </div>
    </article>
  );
}
