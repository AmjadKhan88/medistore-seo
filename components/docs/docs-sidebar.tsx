"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { allDocPages, docGroups, docHref } from "@/content/documentation";
import { cn } from "@/lib/utils";

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [q, setQ] = useState("");

  const groups = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return docGroups;
    return docGroups
      .map((g) => ({
        ...g,
        pages: g.pages.filter((p) => p.title.toLowerCase().includes(s)),
      }))
      .filter((g) => g.pages.length > 0);
  }, [q]);

  return (
    <nav aria-label="Documentation">
      <div className="relative mb-5">
        <Search
          size={14}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
        />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter pages…"
          aria-label="Filter documentation pages"
          className="w-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--muted))] py-2 pl-9 pr-3 text-sm outline-none focus:border-[rgb(var(--primary))]"
        />
      </div>

      {groups.map((g) => {
        const Icon = g.icon;
        return (
          <div key={g.title} className="mb-6">
            <p className="mb-2 flex items-center gap-2 px-1 text-[11px] font-bold uppercase tracking-wider opacity-60">
              <Icon size={13} className="text-[rgb(var(--primary))]" />{" "}
              {g.title}
            </p>
            <ul className="ml-1.5 border-l border-[rgb(var(--border))]">
              {g.pages.map((p) => {
                const href = docHref(p.slug);
                const active = pathname === href;
                return (
                  <li key={p.slug}>
                    <Link
                      href={href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "-ml-px block border-l-2 py-1.5 pl-3 pr-2 text-sm transition-colors",
                        active
                          ? "border-[rgb(var(--primary))] bg-[rgb(var(--primary)/0.07)] font-semibold text-[rgb(var(--primary))]"
                          : "border-transparent opacity-75 hover:border-[rgb(var(--foreground)/0.3)] hover:opacity-100",
                      )}
                    >
                      {p.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {groups.length === 0 && (
        <p className="px-1 text-sm opacity-60">No pages match “{q}”.</p>
      )}
    </nav>
  );
}

/** Desktop sidebar */
export function DocsSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto pr-3">
        <SidebarNav />
      </div>
    </aside>
  );
}

/** Mobile: sticky bar under the site header + slide-in drawer */
export function DocsMobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = allDocPages.find((p) => docHref(p.slug) === pathname);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="sticky top-16 z-40 border-b border-[rgb(var(--border))] bg-[rgb(var(--background))] lg:hidden">
        <div className="mx-auto flex w-[min(1280px,calc(100%-32px))] items-center justify-between gap-3 py-2.5">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-[rgb(var(--border))] px-3 py-1.5 text-sm font-medium"
          >
            <Menu size={16} /> Menu
          </button>
          <span className="truncate text-sm font-semibold">
            {current?.title ?? "Documentation"}
          </span>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[84%] max-w-[320px] flex-col bg-[rgb(var(--background))] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[rgb(var(--border))] p-4">
              <span className="font-bold">Documentation</span>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <SidebarNav onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
