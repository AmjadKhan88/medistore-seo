"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  BedDouble,
  Bell,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Copy,
  CreditCard,
  Download,
  Droplets,
  Eye,
  FileText,
  FlaskConical,
  Info,
  Lightbulb,
  Lock,
  Mail,
  Navigation,
  Package,
  Pencil,
  Pill,
  Plus,
  Printer,
  Receipt,
  Save,
  Search,
  Settings,
  ShieldCheck,
  Stethoscope,
  Trash2,
  Truck,
  Upload,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  pill: Pill,
  users: Users,
  "user-plus": UserPlus,
  receipt: Receipt,
  package: Package,
  truck: Truck,
  settings: Settings,
  search: Search,
  plus: Plus,
  save: Save,
  "file-text": FileText,
  calendar: Calendar,
  flask: FlaskConical,
  bell: Bell,
  shield: ShieldCheck,
  "bar-chart": BarChart3,
  upload: Upload,
  download: Download,
  check: CheckCircle2,
  alert: AlertTriangle,
  "credit-card": CreditCard,
  stethoscope: Stethoscope,
  clipboard: ClipboardList,
  mail: Mail,
  printer: Printer,
  trash: Trash2,
  edit: Pencil,
  eye: Eye,
  lock: Lock,
  hospital: Building2,
  bed: BedDouble,
  droplet: Droplets,
  activity: Activity,
};

const codeInline =
  "rounded bg-[rgb(var(--muted))] px-1 py-0.5 text-[0.85em] font-mono";

function MdLink({ href, children }: { href?: string; children?: ReactNode }) {
  const cls =
    "font-medium text-[rgb(var(--primary))] underline underline-offset-2 hover:opacity-80";
  if (href?.startsWith("/"))
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}

