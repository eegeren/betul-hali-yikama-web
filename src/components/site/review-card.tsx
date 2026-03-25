type ReviewCardProps = {
  name: string;
  location: string;
  text: string;
};

export function ReviewCard({ name, location, text }: ReviewCardProps) {
  return (
    <article className="section-card card-hover group relative h-full overflow-hidden p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)]/60 to-transparent opacity-70" />
      <div className="flex items-center gap-1 text-[var(--color-accent)]" aria-label="5 yıldız">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <p className="mt-5 text-base leading-8 text-slate-700">&ldquo;{text}&rdquo;</p>
      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="font-semibold text-slate-950">{name}</p>
        <p className="mt-1 text-sm text-slate-500">{location}, Bandırma</p>
      </div>
    </article>
  );
}
