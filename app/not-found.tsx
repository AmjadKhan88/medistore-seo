import Link from "next/link";
import { Home } from "lucide-react";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="grid-bg py-24">
      <div className="container max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgb(var(--primary))]">404</p>
        <h1 className="mt-4 font-[var(--font-space)] text-5xl font-bold">Page not found</h1>
        <p className="mt-4 leading-8 text-[rgb(var(--foreground) / 0.74)]">The page may have moved, but the pharmacy management resources are still available.</p>
        <div className="mt-8"><LinkButton href="/"><Home size={18} /> Back home</LinkButton></div>
        <p className="mt-4 text-sm"><Link href="/search">Search resources</Link></p>
      </div>
    </section>
  );
}
