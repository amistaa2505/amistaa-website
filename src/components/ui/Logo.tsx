import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link aria-label="Amistaa home" className={cn("inline-flex items-center gap-2.5", className)} href="/">
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[0.8rem] bg-white shadow-[0_8px_22px_rgba(125,60,255,0.2)]" style={{}}>
        {/* <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[0.8rem] bg-white shadow-[0_8px_22px_rgba(125,60,255,0.2)]"> */}
        <Image
          alt="Amistaa logo"
          className="scale-[1.55] object-contain"
          fill
          priority
          sizes="50px"
          src="/images/amistaa-logo.png"
        />
      </span>
      <span className="text-lg font-bold tracking-[-0.03em] text-zinc-950">Amistaa</span>
    </Link>
  );
}
