import { ArrowRight, LogIn } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/env";

export function AppCta({ label = "Get Started", variant = "default" }: { label?: string; variant?: "default" | "secondary" | "outline" | "ghost" }) {
  return (
    <LinkButton href={siteConfig.appUrl} external variant={variant}>
      {label}
      {label.toLowerCase().includes("login") ? <LogIn size={18} /> : <ArrowRight size={18} />}
    </LinkButton>
  );
}
