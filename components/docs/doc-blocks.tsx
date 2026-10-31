import { Fragment } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Building2,
  Info,
  Lightbulb,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import { docHref, slugify, type DocBlock } from "@/content/documentation";
import { cn } from "@/lib/utils";
import { DocImage } from "./doc-image";
import Link from "next/link";

const CALLOUT = {
  tip: {
    icon: Lightbulb,
    label: "Tip",
    cls: "border-emerald-500/40 bg-emerald-500/10",
    ic: "text-emerald-600",
  },
  note: {
    icon: Info,
    label: "Note",
    cls: "border-sky-500/40 bg-sky-500/10",
    ic: "text-sky-600",
  },
  warning: {
    icon: AlertTriangle,
    label: "Warning",
    cls: "border-amber-500/40 bg-amber-500/10",
    ic: "text-amber-600",
  },
} as const;

// Icon names you can use in { type: "cards" } blocks
const CARD_ICONS: Record<string, LucideIcon> = {
  pill: Pill,
  stethoscope: Stethoscope,
  building: Building2,
  chart: BarChart3,
  sparkles: Sparkles,
  shield: ShieldCheck,
  users: Users,
};

/** Renders **bold** text. Use it for button names and UI labels. */
const safeHref = (href: string) => /^(https?:\/\/|mailto:|tel:|\/)/.test(href);

/** Renders **bold** text and [label](link) links. Use it for button names and contact details. */
function Inline({ text }: { text: string }) {
  const linkClass =
    "font-medium text-[rgb(var(--primary))] underline underline-offset-2 hover:opacity-80";

  return (
    <>
      {text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g).map((part, i) => {
        const bold = /^\*\*([^*]+)\*\*$/.exec(part);
        if (bold) {
          return (
            <strong
              key={i}
              className="font-semibold text-[rgb(var(--foreground))]"
            >
              {bold[1]}
            </strong>
          );
        }

        const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
        if (link && safeHref(link[2])) {
          const [, label, href] = link;
          if (href.startsWith("/")) {
            return (
              <Link key={i} href={href} className={linkClass}>
                {label}
              </Link>
            );
          }
          const external = href.startsWith("http");
          return (
            <a
              key={i}
              href={href}
              className={linkClass}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>
          );
        }

        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

export function DocBlocks({ blocks }: { blocks: DocBlock[] }) {
  return (
    <div className="mt-8">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "heading":
            return (
              <h2
                key={i}
                id={slugify(b.text)}
                className="mb-3 mt-12 scroll-mt-32 text-2xl font-bold tracking-tight"
              >
                {b.text}
              </h2>
            );
          case "subheading":
            return (
              <h3 key={i} className="mb-2 mt-8 text-lg font-semibold">
                {b.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i} className="my-4 leading-8 opacity-80">
                <Inline text={b.text} />
              </p>
            );
          case "list": {
            const Tag = b.ordered ? "ol" : "ul";
            return (
              <Tag
                key={i}
                className={cn(
                  "my-4 space-y-2 pl-6 leading-7 opacity-80 marker:text-[rgb(var(--primary))]",
                  b.ordered ? "list-decimal" : "list-disc",
                )}
              >
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Inline text={it} />
                  </li>
                ))}
              </Tag>
            );
          }
          case "image":
            return (
              <DocImage key={i} src={b.src} alt={b.alt} caption={b.caption} />
            );
          case "steps":
            return (
              <ol key={i} className="my-6">
                {b.items.map((s, j) => (
                  <li key={j} className="relative flex gap-4 pb-6 last:pb-0">
                    {j < b.items.length - 1 && (
                      <span className="absolute left-[15px] top-9 h-[calc(100%-2.25rem)] w-px bg-[rgb(var(--border))]" />
                    )}
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--primary))] text-sm font-bold text-[rgb(var(--primary-foreground))]">
                      {j + 1}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-semibold">
                        <Inline text={s.title} />
                      </p>
                      {s.detail && (
                        <p className="mt-1 text-sm leading-7 opacity-75">
                          <Inline text={s.detail} />
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            );
          case "callout": {
            const c = CALLOUT[b.kind];
            const Icon = c.icon;
            return (
              <div
                key={i}
                className={cn("my-6 flex gap-3 rounded-xl border p-4", c.cls)}
              >
                <Icon size={18} className={cn("mt-0.5 shrink-0", c.ic)} />
                <p className="text-sm leading-7">
                  <span className="mr-1 font-bold">{c.label}:</span>
                  <Inline text={b.text} />
                </p>
              </div>
            );
          }
          case "cards":
            return (
              <div
                key={i}
                className={cn(
                  "my-6 grid gap-4",
                  b.items.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2",
                )}
              >
                {b.items.map((c, j) => {
                  const Icon = c.icon ? CARD_ICONS[c.icon] : undefined;
                  return (
                    <div
                      key={j}
                      className="rounded-2xl border border-[rgb(var(--border))] p-5 transition-colors hover:border-[rgb(var(--primary))]"
                    >
                      {Icon && (
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgb(var(--primary)/0.12)] text-[rgb(var(--primary))]">
                          <Icon size={20} />
                        </span>
                      )}
                      <h3 className={cn("text-base font-bold", Icon && "mt-4")}>
                        {c.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-7 opacity-75">
                        <Inline text={c.text} />
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          case "links":
            return (
              <div key={i} className="my-6 grid gap-3 sm:grid-cols-2">
                {b.items.map((l, j) => (
                  <Link
                    key={j}
                    href={docHref(l.slug)}
                    className="group flex items-start justify-between gap-3 rounded-xl border border-[rgb(var(--border))] p-4 transition-colors hover:border-[rgb(var(--primary))]"
                  >
                    <span className="min-w-0">
                      <span className="block font-semibold group-hover:text-[rgb(var(--primary))]">
                        {l.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 opacity-70">
                        {l.text}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      className="mt-1 shrink-0 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:text-[rgb(var(--primary))] group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            );

          case "table":
            return (
              <div
                key={i}
                className="my-6 overflow-x-auto rounded-xl border border-[rgb(var(--border))]"
              >
                <table className="w-full min-w-[560px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-[rgb(var(--muted))] text-left">
                      {b.headers.map((h, j) => (
                        <th key={j} className="px-4 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr
                        key={j}
                        className="border-t border-[rgb(var(--border))]"
                      >
                        {r.map((c, k) => (
                          <td
                            key={k}
                            className={cn(
                              "px-4 py-3 align-top leading-6",
                              k === 0 && "font-semibold",
                            )}
                          >
                            <Inline text={c} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
