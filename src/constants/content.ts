import {
  BadgeCheck,
  Banknote,
  Briefcase,
  Clock,
  Headphones,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Video,
  WalletCards,
  Zap,
} from "lucide-react";
import type { ContactCard, FAQ, Feature, RichFeature, Stat, Step, Testimonial } from "@/types/content";

export const stats: Stat[] = [
  { label: "creator verification layers", value: 4 },
  { label: "platform moderation coverage", suffix: "%", value: 100 },
  { label: "core journeys: discover, recharge, connect", value: 3 },
];

export const steps: Step[] = [
  {
    description:
      "Users browse verified creators by expertise, availability, language, and conversation style.",
    title: "Discover verified creators",
  },
  {
    description:
      "A simple wallet flow keeps payments clear before any premium audio or video conversation begins.",
    title: "Recharge securely",
  },
  {
    description:
      "Users start meaningful one-to-one calls while creators receive clear earnings and payout visibility.",
    title: "Connect instantly",
  },
];

export const features: Feature[] = [
  {
    description:
      "Identity, profile, and platform checks help users connect with trusted creators.",
    icon: UserCheck,
    title: "Creator verification",
  },
  {
    description:
      "Wallet-first conversations keep pricing transparent and prevent surprise billing.",
    icon: WalletCards,
    title: "Secure wallet",
  },
  {
    description:
      "Premium audio and video calls are designed for direct, high-intent conversations.",
    icon: Video,
    title: "Audio and video calls",
  },
  {
    description:
      "Safety workflows, reporting, and platform controls protect both creators and users.",
    icon: ShieldCheck,
    title: "Built-in moderation",
  },
  {
    description:
      "Creators can track calls, earnings, availability, and withdrawal status from one place.",
    icon: Banknote,
    title: "Creator earnings",
  },
  {
    description:
      "Fast discovery and clear creator status reduce friction between intent and conversation.",
    icon: Zap,
    title: "Instant connection",
  },
];

export const creatorHighlights: RichFeature[] = [
  {
    body: "Verified creators receive premium calls, control availability, and build a direct communication channel with high-intent users.",
    eyebrow: "Creator side",
    title: "Earn from meaningful conversations",
  },
  {
    body: "Users recharge once, choose the right creator, and start secure one-to-one audio or video conversations without noisy social feeds.",
    eyebrow: "User side",
    title: "Access people worth talking to",
  },
];

export const securityFeatures: Feature[] = [
  {
    description:
      "Creator onboarding is intentionally structured so premium access starts with accountability.",
    icon: BadgeCheck,
    title: "Verified access",
  },
  {
    description:
      "Payments, wallet balances, and withdrawal flows are separated from conversation content.",
    icon: LockKeyhole,
    title: "Protected payments",
  },
  {
    description:
      "Platform controls, user reporting, and review queues support safer communication at scale.",
    icon: Headphones,
    title: "Human moderation",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aarav M.",
    quote:
      "Amistaa feels premium because every step is intentional: discovery, recharge, and the actual conversation.",
    role: "Early user",
  },
  {
    name: "Kiara S.",
    quote:
      "The creator flow is clear. I can see availability, calls, earnings, and payout status without digging around.",
    role: "Verified creator",
  },
  {
    name: "Rohan P.",
    quote:
      "It does not feel like another social app. It feels like a safer communication layer for serious creator access.",
    role: "Community operator",
  },
];

export const faqs: FAQ[] = [
  {
    answer:
      "No. Amistaa is a secure creator communication platform for verified one-to-one audio and video conversations.",
    question: "Is Amistaa a dating app?",
  },
  {
    answer:
      "Creators complete onboarding and verification before receiving premium user calls on the platform.",
    question: "How are creators verified?",
  },
  {
    answer:
      "Users recharge their wallet first, then use that balance for eligible audio or video conversations.",
    question: "How do payments work?",
  },
  {
    answer:
      "The first launch should focus on download intent and creator onboarding. Real store links can replace the placeholders when available.",
    question: "Where will the app links go?",
  },
];

export const trustMarks = ["Verified creators", "Secure wallet", "Moderated calls", "Creator payouts"];

export const appBenefits = [
  { icon: Sparkles, label: "Premium discovery" },
  { icon: WalletCards, label: "Wallet-first access" },
  { icon: ShieldCheck, label: "Safety controls" },
];

export const contactCards: ContactCard[] = [
  {
    content: "hello@amistaa.com",
    cta: "Send Email",
    description: "Questions about Amistaa, the app, or your account.",
    href: "mailto:hello@amistaa.com",
    icon: Mail,
    title: "General Support",
  },
  {
    content: "creators@amistaa.com",
    cta: "Become a Creator",
    description: "Become a creator or discuss creator opportunities.",
    href: "mailto:creators@amistaa.com",
    icon: Users,
    title: "Creator Partnerships",
  },
  {
    content: "business@amistaa.com",
    cta: "Business Contact",
    description: "Partnerships, media, press, and collaboration enquiries.",
    href: "mailto:business@amistaa.com",
    icon: Briefcase,
    title: "Business & Media",
  },
  {
    content: "Within 24 Business Hours",
    description: "We respond to most enquiries within one business day.",
    icon: Clock,
    title: "Response Time",
  },
];
