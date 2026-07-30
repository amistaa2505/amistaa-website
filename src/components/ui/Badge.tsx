import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-full border border-zinc-200 bg-white/80 px-3 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
