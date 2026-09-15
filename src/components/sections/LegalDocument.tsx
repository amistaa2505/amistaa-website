import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export function LegalDocument({
  date,
  description,
  sections,
  title,
}: Readonly<{
  date: string;
  description: string;
  sections: LegalSection[];
  title: string;
}>) {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50 py-20 sm:py-28">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3B2EFF] via-[#FF2E92] to-[#FF8A3D]" />
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3B2EFF]">Amistaa legal</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
              {title.includes("Privacy") ? <><GradientText>Privacy</GradientText> Policy</> : title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{description}</p>
            <p className="mt-8 text-sm font-medium text-zinc-500">Last updated: {date}</p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[13rem_minmax(0,45rem)] lg:items-start lg:justify-center lg:gap-20">
          <aside className="lg:sticky lg:top-28">
            <details className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 lg:open:bg-white">
              <summary className="cursor-pointer text-sm font-semibold text-zinc-950 lg:cursor-default lg:list-none">
                On this page
              </summary>
              <nav aria-label="On this page" className="mt-4 grid gap-2 lg:mt-5">
                {sections.map((section) => (
                  <a className="text-sm leading-5 text-zinc-600 transition hover:text-[#3B2EFF]" href={`#${section.id}`} key={section.id}>
                    {section.title}
                  </a>
                ))}
              </nav>
            </details>
          </aside>
          <article className="min-w-0 text-[1.02rem] leading-8 text-zinc-600">
            <p className="mb-10 rounded-2xl border border-[#dcd8ff] bg-[#f7f6ff] px-5 py-4 text-sm leading-6 text-zinc-700">
              These documents are designed to be clear and readable. If you have a question about how a provision applies to you, contact us before using the platform.
            </p>
            {sections.map((section) => (
              <section className="scroll-mt-28 border-t border-zinc-200 py-9 first:border-t-0 first:pt-0" id={section.id} key={section.id}>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">{section.title}</h2>
                <div className="mt-4 space-y-4">{section.content}</div>
              </section>
            ))}
          </article>
        </Container>
      </section>
    </main>
  );
}
