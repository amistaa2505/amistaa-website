import type { Metadata } from "next";
import { PublicPage } from "@/components/layout/PublicPage";
import { FAQ } from "@/components/sections/FAQ";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Frequently Asked Questions | Amistaa", description: "Find answers about Amistaa, creator verification, calls, wallets, and the app launch.", alternates: { canonical: "https://amistaa.com/faq" }, openGraph: { title: "Frequently Asked Questions | Amistaa", description: "Answers about using Amistaa.", url: "https://amistaa.com/faq", type: "website" }, twitter: { card: "summary", title: "Frequently Asked Questions | Amistaa", description: "Answers about using Amistaa." } };

export default function FAQPage() { return <PublicPage><main><section className="bg-zinc-50 py-24 sm:py-32"><Container><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">Amistaa FAQ</p><h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-7xl">Clear answers before the <span className="text-[#7D3CFF]">first call.</span></h1><p className="mt-7 max-w-2xl text-xl leading-9 text-zinc-600">A quick guide to the platform, creator experience, payments, and launch.</p></div></Container></section><FAQ /></main></PublicPage>; }
