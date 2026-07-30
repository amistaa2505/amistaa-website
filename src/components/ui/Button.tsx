import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonClasses: Record<ButtonVariant, string> = {
  ghost: "text-zinc-700 hover:bg-zinc-100",
  primary:
    "bg-zinc-950 text-white shadow-[0_18px_40px_rgba(16,17,20,0.18)] hover:-translate-y-0.5 hover:bg-zinc-800",
  secondary:
    "border border-zinc-200 bg-white text-zinc-950 shadow-[0_12px_28px_rgba(16,17,20,0.08)] hover:-translate-y-0.5 hover:border-zinc-300",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center rounded-2xl px-5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D3CFF]";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, buttonClasses[variant], className)}
      type={props.type ?? "button"}
      {...props}
    />
  );
}

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(baseClasses, buttonClasses[variant], className)} href={href} {...props}>
      {children}
    </Link>
  );
}
