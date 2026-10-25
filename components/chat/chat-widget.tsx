"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { MessageCircle, X } from "lucide-react";

// The panel (with react-markdown) is only downloaded the first time someone opens the chat
const ChatPanel = dynamic(
  () => import("./chat-panel").then((m) => m.ChatPanel),
  { ssr: false },
);

export function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      {mounted && <ChatPanel open={open} onClose={() => setOpen(false)} />}
      {!open && (
        <button
          type="button"
          aria-label="Open AI assistant"
          onClick={() => {
            setMounted(true);
            setOpen(true);
          }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-3 text-sm font-semibold text-[rgb(var(--primary-foreground))] shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle size={20} />
          <span className="hidden sm:inline">Ask AI</span>
        </button>
      )}
      {open && (
        <button
          type="button"
          aria-label="Close AI assistant"
          onClick={() => setOpen(false)}
          className="fixed bottom-5 right-5 z-[61] hidden h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--foreground))] text-[rgb(var(--background))] shadow-lg md:hidden"
        >
          <X size={20} />
        </button>
      )}
    </>
  );
}
