import Image from "next/image";
import { appBenefits } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function AppScreens() {
  return (
    <Section className="overflow-hidden bg-zinc-50" id="app">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <Badge>App screens</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Separate journeys for users and creators, connected by trust.
          </h2>
        </FadeIn>
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_0.9fr_1fr]">
          <FadeIn className="relative mx-auto aspect-[864/1821] w-full max-w-[21rem] overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-2 shadow-[0_30px_90px_rgba(16,17,20,0.14)]">
            <Image
              alt="Amistaa user app screen for creator discovery and calls"
              className="rounded-[1.5rem] object-contain"
              fill
              sizes="(max-width: 1024px) 85vw, 28vw"
              src="/images/app-screen-user.png"
            />
          </FadeIn>
          <div className="grid gap-4">
            {appBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <FadeIn
                  className="rounded-3xl border border-zinc-200 bg-white p-5 text-center shadow-[0_20px_60px_rgba(16,17,20,0.06)]"
                  delay={index * 0.08}
                  key={benefit.label}
                >
                  <Icon aria-hidden="true" className="mx-auto h-6 w-6 text-[#FF2E92]" />
                  <p className="mt-3 text-sm font-semibold text-zinc-800">{benefit.label}</p>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="relative mx-auto aspect-[864/1821] w-full max-w-[21rem] overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-2 shadow-[0_30px_90px_rgba(16,17,20,0.14)]" delay={0.12}>
            <Image
              alt="Amistaa creator dashboard screen for earnings and calls"
              className="rounded-[1.5rem] object-contain"
              fill
              sizes="(max-width: 1024px) 85vw, 28vw"
              src="/images/app-screen-creator.png"
            />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
