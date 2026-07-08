import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema } from "@/schemas/jsonld";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <StructuredData data={breadcrumbSchema(items)} />
      <nav className="container flex flex-wrap items-center gap-2 py-4 text-sm text-[rgb(var(--foreground) / 0.66)]" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={item.path} className="flex items-center gap-2">
            {index < items.length - 1 ? <Link href={item.path}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}
            {index < items.length - 1 ? <ChevronRight size={14} /> : null}
          </span>
        ))}
      </nav>
    </>
  );
}
