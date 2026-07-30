import Link from "next/link";
import { navItems } from "@/constants/nav";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link className="text-lg font-bold tracking-tight text-zinc-950" href="/">
            {siteConfig.name}
          </Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
            Secure creator communication for premium one-to-one audio and video conversations.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
          {navItems.map((item) => (
            <Link className="text-sm font-medium text-zinc-600 hover:text-zinc-950" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="mt-8 text-xs text-zinc-500">
        © 2026 Amistaa Technologies Private Limited. Built for meaningful creator conversations.
      </Container>
    </footer>
  );
}
