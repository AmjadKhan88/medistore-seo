"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Pill } from "lucide-react";
import { useState } from "react";
import { AppCta } from "@/components/cta-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgb(var(--border))",
        background: "rgb(var(--background))",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, gap: 16 }}>

        {/* Logo */}
        <Link
          href="/"
          prefetch
          className="focus-ring font-light md:font-semibold gap-2 md:gap-4"
          style={{ display: "flex", alignItems: "center", borderRadius: 8, textDecoration: "none", color: "rgb(var(--foreground))" }}
        >
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "rgb(var(--primary) / 0.14)", color: "rgb(var(--primary))", flexShrink: 0 }} 
            className="w-auto h-auto ">
            <Pill size={18} />
          </span>
          <span className="text-sm hidden md:block md:text-lg">MediStore Cloud</span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          style={{ alignItems: "center", gap: 4 }}
          className="hidden md:flex"
        >
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                style={{
                  padding: "6px 12px",
                  borderRadius: 7,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: active ? "rgb(var(--primary))" : "rgb(var(--foreground))",
                  background: active ? "rgb(var(--primary) / 0.08)" : "transparent",
                  transition: "background 150ms, color 150ms",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div style={{ alignItems: "center", gap: 10 }} className="hidden md:flex">
          <ThemeToggle />
          <AppCta label="Login" variant="outline" />
          <AppCta label="Start Free" />
        </div>

        {/* Mobile hamburger — NO Tailwind classes on the button itself */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 8,
            border: "1px solid rgb(var(--border))",
            background: "transparent",
            cursor: "pointer",
            color: "rgb(var(--foreground))",
            flexShrink: 0,
          }}
          className="flex md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          style={{
            borderTop: "1px solid rgb(var(--border))",
            background: "rgb(var(--background))",
          }}
        >
          <div className="container" style={{ padding: "16px 0", display: "grid", gap: 4 }}>
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    color: active ? "rgb(var(--primary))" : "rgb(var(--foreground))",
                    background: active ? "rgb(var(--primary) / 0.08)" : "transparent",
                    display: "block",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            <div style={{ borderTop: "1px solid rgb(var(--border))", marginTop: 8, paddingTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <ThemeToggle />
              <AppCta label="Login" variant="outline" />
              <AppCta label="Start Free" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}