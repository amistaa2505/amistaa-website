import { steps } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <Badge>How it works</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            From discovery to premium conversation in three clear steps.
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn
              className="rounded-[1.5rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_70px_rgba(16,17,20,0.06)]"
              delay={index * 0.08}
              key={step.title}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-zinc-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{step.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
