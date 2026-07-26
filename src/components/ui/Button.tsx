import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-shu text-washi hover:bg-shu-bright shadow-[0_0_0_1px_rgba(196,39,42,0.4)]",
  ghost: "bg-transparent text-washi hover:text-gold",
  outline:
    "bg-transparent text-washi border border-washi/30 hover:border-gold hover:text-gold",
};

const base =
  "group relative inline-flex items-center gap-2 px-7 py-3 text-sm tracking-wideish uppercase font-body transition-colors duration-300 ease-out";

export const Button = forwardRef<
  HTMLButtonElement,
  BaseProps & ButtonHTMLAttributes<HTMLButtonElement>
>(({ variant = "primary", className, children, ...props }, ref) => (
  <button ref={ref} className={cn(base, variants[variant], className)} {...props}>
    {children}
  </button>
));
Button.displayName = "Button";

export function LinkButton({
  to,
  variant = "primary",
  className,
  children,
}: BaseProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
