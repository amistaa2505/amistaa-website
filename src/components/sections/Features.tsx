import { features } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Features() {
  return (
    <Section className="bg-zinc-950 text-white" id="features">
      <Container>
        <FadeIn className="max-w-3xl">
          <Badge className="border-white/10 bg-white/10 text-white">Features</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for conversations that deserve more trust than a social feed.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Amistaa manages the hard parts around verification, wallet access, call flow, moderation, and creator earnings.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn className="bg-zinc-950 p-7" delay={index * 0.05} key={feature.title}>
                <Icon aria-hidden="true" className="h-6 w-6 text-[#FF8A3D]" />
                <h3 className="mt-8 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{feature.description}</p>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
