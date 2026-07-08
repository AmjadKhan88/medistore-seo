import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] shadow-sm hover:translate-y-[-1px]",
        secondary: "bg-[rgb(var(--muted))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--primary) / 0.12)]",
        outline: "border border-[rgb(var(--border))] bg-transparent hover:bg-[rgb(var(--muted))]",
        ghost: "hover:bg-[rgb(var(--muted))]"
      },
      size: {
        default: "h-11",
        sm: "h-9 px-3",
        lg: "h-12 px-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild, type, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      type={asChild ? undefined : type ?? "button"}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export function LinkButton({
  href,
  children,
  className,
  variant,
  size,
  external
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  external?: boolean;
}) {
  if (external) {
    return (
      <a className={cn(buttonVariants({ variant, size, className }))} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={cn(buttonVariants({ variant, size, className }))} href={href}>
      {children}
    </Link>
  );
}
