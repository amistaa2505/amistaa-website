import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("py-20 sm:py-24 lg:py-32", className)} {...props} />;
}
