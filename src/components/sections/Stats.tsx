import { stats } from "@/constants/content";
import { Container } from "@/components/ui/Container";
import { StatCard } from "@/components/ui/StatCard";

export function Stats() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-10">
      <Container className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </Container>
    </section>
  );
}
