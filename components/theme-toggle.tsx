"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const modes = [
    { value: "light" as const, icon: Sun, label: "Light" },
    { value: "dark" as const, icon: Moon, label: "Dark" },
    { value: "system" as const, icon: Monitor, label: "System" }
  ];

  return (
    <div className="flex rounded-md border border-[rgb(var(--border))] p-1" aria-label="Theme selector">
      {modes.map((mode) => {
        const Icon = mode.icon;
        return (
          <Button
            key={mode.value}
            variant={theme === mode.value ? "secondary" : "ghost"}
            size="sm"
            aria-label={mode.label}
            title={mode.label}
            onClick={() => setTheme(mode.value)}
            className="h-8 w-8 p-0"
          >
            <Icon size={16} />
          </Button>
        );
      })}
    </div>
  );
}
