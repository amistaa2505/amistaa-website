import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function GradientText({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("bg-gradient-to-r from-[#3B2EFF] via-[#FF2E92] to-[#FF8A3D] bg-clip-text text-transparent", className)}
      {...props}
    />
  );
}
