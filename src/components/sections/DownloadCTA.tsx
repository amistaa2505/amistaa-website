import { siteConfig } from "@/constants/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { DownloadDialog } from "@/components/sections/DownloadDialog";

export function DownloadCTA() {
  return (
    <Section className="bg-white" id="download">
      <Container>
        <FadeIn className="rounded-[2rem] bg-zinc-950 px-6 py-14 text-center text-white shadow-[0_30px_100px_rgba(16,17,20,0.22)] sm:px-10 lg:px-20">
          <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Build your next meaningful conversation on <GradientText>Amistaa</GradientText>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Download the app to discover creators, or start creator onboarding to earn from premium audio and video conversations.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <DownloadDialog
              className="border-zinc-700 bg-white text-zinc-950 hover:border-zinc-500 hover:bg-zinc-100"
              variant="secondary"
            >
              Download App
            </DownloadDialog>
            <ButtonLink className="border-white/20 bg-white/10 text-white hover:bg-white/15" href={siteConfig.creatorUrl} variant="secondary">
              Become a Creator
            </ButtonLink>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
