"use client";

import Link from "next/link";
import { Menu, X, Pill } from "lucide-react";
import { useState } from "react";
import { AppCta } from "@/components/cta-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--background))] backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="focus-ring flex items-center gap-2 rounded-md font-bold"
          aria-label="MediStore Cloud home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[rgb(var(--primary)_/_0.14)] text-[rgb(var(--primary))]">
            <Pill size={20} />
          </span>
          <span>MediStore Cloud</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium opacity-75 hover:opacity-100 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <AppCta label="Login" variant="outline" />
          <AppCta label="Start Free" />
        </div>

        {/* Mobile hamburger — plain <button> not Button component */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid rgb(var(--border))",
            background: "transparent",
            cursor: "pointer",
            color: "rgb(var(--foreground))",
          }}
          className="md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <nav
          className="border-t border-[rgb(var(--border))] bg-[rgb(var(--background))] md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="container grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium opacity-75 hover:opacity-100 hover:bg-[rgb(var(--muted))] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div
              className="mt-3 flex flex-col gap-2 border-t border-[rgb(var(--border))] pt-3"
            >
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