"use client";

import { useEffect, useState } from "react";
import type { Stat } from "@/types/content";

export function StatCard({ label, suffix = "", value }: Stat) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_60px_rgba(16,17,20,0.06)]">
      <strong className="block font-mono text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
        {displayValue}
        {suffix}
      </strong>
      <span className="mt-3 block text-sm leading-6 text-zinc-600">{label}</span>
    </div>
  );
}
