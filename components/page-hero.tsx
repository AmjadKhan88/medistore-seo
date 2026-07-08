import { AppCta } from "@/components/cta-link";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="grid-bg py-16 md:py-24">
      <div className="container max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[rgb(var(--primary))]">{eyebrow}</p>
        <h1 className="font-[var(--font-space)] text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-[rgb(var(--foreground) / 0.76)]">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <AppCta label="Get Started" />
          <AppCta label="Login" variant="outline" />
        </div>
      </div>
    </section>
  );
}
