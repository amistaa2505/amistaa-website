import { securityFeatures } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export function Security() {
  return (
    <Section id="security">
      <Container className="rounded-[2rem] bg-[linear-gradient(135deg,#101114,#272040)] p-6 text-white sm:p-10 lg:p-14">
        <FadeIn className="max-w-3xl">
          <Badge className="border-white/10 bg-white/10 text-white">Security</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Trust is not a feature label. It is the operating system.
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Amistaa separates access, payments, moderation, and creator verification so premium conversations can happen with confidence.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn className="rounded-3xl border border-white/10 bg-white/10 p-6" delay={index * 0.08} key={feature.title}>
                <Icon aria-hidden="true" className="h-6 w-6 text-[#FF8A3D]" />
                <h3 className="mt-8 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{feature.description}</p>
              </FadeIn>
            );
          })}
        </div>
        <ButtonLink className="mt-8 border-white/20 bg-white/10 text-white hover:bg-white/15" href="/security" variant="secondary">Explore Security <span aria-hidden="true" className="ml-2">→</span></ButtonLink>
      </Container>
    </Section>
  );
}
