export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[rgb(var(--primary))]">{eyebrow}</p> : null}
      <h2 className="font-[var(--font-space)] text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-[rgb(var(--foreground) / 0.72)]">{description}</p> : null}
    </div>
  );
}
