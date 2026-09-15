import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { GradientText } from "@/components/ui/GradientText";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link aria-label="Amistaa home" className={cn("inline-flex items-center gap-2.5", className)} href="/">
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden">
        <Image
          alt="Amistaa logo"
          className="scale-[1.55] object-contain"
          fill
          priority
          sizes="50px"
          src="/images/amistaa-logo.png"
        />
      </span>
      <GradientText className="text-lg font-bold tracking-[-0.03em]">Amistaa</GradientText>
    </Link>
  );
}
