import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight, PencilLine } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import {
  docHref,
  findDocPage,
  slugify,
  type DocBlock,
} from "@/content/documentation";
import { breadcrumbSchema } from "@/schemas/jsonld";
import { DocBlocks } from "./doc-blocks";
import { DocImage } from "./doc-image";

export function DocPageView({ slug }: { slug: string }) {
  const found = findDocPage(slug);
  if (!found) notFound();
  const { page, group, prev, next } = found;

  const hasContent = !!page.blocks?.length;
  const headings = (page.blocks ?? []).filter(
    (b): b is Extract<DocBlock, { type: "heading" }> => b.type === "heading",
  );

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Documentation", path: "/documentation" },
    ...(slug !== "introduction"
      ? [{ name: page.title, path: docHref(slug) }]
      : []),
  ];

  return (
    <>
      <StructuredData data={breadcrumbSchema(crumbs)} />

      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_200px]">
        <article className="min-w-0">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-xs opacity-65"
          >
            <Link
              href="/documentation"
              className="hover:text-[rgb(var(--primary))]"
            >
              Documentation
            </Link>
            <ChevronRight size={12} />
            <span>{group.title}</span>
            {slug !== "introduction" && (
              <>
                <ChevronRight size={12} />
                <span aria-current="page" className="font-medium">
                  {page.title}
                </span>
              </>
            )}
          </nav>

          {/* Header */}
          <header className="mt-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[rgb(var(--primary))]">
              {group.title}
            </p>
            <h1 className="mt-2 font-[var(--font-space)] text-3xl font-bold leading-tight md:text-5xl">
              {page.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 opacity-75">
              {page.description}
            </p>
          </header>

          {/* Hero image */}
          <DocImage
            src={page.image ?? group.image}
            alt={`${page.title} illustration`}
            aspect="aspect-[21/9]"
            priority
            className="mt-8"
          />

          {/* Content or placeholder */}
          {hasContent ? (
            <DocBlocks blocks={page.blocks!} />
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-[rgb(var(--border))] p-10 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--primary)/0.12)] text-[rgb(var(--primary))]">
                <PencilLine size={22} />
              </span>
              <h2 className="mt-4 text-lg font-bold">
                This page is being written
              </h2>
              <p className="mx-auto mt-1 max-w-md text-sm opacity-65">
                Step-by-step instructions and screenshots will appear here soon.
              </p>
            </div>
          )}

          {/* Previous / Next */}
          <nav
            aria-label="Pagination"
            className="mt-14 grid gap-3 border-t border-[rgb(var(--border))] pt-6 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                href={docHref(prev.slug)}
                className="group rounded-xl border border-[rgb(var(--border))] p-4 transition-colors hover:border-[rgb(var(--primary))]"
              >
                <span className="flex items-center gap-1 text-xs opacity-60">
                  <ArrowLeft size={12} /> Previous
                </span>
                <span className="mt-1 block font-semibold group-hover:text-[rgb(var(--primary))]">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={docHref(next.slug)}
                className="group rounded-xl border border-[rgb(var(--border))] p-4 text-right transition-colors hover:border-[rgb(var(--primary))]"
              >
                <span className="flex items-center justify-end gap-1 text-xs opacity-60">
                  Next <ArrowRight size={12} />
                </span>
                <span className="mt-1 block font-semibold group-hover:text-[rgb(var(--primary))]">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </article>

        {/* On this page */}
        {headings.length > 0 && (
          <aside className="hidden xl:block">
            <div className="sticky top-24 text-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider opacity-55">
                On this page
              </p>
              <ul className="border-l border-[rgb(var(--border))]">
                {headings.map((h) => (
                  <li key={h.text}>
                    <a
                      href={`#${slugify(h.text)}`}
                      className="-ml-px block border-l border-transparent py-1 pl-3 opacity-70 transition-colors hover:border-[rgb(var(--primary))] hover:opacity-100"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </>
  );
}
