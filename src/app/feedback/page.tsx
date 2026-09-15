import type { Metadata } from "next";
import { PublicPage } from "@/components/layout/PublicPage";
import { Container } from "@/components/ui/Container";
import { FeedbackForm } from "@/components/sections/FeedbackForm";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "Feedback | Amistaa",
  description: "Share feedback, report an issue, or suggest what Amistaa should build next.",
  alternates: { canonical: "https://amistaa.com/feedback" },
  openGraph: { title: "Feedback | Amistaa", description: "Help us make Amistaa better.", url: "https://amistaa.com/feedback", type: "website" },
  twitter: { card: "summary", title: "Feedback | Amistaa", description: "Help us make Amistaa better." },
};

export default function FeedbackPage() {
  return <PublicPage><main className="bg-zinc-50 py-16 sm:py-24"><Container><div className="mx-auto max-w-3xl"><div className="mb-10 text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">We’re listening</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">Help shape <GradientText>Amistaa.</GradientText></h1><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-600">Share a thought, report a problem, or tell us what would make your next conversation better.</p></div><FeedbackForm /></div></Container></main></PublicPage>;
}
