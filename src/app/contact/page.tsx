import type { Metadata } from "next";
import { PublicPage } from "@/components/layout/PublicPage";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";

export const metadata: Metadata = { title: "Contact Amistaa | Amistaa", description: "Get in touch with Amistaa for support, creator partnerships, business, and media inquiries.", alternates: { canonical: "https://amistaa.com/contact" }, openGraph: { title: "Contact Amistaa | Amistaa", description: "Get in touch with the Amistaa team.", url: "https://amistaa.com/contact", type: "website" }, twitter: { card: "summary", title: "Contact Amistaa | Amistaa", description: "Get in touch with the Amistaa team." } };

export default function ContactPage() { return <PublicPage><main><section className="bg-zinc-50 py-24 sm:py-32"><Container><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">Get in touch</p><h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-7xl">Let’s talk about <GradientText>Amistaa.</GradientText></h1><p className="mt-7 max-w-2xl text-xl leading-9 text-zinc-600">For general questions, creator partnerships, support, or business inquiries, we’re here to help.</p></div></Container></section><Contact /></main></PublicPage>; }
