import type { ReactNode } from "react";
import { DocsMobileNav, DocsSidebar } from "@/components/docs/docs-sidebar";

export default function DocumentationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <DocsMobileNav />
      <div className="mx-auto grid w-[min(1280px,calc(100%-32px))] gap-10 py-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:py-12">
        <DocsSidebar />
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
