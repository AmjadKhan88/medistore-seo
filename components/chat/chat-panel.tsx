"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Bot,
  Check,
  Copy,
  RotateCcw,
  Send,
  Square,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatMarkdown } from "./chat-markdown";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: string[];
  error?: boolean;
};

const STORAGE_KEY = "elitehms-chat-v1";
const SUGGESTIONS = [
  "How do I add a new medicine?",
  "How do I create a bill?",
  "What does each pricing plan include?",
  "Is EliteHMS DRAP compliant?",
];
const uid = () => Math.random().toString(36).slice(2);

export function ChatPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  // restore / persist (per browser tab)
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) setMessages(JSON.parse(saved));
    } catch {}
  }, []);
  useEffect(() => {
    if (loading) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)));
    } catch {}
  }, [messages, loading]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, open]);

  useEffect(() => {
    if (open) taRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 110) + "px";
  }, [input]);

  const patch = (id: string, fn: (m: Msg) => Msg) =>
    setMessages((prev) => prev.map((m) => (m.id === id ? fn(m) : m)));

  const send = useCallback(
    async (text: string) => {
      const content = text.trim();
      if (!content || loading) return;

      const userMsg: Msg = { id: uid(), role: "user", content };
      const botMsg: Msg = { id: uid(), role: "assistant", content: "" };
      const history = [...messages, userMsg]
        .filter((m) => !m.error && m.content.trim())
        .map(({ role, content }) => ({ role, content }));

      setMessages((prev) => [...prev, userMsg, botMsg]);
      setInput("");
      setLoading(true);
      const ctrl = new AbortController();
      abortRef.current = ctrl;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history }),
          signal: ctrl.signal,
        });
        if (!res.ok || !res.body) {
          const err = await res.json().catch(() => null);
          throw new Error(
            err?.error || "Something went wrong. Please try again.",
          );
        }
        let sources: string[] = [];
        try {
          sources = JSON.parse(
            decodeURIComponent(res.headers.get("X-Sources") || "[]"),
          );
        } catch {}

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          patch(botMsg.id, (m) => ({ ...m, content: acc }));
        }
        patch(botMsg.id, (m) => ({ ...m, sources }));
      } catch (e: any) {
        if (e?.name !== "AbortError") {
          patch(botMsg.id, (m) => ({
            ...m,
            error: true,
            content: e?.message || "Connection problem. Please try again.",
          }));
        }
      } finally {
        setLoading(false);
        abortRef.current = null;
      }
    },
    [messages, loading],
  );

  function copy(m: Msg) {
    navigator.clipboard.writeText(m.content);
    setCopiedId(m.id);
    setTimeout(() => setCopiedId(null), 1500);
  }

  function reset() {
    abortRef.current?.abort();
    setMessages([]);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {}
  }

  const lastBot = messages[messages.length - 1];
  const typing = loading && lastBot?.role === "assistant" && !lastBot.content;

  return (
    <div
      role="dialog"
      aria-label="EliteHMS AI assistant"
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      className={cn(
        "fixed inset-0 z-[60] flex flex-col overflow-hidden border-[rgb(var(--border))] bg-[rgb(var(--background))] shadow-2xl",
        "md:inset-auto md:bottom-5 md:right-5 md:h-[min(660px,calc(100dvh-2.5rem))] md:w-[410px] md:rounded-2xl md:border",
        !open && "hidden",
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 bg-[rgb(var(--primary))] px-4 py-3 text-[rgb(var(--primary-foreground))]">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
          <Bot size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold leading-tight">Elite AI Assistant</p>
          <p className="flex items-center gap-1.5 text-[11px] opacity-85">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Online
            · Hospital &amp; Pharmacy software help
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          aria-label="New chat"
          title="New chat"
          className="rounded-lg p-1.5 hover:bg-white/15"
        >
          <RotateCcw size={16} />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="rounded-lg p-1.5 hover:bg-white/15"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div
        className="flex-1 space-y-4 overflow-y-auto px-3.5 py-4"
        aria-live="polite"
      >
        {messages.length === 0 && (
          <div className="space-y-3">
            <div className="rounded-2xl rounded-tl-md border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-3.5 text-[13.5px] leading-relaxed">
              <p className="font-semibold">Assalam o Alaikum! 👋</p>
              <p className="mt-1 opacity-80">
                I can answer questions about EliteHMS, show step-by-step guides
                (like adding a medicine or creating a bill), and help you choose
                a plan.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-[rgb(var(--primary)/0.3)] bg-[rgb(var(--primary)/0.06)] px-3 py-1.5 text-xs font-medium text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary)/0.14)]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) =>
          m.role === "user" ? (
            <div
              key={m.id}
              className="ml-auto w-fit max-w-[85%] whitespace-pre-wrap break-words rounded-2xl rounded-br-md bg-[rgb(var(--primary))] px-3.5 py-2 text-[13.5px] text-[rgb(var(--primary-foreground))]"
            >
              {m.content}
            </div>
          ) : (
            <div key={m.id} className="flex gap-2">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--primary)/0.12)] text-[rgb(var(--primary))]">
                <Bot size={15} />
              </span>
              <div className="min-w-0 max-w-[92%]">
                {(m.content || !loading) && (
                  <div
                    className={cn(
                      "rounded-2xl rounded-tl-md border px-3.5 py-2.5",
                      m.error
                        ? "border-red-500/40 bg-red-500/10 text-[13.5px]"
                        : "border-[rgb(var(--border))] bg-[rgb(var(--card))]",
                    )}
                  >
                    {m.error ? m.content : <ChatMarkdown content={m.content} />}
                  </div>
                )}
                {m.content &&
                  !m.error &&
                  !(loading && m.id === lastBot?.id) && (
                    <div className="mt-1.5 flex flex-wrap items-center gap-2 pl-1">
                      <button
                        type="button"
                        onClick={() => copy(m)}
                        className="inline-flex items-center gap-1 text-[11px] opacity-60 hover:opacity-100"
                      >
                        {copiedId === m.id ? (
                          <Check size={12} />
                        ) : (
                          <Copy size={12} />
                        )}
                        {copiedId === m.id ? "Copied" : "Copy"}
                      </button>
                      {m.sources?.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1 rounded-full bg-[rgb(var(--muted))] px-2 py-0.5 text-[10px] opacity-80"
                        >
                          <BookOpen size={10} /> {s}
                        </span>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          ),
        )}

        {typing && (
          <div className="flex gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgb(var(--primary)/0.12)] text-[rgb(var(--primary))]">
              <Bot size={15} />
            </span>
            <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3">
              {[0, 150, 300].map((d) => (
                <span
                  key={d}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-[rgb(var(--primary))]"
                  style={{ animationDelay: `${d}ms` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="border-t border-[rgb(var(--border))] p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-end gap-2"
        >
          <textarea
            ref={taRef}
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, 1000))}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send(input);
              }
            }}
            rows={1}
            placeholder="Ask about features, pricing, how-tos…"
            aria-label="Your message"
            className="max-h-[110px] flex-1 resize-none rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--muted))] px-3 py-2.5 text-sm outline-none focus:border-[rgb(var(--primary))]"
          />
          {loading ? (
            <button
              type="button"
              onClick={() => abortRef.current?.abort()}
              aria-label="Stop"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgb(var(--border))] hover:bg-[rgb(var(--muted))]"
            >
              <Square size={16} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          )}
        </form>
        <p className="mt-2 text-center text-[10px] opacity-55">
          AI can make mistakes. Not medical advice — consult a doctor or
          pharmacist.
        </p>
      </div>
    </div>
  );
}
