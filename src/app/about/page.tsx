import type { Metadata } from "next";
import { ArrowRight, Headphones, ShieldCheck, Sparkles, Video, WalletCards } from "lucide-react";
import Link from "next/link";
import { PublicPage } from "@/components/layout/PublicPage";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Amistaa",
  description: "Learn about Amistaa’s mission to make creator conversations more meaningful, accessible, and secure.",
  alternates: { canonical: "https://amistaa.com/about" },
  openGraph: { title: "About Us | Amistaa", description: "The mission behind Amistaa’s creator communication platform.", url: "https://amistaa.com/about", type: "website" },
  twitter: { card: "summary_large_image", title: "About Us | Amistaa", description: "The mission behind Amistaa’s creator communication platform." },
};

const principles = [
  { icon: Headphones, title: "Meaningful conversations", body: "Make it easier to spend focused time with people worth hearing from." },
  { icon: ShieldCheck, title: "Trust by design", body: "Build verification, clear wallet flows, and platform controls into the experience." },
  { icon: Sparkles, title: "Opportunity for creators", body: "Give creators a direct, professional way to share their time and expertise." },
];

export default function AboutPage() {
  return (
    <PublicPage>
      <main>
        <section className="overflow-hidden bg-zinc-50 py-24 sm:py-32">
          <Container>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">About Amistaa</p>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-7xl">Connect. Talk. <GradientText>Earn.</GradientText></h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-zinc-600">Amistaa is a secure creator communication platform for premium one-to-one audio and video conversations.</p>
              <div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="#how-it-works">How it works <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></ButtonLink><ButtonLink href="/feedback" variant="secondary">Share feedback</ButtonLink></div>
            </div>
          </Container>
        </section>

        <section className="py-20 sm:py-28"><Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">What is Amistaa?</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">A better layer for direct connection.</h2></div><div className="space-y-6 text-lg leading-8 text-zinc-600"><p>Amistaa brings users and verified creators together for focused, one-to-one conversations. Users discover people, recharge a wallet, and connect through eligible audio or video calls.</p><p>Creators complete onboarding, receive calls, and get visibility into earnings and withdrawals. Around that exchange, Amistaa manages verification, payments, moderation, and safety workflows.</p></div></Container></section>

        <section className="bg-zinc-950 py-20 text-white sm:py-28"><Container><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8b2ff]">Our mission</p><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">Make human connection feel intentional again.</h2><p className="mt-6 text-lg leading-8 text-white/65">The internet made access easy, but meaningful time is still hard to find. We are building a calmer, safer way for people to connect with creators they genuinely want to hear from.</p></div></Container></section>

        <section className="py-20 sm:py-28" id="how-it-works"><Container><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">How Amistaa works</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">One ecosystem. Two sides of a conversation.</h2></div><div className="mt-12 grid gap-4 md:grid-cols-2"><div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-7 sm:p-9"><WalletCards className="h-6 w-6 text-[#3B2EFF]" /><h3 className="mt-7 text-2xl font-semibold text-zinc-950">For users</h3><p className="mt-4 leading-7 text-zinc-600">Discover verified creators, understand the wallet flow, and start a premium one-to-one audio or video conversation when the moment is right.</p></div><div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-7 sm:p-9"><Video className="h-6 w-6 text-[#FF2E92]" /><h3 className="mt-7 text-2xl font-semibold text-zinc-950">For creators</h3><p className="mt-4 leading-7 text-zinc-600">Complete verification, shape your presence and availability, receive calls, and see the earnings and withdrawal status connected to your work.</p></div></div></Container></section>

        <section className="border-y border-zinc-200 bg-zinc-50 py-20 sm:py-28"><Container><div className="grid gap-5 md:grid-cols-3">{principles.map(({ icon: Icon, title, body }) => <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_18px_55px_rgba(16,17,20,0.05)]" key={title}><Icon className="h-6 w-6 text-zinc-950" /><h3 className="mt-7 text-xl font-semibold text-zinc-950">{title}</h3><p className="mt-3 leading-7 text-zinc-600">{body}</p></article>)}</div></Container></section>

        <section className="py-20 sm:py-28"><Container><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">Our vision</p><h2 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">A world where the right conversation is always within reach.</h2><p className="mt-6 text-lg leading-8 text-zinc-600">Amistaa Technologies Private Limited is building the trusted communication layer for the next generation of creator access.</p><Link className="mt-8 inline-flex font-semibold text-zinc-950 underline decoration-[#7D3CFF] decoration-2 underline-offset-8 hover:text-[#3B2EFF]" href="/feedback">Tell us what we should build next <ArrowRight className="ml-2 h-5 w-5" /></Link></div></Container></section>
      </main>
    </PublicPage>
  );
}
