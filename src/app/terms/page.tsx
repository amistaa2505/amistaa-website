import type { Metadata } from "next";
import { PublicPage } from "@/components/layout/PublicPage";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { termsSections } from "@/constants/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Amistaa",
  description: "Read the Terms of Service for Amistaa, a secure creator communication platform.",
  alternates: { canonical: "https://amistaa.com/terms" },
  openGraph: { title: "Terms of Service | Amistaa", description: "The terms that govern use of the Amistaa platform.", url: "https://amistaa.com/terms", type: "article" },
  twitter: { card: "summary", title: "Terms of Service | Amistaa", description: "The terms that govern use of the Amistaa platform." },
};

export default function TermsPage() {
  return <PublicPage><LegalDocument date="September 15, 2026" description="The terms that govern access to and use of Amistaa’s secure creator communication platform." sections={termsSections} title="Terms of Service" /></PublicPage>;
}
