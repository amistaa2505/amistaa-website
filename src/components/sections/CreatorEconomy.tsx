import { creatorHighlights } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";

export function CreatorEconomy() {
  return (
    <Section id="creator">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <Badge>Creator economy</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            A premium way for creators to <GradientText>earn from access</GradientText>.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Amistaa gives verified creators a focused communication layer: clear availability, premium calls, secure payouts, and platform support.
          </p>
        </FadeIn>
        <div className="grid gap-5">
          {creatorHighlights.map((item, index) => (
            <FadeIn
              className="rounded-[1.5rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_70px_rgba(16,17,20,0.07)]"
              delay={index * 0.08}
              key={item.title}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7D3CFF]">{item.eyebrow}</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
