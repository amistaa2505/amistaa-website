import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Banknote, CalendarCheck, ShieldCheck } from "lucide-react";
import { PublicPage } from "@/components/layout/PublicPage";
import { CreatorEconomy } from "@/components/sections/CreatorEconomy";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "For Creators | Amistaa",
  description: "Discover how creators can build their presence and connect with users through Amistaa.",
  alternates: { canonical: "https://amistaa.com/creators" },
  openGraph: { title: "For Creators | Amistaa", description: "A focused communication layer for creators.", url: "https://amistaa.com/creators", type: "website" },
  twitter: { card: "summary_large_image", title: "For Creators | Amistaa", description: "A focused communication layer for creators." },
};

const steps = [
  { icon: BadgeCheck, title: "Complete verification", body: "Share the information needed for creator onboarding and platform trust checks." },
  { icon: CalendarCheck, title: "Shape your presence", body: "Set your profile, availability, language, expertise, and conversation style." },
  { icon: Banknote, title: "Receive calls and track earnings", body: "Connect with eligible users and keep visibility into calls, earnings, and withdrawal status." },
];

export default function CreatorsPage() {
  return <PublicPage><main><section className="bg-zinc-50 py-24 sm:py-32"><Container><div className="max-w-4xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">For creators</p><h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-7xl">Turn your time into <GradientText>meaningful access.</GradientText></h1><p className="mt-7 max-w-2xl text-xl leading-9 text-zinc-600">Amistaa gives verified creators a focused way to connect with people who want a real conversation.</p><div className="mt-9"><ButtonLink href="mailto:creators@amistaa.com">Become a Creator <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></ButtonLink></div></div></Container></section><CreatorEconomy detailed /><section className="border-y border-zinc-200 bg-zinc-50 py-20 sm:py-28"><Container><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">The creator journey</p><h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">A clear path from onboarding to conversation.</h2></div><div className="mt-12 grid gap-4 md:grid-cols-3">{steps.map(({ icon: Icon, title, body }) => <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-[0_18px_55px_rgba(16,17,20,0.05)]" key={title}><Icon aria-hidden="true" className="h-6 w-6 text-[#3B2EFF]" /><h3 className="mt-7 text-xl font-semibold text-zinc-950">{title}</h3><p className="mt-3 leading-7 text-zinc-600">{body}</p></article>)}</div></Container></section><section className="py-20 sm:py-28"><Container className="grid gap-8 rounded-[2rem] bg-zinc-950 p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center"><div><ShieldCheck className="h-7 w-7 text-[#FF8A3D]" /><h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">Built around trust, clarity, and creator control.</h2><p className="mt-4 max-w-2xl leading-7 text-zinc-300">Platform verification, moderation, wallet flows, and payout visibility support a more professional creator experience.</p></div><ButtonLink className="border-white/20 bg-white/10 text-white hover:bg-white/15" href="mailto:creators@amistaa.com" variant="secondary">Start a conversation <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" /></ButtonLink></Container></section></main></PublicPage>;
}
