"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";

export function FAQ({ limit }: { limit?: number }) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <Section className="bg-zinc-50" id="faq">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <FadeIn>
          <Badge>FAQ</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Clear answers before the first call.
          </h2>
        </FadeIn>
        <div className="divide-y divide-zinc-200 rounded-[1.5rem] border border-zinc-200 bg-white">
          {faqs.slice(0, limit).map((faq, index) => {
            const isOpen = openItems.has(index);
            const answerId = `faq-answer-${index}`;

            return (
              <div className={cn("p-6 transition-colors duration-200", isOpen && "bg-zinc-50/70")} key={faq.question}>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 text-left text-base font-semibold text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7D3CFF]"
                  onClick={() => toggleItem(index)}
                  type="button"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn("h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-200", isOpen && "rotate-180 text-zinc-950")}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="pt-4 text-sm leading-7 text-zinc-600">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        {limit ? <ButtonLink className="justify-self-start lg:col-start-2" href="/faq" variant="secondary">View all FAQs <span aria-hidden="true" className="ml-2">→</span></ButtonLink> : null}
      </Container>
    </Section>
  );
}
