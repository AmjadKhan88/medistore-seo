"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  Bot,
  CheckCircle2,
  Database,
  Eraser,
  Eye,
  EyeOff,
  FileText,
  FileUp,
  Loader2,
  Pencil,
  Plus,
  RefreshCw,
  Save,
  Search,
  Trash2,
  X,
} from "lucide-react";

type KDoc = {
  _id: string;
  title: string;
  type: "pdf" | "text";
  fileName?: string;
  fileSize?: number;
  pages?: number;
  charCount: number;
  chunkCount: number;
  status: "processing" | "ready" | "failed" | "unindexed";
  error?: string;
  enabled: boolean;
  indexedAt?: string;
  createdAt: string;
  content?: string;
};
type Stats = {
  totalDocs: number;
  readyDocs: number;
  totalChunks: number;
  pineconeVectors: number | null;
};
type Match = {
  docId: string;
  title: string;
  text: string;
  score: number;
  chunkIndex: number;
  enabled: boolean;
};

const input =
  "w-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--muted))] px-3 py-2 text-sm outline-none focus:border-[rgb(var(--primary))]";
const btn =
  "inline-flex items-center gap-1.5 rounded-lg border border-[rgb(var(--border))] px-2.5 py-1.5 text-xs font-semibold hover:bg-[rgb(var(--muted))] disabled:opacity-40";
const btnPrimary =
  "inline-flex items-center gap-1.5 rounded-lg bg-[rgb(var(--primary))] px-4 py-2 text-sm font-semibold text-[rgb(var(--primary-foreground))] disabled:opacity-60";
const card =
  "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] p-5";

const STATUS: Record<KDoc["status"], string> = {
  ready: "bg-emerald-500/15 text-emerald-600",
  processing: "bg-sky-500/15 text-sky-600",
  failed: "bg-red-500/15 text-red-600",
  unindexed: "bg-amber-500/15 text-amber-600",
};

const bytes = (n = 0) =>
  n > 1048576
    ? `${(n / 1048576).toFixed(1)} MB`
    : `${Math.max(1, Math.round(n / 1024))} KB`;

async function api(url: string, init?: RequestInit) {
  const res = await fetch(url, init);
  if (res.status === 401) throw new Error("UNAUTH");
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err: any = new Error(data.error || "Request failed");
    err.canForce = !!data.canForce;
    throw err;
  }
  return data;
}

