import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { trustMarks } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { DownloadDialog } from "@/components/sections/DownloadDialog";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_70%_20%,rgba(125,60,255,0.18),transparent_32%),radial-gradient(circle_at_86%_34%,rgba(255,46,146,0.14),transparent_28%),linear-gradient(180deg,#ffffff,#f8fafc)]" />
      <Container className="relative grid min-h-[calc(100svh-5rem)] items-center gap-12 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
        <FadeIn className="max-w-3xl">
          <Badge>India’s premium creator communication platform</Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Secure one-to-one calls with <GradientText>verified creators</GradientText>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Amistaa helps users discover creators, recharge a wallet, and start meaningful premium audio or video conversations with safety and trust built in.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <DownloadDialog>
              Download App
              <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </DownloadDialog>
            <ButtonLink href={siteConfig.creatorUrl} variant="secondary">
              <PlayCircle aria-hidden="true" className="mr-2 h-4 w-4" />
              Become a Creator
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {trustMarks.map((mark) => (
              <span className="rounded-full bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-700" key={mark}>
                {mark}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn className="relative" delay={0.12}>
          <div className="relative aspect-[1672/941] overflow-hidden rounded-[2rem] border border-white bg-white/70 shadow-[0_30px_100px_rgba(16,17,20,0.16)]">
            <Image
              alt="Amistaa app interface for secure creator audio and video calls"
              className="object-contain"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              src="/images/hero-creator-app.png"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
