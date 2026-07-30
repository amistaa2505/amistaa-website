import { testimonials } from "@/constants/content";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section className="bg-white" id="testimonials">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <Badge>Testimonials</Badge>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
            Designed for people who value quality conversations.
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn className="rounded-[1.5rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_70px_rgba(16,17,20,0.06)]" delay={index * 0.08} key={testimonial.name}>
              <blockquote className="text-base leading-8 text-zinc-700">“{testimonial.quote}”</blockquote>
              <div className="mt-8">
                <strong className="block text-sm font-semibold text-zinc-950">{testimonial.name}</strong>
                <span className="mt-1 block text-sm text-zinc-500">{testimonial.role}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