export default function KnowledgePage() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [docs, setDocs] = useState<KDoc[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string | null>(null); // doc id or "add"
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

  const [mode, setMode] = useState<"text" | "pdf">("text");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [editing, setEditing] = useState<KDoc | null>(null);
  const [testQuery, setTestQuery] = useState("");
  const [matches, setMatches] = useState<Match[] | null>(null);
  const [threshold, setThreshold] = useState(0.55);

  const flash = (text: string, ok = true) => {
    setMsg({ text, ok });
    setTimeout(() => setMsg(null), 4000);
  };
  const handle = useCallback(
    (e: unknown) => {
      const m = e instanceof Error ? e.message : String(e);
      if (m === "UNAUTH") router.push("/admin");
      else flash(m, false);
    },
    [router],
  );

  const load = useCallback(async () => {
    try {
      const data = await api("/api/admin/knowledge");
      setDocs(data.docs);
      setStats(data.stats);
    } catch (e) {
      handle(e);
    } finally {
      setLoading(false);
    }
  }, [handle]);

  useEffect(() => {
    load();
  }, [load]);

  async function add() {
    setBusy("add");
    try {
      if (mode === "pdf") {
        if (!file) throw new Error("Choose a PDF first.");
        if (file.size > 4 * 1024 * 1024)
          throw new Error("PDF must be under 4 MB.");
        const fd = new FormData();
        fd.append("file", file);
        if (title.trim()) fd.append("title", title.trim());
        await api("/api/admin/knowledge", { method: "POST", body: fd });
      } else {
        await api("/api/admin/knowledge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, content }),
        });
      }
      setTitle("");
      setContent("");
      setFile(null);
      if (fileRef.current) fileRef.current.value = "";
      flash("Added and indexed.");
      await load();
    } catch (e) {
      handle(e);
    } finally {
      setBusy(null);
    }
  }

  async function patch(doc: KDoc, body: object, ok: string) {
    setBusy(doc._id);
    try {
      await api(`/api/admin/knowledge/${doc._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      flash(ok);
      await load();
    } catch (e) {
      handle(e);
    } finally {
      setBusy(null);
    }
  }

  async function remove(doc: KDoc) {
    if (
      !confirm(
        `Delete "${doc.title}" and its ${doc.chunkCount} embeddings from Pinecone?`,
      )
    )
      return;
    setBusy(doc._id);
    try {
      try {
        await api(`/api/admin/knowledge/${doc._id}`, { method: "DELETE" });
      } catch (e: any) {
        if (!e?.canForce) throw e;
        const go = confirm(
          `${e.message}\n\nDelete the record from MongoDB anyway?\n(Embeddings may stay in Pinecone.)`,
        );
        if (!go) throw new Error("Delete cancelled.");
        await api(`/api/admin/knowledge/${doc._id}?force=1`, {
          method: "DELETE",
        });
      }
      flash("Deleted.");
      await load();
    } catch (e) {
      handle(e);
    } finally {
      setBusy(null);
    }
  }

  async function openEdit(doc: KDoc) {
    try {
      setEditing(await api(`/api/admin/knowledge/${doc._id}`));
    } catch (e) {
      handle(e);
    }
  }

  async function saveEdit() {
    if (!editing) return;
    await patch(
      editing,
      { title: editing.title, content: editing.content },
      "Saved. Re-indexed if text changed.",
    );
    setEditing(null);
  }

  async function runTest() {
    try {
      const data = await api("/api/admin/knowledge/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: testQuery }),
      });
      setMatches(data.matches);
      setThreshold(data.threshold);
    } catch (e) {
      handle(e);
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-[rgb(var(--border))] bg-[rgb(var(--background))] px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className={btn}
            onClick={() => router.push("/admin/dashboard")}
          >
            <ArrowLeft size={14} /> Dashboard
          </button>
          <span className="flex items-center gap-2 text-[15px] font-bold">
            <Bot size={18} /> Chatbot Knowledge Base
          </span>
        </div>
        {msg && (
          <span
            className={`flex items-center gap-1.5 text-sm font-semibold ${msg.ok ? "text-[rgb(var(--primary))]" : "text-red-600"}`}
          >
            {msg.ok ? <CheckCircle2 size={15} /> : <AlertTriangle size={15} />}{" "}
            {msg.text}
          </span>
        )}
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ["Documents", stats?.totalDocs],
            ["Indexed & ready", stats?.readyDocs],
            ["Chunks (MongoDB)", stats?.totalChunks],
            ["Vectors (Pinecone)", stats?.pineconeVectors ?? "n/a"],
          ].map(([label, value]) => (
            <div key={label as string} className={card}>
              <p className="text-[11px] font-bold uppercase tracking-wider opacity-55">
                {label}
              </p>
              <p className="mt-1 text-2xl font-bold">{value ?? "…"}</p>
            </div>
          ))}
        </div>

        {/* Add */}
        <div className={card}>
          <div className="mb-4 flex gap-2">
            {(["text", "pdf"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-sm font-semibold ${
                  mode === m
                    ? "border-transparent bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))]"
                    : "border-[rgb(var(--border))]"
                }`}
              >
                {m === "text" ? <FileText size={14} /> : <FileUp size={14} />}{" "}
                {m === "text" ? "Add text" : "Upload PDF"}
              </button>
            ))}
          </div>
          <div className="grid gap-3">
            <input
              className={input}
              placeholder={
                mode === "pdf"
                  ? "Title (optional, defaults to file name)"
                  : "Title *  e.g. How to add a medicine"
              }
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {mode === "text" ? (
              <>
                <textarea
                  className={`${input} min-h-[180px] resize-y`}
                  placeholder="Paste guides, FAQs, policies, workflows…"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <p className="text-xs opacity-55">
                  {content.length.toLocaleString()} / 400,000 characters
                </p>
              </>
            ) : (
              <input
                ref={fileRef}
                type="file"
                accept="application/pdf,.pdf"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className={`${input} file:mr-3 file:rounded-md file:border-0 file:bg-[rgb(var(--primary))] file:px-3 file:py-1 file:text-xs file:font-semibold file:text-[rgb(var(--primary-foreground))]`}
              />
            )}
            <div>
              <button
                type="button"
                className={btnPrimary}
                onClick={add}
                disabled={
                  busy === "add" ||
                  (mode === "text" ? !title.trim() || !content.trim() : !file)
                }
              >
                {busy === "add" ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <Plus size={15} />
                )}
                {busy === "add"
                  ? "Extracting & embedding…"
                  : "Add to knowledge base"}
              </button>
            </div>
          </div>
        </div>

        {/* List */}
        <div className="grid gap-3">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-base font-bold">
              <Database size={16} /> Documents
            </h2>
            <button type="button" className={btn} onClick={load}>
              <RefreshCw size={13} /> Refresh
            </button>
          </div>
          {loading && (
            <div className={`${card} text-center opacity-60`}>Loading…</div>
          )}
          {!loading && docs.length === 0 && (
            <div className={`${card} py-10 text-center opacity-60`}>
              No documents yet. Add your first text or PDF above.
            </div>
          )}
          {docs.map((d) => {
            const working = busy === d._id || d.status === "processing";
            return (
              <div
                key={d._id}
                className={`${card} flex flex-wrap items-start justify-between gap-4 ${!d.enabled ? "opacity-60" : ""}`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-bold">{d.title}</p>
                    <span
                      className={`rounded px-2 py-0.5 text-[11px] font-semibold ${STATUS[d.status]}`}
                    >
                      {d.status}
                    </span>
                    <span className="rounded bg-[rgb(var(--muted))] px-2 py-0.5 text-[11px] uppercase">
                      {d.type}
                    </span>
                    {!d.enabled && (
                      <span className="rounded bg-[rgb(var(--muted))] px-2 py-0.5 text-[11px]">
                        hidden from chatbot
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs opacity-60">
                    {d.chunkCount} chunks · {d.charCount.toLocaleString()} chars
                    {d.pages ? ` · ${d.pages} pages` : ""}
                    {d.fileSize ? ` · ${bytes(d.fileSize)}` : ""} · added{" "}
                    {new Date(d.createdAt).toLocaleDateString()}
                  </p>
                  {d.error && (
                    <p className="mt-1 text-xs text-red-600">{d.error}</p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {working && <Loader2 size={16} className="animate-spin" />}
                  <button
                    type="button"
                    className={btn}
                    disabled={working}
                    onClick={() =>
                      patch(
                        d,
                        { enabled: !d.enabled },
                        d.enabled
                          ? "Hidden from chatbot."
                          : "Visible to chatbot.",
                      )
                    }
                  >
                    {d.enabled ? <EyeOff size={13} /> : <Eye size={13} />}{" "}
                    {d.enabled ? "Disable" : "Enable"}
                  </button>
                  <button
                    type="button"
                    className={btn}
                    disabled={working}
                    onClick={() => openEdit(d)}
                  >
                    <Pencil size={13} /> Edit
                  </button>
                  <button
                    type="button"
                    className={btn}
                    disabled={busy === d._id}
                    onClick={() =>
                      patch(d, { action: "reindex" }, "Re-indexed.")
                    }
                  >
                    <RefreshCw size={13} /> Re-index
                  </button>
                  <button
                    type="button"
                    className={btn}
                    disabled={working || d.status !== "ready"}
                    onClick={() =>
                      patch(
                        d,
                        { action: "unindex" },
                        "Embeddings removed from Pinecone.",
                      )
                    }
                  >
                    <Eraser size={13} /> Remove embeddings
                  </button>
                  <button
                    type="button"
                    className={`${btn} text-red-600`}
                    disabled={busy === d._id}
                    onClick={() => remove(d)}
                  >
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Test retrieval */}
        <div className={card}>
          <h2 className="mb-1 flex items-center gap-2 text-base font-bold">
            <Search size={16} /> Test retrieval
          </h2>
          <p className="mb-3 text-xs opacity-60">
            See what the chatbot would find for a question. Chunks below the
            threshold ({threshold}) are ignored by the chatbot.
          </p>
          <div className="flex gap-2">
            <input
              className={input}
              placeholder="e.g. How do I add a medicine?"
              value={testQuery}
              onChange={(e) => setTestQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runTest()}
            />
            <button type="button" className={btnPrimary} onClick={runTest}>
              Search
            </button>
          </div>
          {matches && (
            <div className="mt-4 grid gap-2">
              {matches.length === 0 && (
                <p className="text-sm opacity-60">
                  No matches. Add content or check the Pinecone index.
                </p>
              )}
              {matches.map((m, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[rgb(var(--border))] p-3"
                >
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span
                      className={`rounded px-2 py-0.5 font-bold ${m.score >= threshold ? "bg-emerald-500/15 text-emerald-600" : "bg-red-500/15 text-red-600"}`}
                    >
                      {m.score.toFixed(3)}
                    </span>
                    <span className="font-semibold">{m.title}</span>
                    <span className="opacity-50">chunk #{m.chunkIndex}</span>
                    {!m.enabled && (
                      <span className="rounded bg-amber-500/15 px-2 py-0.5 text-amber-600">
                        disabled / deleted
                      </span>
                    )}
                  </div>
                  <p className="mt-2 line-clamp-4 whitespace-pre-wrap text-xs opacity-75">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="flex max-h-[90vh] w-full max-w-3xl flex-col gap-3 overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">Edit document</h3>
              <button
                type="button"
                onClick={() => setEditing(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <input
              className={input}
              value={editing.title}
              onChange={(e) =>
                setEditing({ ...editing, title: e.target.value })
              }
            />
            <textarea
              className={`${input} min-h-[320px] flex-1 resize-none font-mono text-xs`}
              value={editing.content ?? ""}
              onChange={(e) =>
                setEditing({ ...editing, content: e.target.value })
              }
            />
            <p className="text-xs opacity-60">
              Changing the text re-embeds the document in Pinecone. You can also
              clean up messy PDF extraction here.
            </p>
            <div className="flex gap-2">
              <button type="button" className={btnPrimary} onClick={saveEdit}>
                <Save size={14} /> Save
              </button>
              <button
                type="button"
                className={btn}
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
