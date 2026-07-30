"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Camera,
  Copy,
  ExternalLink,
  Mail,
  Play,
  X,
} from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { contactCards } from "@/constants/content";

const supportEmail = "hello@amistaa.com";

type SocialLink = {
  href: string;
  icon: LucideIcon;
  label: string;
};

const socialLinks: SocialLink[] = [
  { href: "https://www.instagram.com/amistaa", icon: Camera, label: "Instagram" },
  { href: "https://www.linkedin.com/company/amistaa", icon: Briefcase, label: "LinkedIn" },
  { href: "https://x.com/amistaa", icon: X, label: "X" },
  { href: "https://www.youtube.com/@amistaa", icon: Play, label: "YouTube" },
];

export function Contact() {
  const reduceMotion = useReducedMotion();
  const [toastOpen, setToastOpen] = useState(false);

  async function copyEmailAddress() {
    setToastOpen(true);

    if (!navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(supportEmail);
    } catch {
      // The mailto link still opens even if clipboard permission is unavailable.
    }
  }

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <Section className="bg-zinc-50" id="contact">
        <Container>
          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_28px_90px_rgba(16,17,20,0.07)]">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_25rem] lg:p-12">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <Badge>Contact Us</Badge>
                <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                  Let&apos;s build <GradientText>meaningful conversations</GradientText> together.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                  Have questions about Amistaa, creator onboarding, partnerships, or the upcoming launch? We&apos;d love to hear from you.
                </p>
              </motion.div>

              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="lg:justify-self-end"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.98, y: 18 }}
                transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.a
                  aria-label={`Copy ${supportEmail} and open your email client`}
                  className="group relative flex min-h-40 w-full overflow-hidden rounded-[1.75rem] bg-zinc-950 p-px text-white shadow-[0_22px_70px_rgba(16,17,20,0.18)] outline-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7D3CFF] lg:w-[25rem]"
                  href={`mailto:${supportEmail}`}
                  onClick={() => {
                    void copyEmailAddress();
                  }}
                  whileHover={reduceMotion ? undefined : { scale: 1.015, y: -3 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#3B2EFF] via-[#FF2E92] to-[#FF8A3D] opacity-0 blur-xl transition duration-500 group-hover:opacity-45" />
                  <span className="relative flex w-full flex-col justify-between rounded-[calc(1.75rem-1px)] bg-zinc-950 p-6 !text-white transition duration-300 group-hover:bg-zinc-900 [&_*]:!text-white">
                    <span className="flex items-center justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <Mail aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                        <Copy aria-hidden="true" className="h-3.5 w-3.5" />
                        Copy email
                      </span>
                    </span>
                    <span>
                      <span className="block text-xl font-semibold tracking-tight sm:text-2xl">
                        {supportEmail}
                      </span>
                      <span className="mt-3 flex items-center gap-2 text-sm font-medium text-white/70">
                        Open mail app
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </span>
                  </span>
                </motion.a>
              </motion.div>
            </div>

            <div className="border-t border-zinc-200 px-7 py-8 sm:px-10 lg:px-12">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.article
                      className="group flex min-h-72 flex-col rounded-3xl border border-zinc-200 bg-zinc-50/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:bg-white hover:shadow-[0_18px_55px_rgba(16,17,20,0.08)]"
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      key={card.title}
                      transition={{ delay: 0.08 + index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true, margin: "-80px" }}
                      whileInView={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-zinc-950 shadow-sm ring-1 ring-zinc-200">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </div>
                      <h3 className="mt-6 text-lg font-semibold tracking-tight text-zinc-950">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm font-semibold leading-6 text-zinc-800">
                        {card.content}
                      </p>
                      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
                        {card.description}
                      </p>
                      {card.cta && card.href ? (
                        <a
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 transition group-hover:text-[#3B2EFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7D3CFF]"
                          href={card.href}
                        >
                          {card.cta}
                          <ExternalLink aria-hidden="true" className="h-4 w-4" />
                        </a>
                      ) : null}
                    </motion.article>
                  );
                })}
              </div>

              <nav aria-label="Amistaa social links" className="mt-8 flex items-center justify-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      aria-label={link.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7D3CFF]"
                      href={link.href}
                      key={link.label}
                      rel="noreferrer"
                      target="_blank"
                      title={link.label}
                      whileHover={reduceMotion ? undefined : { scale: 1.08, y: -2 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                    >
                      <Icon aria-hidden="true" className="h-4.5 w-4.5" />
                    </motion.a>
                  );
                })}
              </nav>

              <div className="mt-10 border-y border-zinc-200 py-6 text-center">
                <p className="text-sm font-semibold text-zinc-950">Based in Mumbai, India 🇮🇳</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Building India&apos;s next-generation creator communication platform.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <AnimatePresence>
        {toastOpen ? (
          <ToastPrimitive.Root
            asChild
            duration={3200}
            onOpenChange={setToastOpen}
            open={toastOpen}
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-5 right-5 z-[60] w-[calc(100%-2.5rem)] max-w-sm rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_18px_55px_rgba(16,17,20,0.16)]"
              exit={{ opacity: 0, y: 12 }}
              initial={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
            >
              <ToastPrimitive.Title className="text-sm font-semibold leading-6 text-zinc-950">
                Email copied to clipboard
              </ToastPrimitive.Title>
            </motion.div>
          </ToastPrimitive.Root>
        ) : null}
      </AnimatePresence>
      <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-[60] flex max-w-full flex-col p-5 outline-none" />
    </ToastPrimitive.Provider>
  );
}
