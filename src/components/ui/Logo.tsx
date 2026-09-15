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
          className="h-10 w-10 scale-[1.08] object-contain"
          priority
          height={40}
          src="/images/amistaa_logo.png"
          width={40}
        />
      </span>
      <GradientText className="text-lg font-bold tracking-[-0.03em]">Amistaa</GradientText>
    </Link>
  );
}
