import type { IconItem } from "@/lib/site";

type ServiceCardProps = {
  item: IconItem;
};

export function ServiceCard({ item }: ServiceCardProps) {
  const Icon = item.icon;

  return (
    <article className="section-card card-hover group relative h-full overflow-hidden p-7">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[var(--color-accent)]/6 blur-2xl transition duration-300 group-hover:scale-125" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] transition duration-300 group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="relative mt-6 text-2xl font-semibold text-slate-950">{item.title}</h3>
      <p className="relative mt-3 text-base leading-7 text-[var(--color-muted)]">{item.description}</p>
    </article>
  );
}
