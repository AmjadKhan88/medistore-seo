import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--background) / 0.72)] p-6 shadow-sm", className)} {...props} />;
}
