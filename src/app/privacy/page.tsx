import type { Metadata } from "next";
import { PublicPage } from "@/components/layout/PublicPage";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { privacySections } from "@/constants/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Amistaa",
  description: "Learn how Amistaa handles information when you use our creator communication platform.",
  alternates: { canonical: "https://amistaa.com/privacy" },
  openGraph: { title: "Privacy Policy | Amistaa", description: "How Amistaa handles information across its platform.", url: "https://amistaa.com/privacy", type: "article" },
  twitter: { card: "summary", title: "Privacy Policy | Amistaa", description: "How Amistaa handles information across its platform." },
};

export default function PrivacyPage() {
  return <PublicPage><LegalDocument date="September 15, 2026" description="A clear explanation of the information Amistaa handles, why we use it, and the choices available to you." sections={privacySections} title="Privacy Policy" /></PublicPage>;
}
