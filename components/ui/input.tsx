import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "focus-ring h-11 w-full rounded-md border border-[rgb(var(--border))] bg-transparent px-3 text-sm",
        props.className
      )}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "focus-ring min-h-32 w-full rounded-md border border-[rgb(var(--border))] bg-transparent px-3 py-3 text-sm",
        props.className
      )}
    />
  );
}