/** Inline-only markdown (bold, code, links) used inside steps and callouts */
function Inline({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      allowedElements={["p", "strong", "em", "code", "a"]}
      unwrapDisallowed
      components={{
        p: ({ children }) => <>{children}</>,
        code: ({ children }) => <code className={codeInline}>{children}</code>,
        a: MdLink,
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

function PathBlock({ text }: { text: string }) {
  const parts = text
    .split(/\s*(?:->|>|→|›)\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
  return (
    <div className="my-3 rounded-xl border border-[rgb(var(--primary)/0.25)] bg-[rgb(var(--primary)/0.06)] p-3">
      <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[rgb(var(--primary))]">
        <Navigation size={12} /> Navigation path
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {parts.map((p, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <span
              className={cn(
                "rounded-md px-2 py-1 text-xs font-semibold",
                i === parts.length - 1
                  ? "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))]"
                  : "border border-[rgb(var(--border))] bg-[rgb(var(--background))]",
              )}
            >
              {p}
            </span>
            {i < parts.length - 1 && (
              <ChevronRight size={14} className="opacity-50" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function StepsBlock({ text }: { text: string }) {
  const steps = text
    .split("\n")
    .map((l) => l.trim().replace(/^\d+[.)]\s*/, ""))
    .filter(Boolean)
    .map((line) => {
      const p = line.split("|").map((s) => s.trim());
      const hasIcon = !!ICONS[p[0]?.toLowerCase()];
      if (hasIcon)
        return {
          icon: p[0].toLowerCase(),
          title: p[1] ?? "",
          detail: p.slice(2).join(" | "),
        };
      return { icon: "", title: p[0], detail: p.slice(1).join(" | ") };
    });

  return (
    <ol className="my-3">
      {steps.map((s, i) => {
        const Icon = ICONS[s.icon];
        return (
          <li key={i} className="relative flex gap-3 pb-4 last:pb-0">
            {i < steps.length - 1 && (
              <span className="absolute left-[15px] top-8 h-[calc(100%-2rem)] w-px bg-[rgb(var(--border))]" />
            )}
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--primary)/0.12)] text-[rgb(var(--primary))] ring-4 ring-[rgb(var(--card))]">
              {Icon ? (
                <Icon size={15} />
              ) : (
                <span className="text-xs font-bold">{i + 1}</span>
              )}
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-[13px] font-semibold leading-snug">
                <span className="mr-1 text-[rgb(var(--primary))]">
                  {i + 1}.
                </span>
                {s.title}
              </p>
              {s.detail && (
                <p className="mt-0.5 text-xs leading-relaxed opacity-75">
                  <Inline text={s.detail} />
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

const CALLOUTS = {
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
  success: {
    icon: CheckCircle2,
    label: "Done",
    cls: "border-emerald-500/40 bg-emerald-500/10",
    ic: "text-emerald-600",
  },
} as const;

function Callout({
  kind,
  text,
}: {
  kind: keyof typeof CALLOUTS;
  text: string;
}) {
  const c = CALLOUTS[kind];
  const Icon = c.icon;
  return (
    <div className={cn("my-3 flex gap-2.5 rounded-xl border p-3", c.cls)}>
      <Icon size={16} className={cn("mt-0.5 shrink-0", c.ic)} />
      <div className="min-w-0 text-xs leading-relaxed">
        <span className="mr-1 font-bold">{c.label}:</span>
        <Inline text={text} />
      </div>
    </div>
  );
}

function CodeBlock({ lang, text }: { lang?: string; text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="my-3 overflow-hidden rounded-xl border border-[rgb(var(--border))]">
      <div className="flex items-center justify-between bg-[rgb(var(--muted))] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider opacity-80">
        <span>{lang || "code"}</span>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="inline-flex items-center gap-1 hover:opacity-100"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}{" "}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-3 text-xs leading-relaxed">
        <code>{text}</code>
      </pre>
    </div>
  );
}

const components: Components = {
  pre: ({ children }) => <>{children}</>,
  code: ({ className, children }) => {
    const lang = /language-([\w-]+)/.exec(className || "")?.[1];
    const text = String(children).replace(/\n$/, "");
    if (!lang && !text.includes("\n"))
      return <code className={codeInline}>{children}</code>;
    switch (lang) {
      case "path":
        return <PathBlock text={text} />;
      case "steps":
        return <StepsBlock text={text} />;
      case "tip":
      case "note":
      case "warning":
      case "success":
        return <Callout kind={lang} text={text} />;
      default:
        return <CodeBlock lang={lang} text={text} />;
    }
  },
  h1: ({ children }) => (
    <h3 className="mb-1.5 mt-4 text-base font-bold">{children}</h3>
  ),
  h2: ({ children }) => (
    <h3 className="mb-1.5 mt-4 text-[15px] font-bold">{children}</h3>
  ),
  h3: ({ children }) => (
    <h4 className="mb-1 mt-3 text-sm font-bold">{children}</h4>
  ),
  p: ({ children }) => <p className="my-2">{children}</p>,
  ul: ({ children }) => (
    <ul className="my-2 list-disc space-y-1 pl-5 marker:text-[rgb(var(--primary))]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-2 list-decimal space-y-1 pl-5 marker:font-semibold marker:text-[rgb(var(--primary))]">
      {children}
    </ol>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  a: MdLink,
  hr: () => <hr className="my-3 border-[rgb(var(--border))]" />,
  blockquote: ({ children }) => (
    <blockquote className="my-2 border-l-2 border-[rgb(var(--primary))] pl-3 italic opacity-80">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="my-3 overflow-x-auto rounded-lg border border-[rgb(var(--border))]">
      <table className="w-full border-collapse text-xs">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="bg-[rgb(var(--muted))] px-2.5 py-1.5 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-t border-[rgb(var(--border))] px-2.5 py-1.5 align-top">
      {children}
    </td>
  ),
};

export function ChatMarkdown({ content }: { content: string }) {
  return (
    <div className="text-[13.5px] leading-relaxed [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
