import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type NavItem = {
  href: string;
  label: string;
};

export type Feature = {
  description: string;
  icon: LucideIcon;
  title: string;
};

export type Step = {
  description: string;
  title: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  role: string;
};

export type FAQ = {
  answer: string;
  question: string;
};

export type Stat = {
  label: string;
  suffix?: string;
  value: number;
};

export type RichFeature = {
  body: ReactNode;
  eyebrow: string;
  title: string;
};

export type ContactCard = {
  content: string;
  cta?: string;
  description: string;
  href?: string;
  icon: LucideIcon;
  title: string;
};
