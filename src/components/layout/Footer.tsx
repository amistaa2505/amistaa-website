import Link from "next/link";
import { navItems } from "@/constants/nav";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10">
      <Container className="grid gap-10 md:grid-cols-[minmax(14rem,0.8fr)_minmax(0,1.2fr)] md:gap-16">
        <div className="max-w-md">
          <Link aria-label="Amistaa home" className="inline-flex text-lg font-bold tracking-[-0.03em]" href="/">
            <GradientText>{siteConfig.name}</GradientText>
          </Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
            Secure creator communication for premium one-to-one audio and video conversations.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 content-start gap-x-6 gap-y-4 sm:grid-cols-3">
          {navItems.map((item) => (
            <Link className="text-sm font-medium text-zinc-600 hover:text-zinc-950" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="text-sm font-medium text-zinc-600 hover:text-zinc-950" href="/about">
            About Us
          </Link>
          <Link className="text-sm font-medium text-zinc-600 hover:text-zinc-950" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-sm font-medium text-zinc-600 hover:text-zinc-950" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-sm font-medium text-zinc-600 hover:text-zinc-950" href="/feedback">
            Feedback
          </Link>
        </nav>
      </Container>
      <Container className="mt-10 border-t border-zinc-200 pt-6 text-xs leading-5 text-zinc-500">
        © 2026 Amistaa Technologies Private Limited. Built for meaningful creator conversations.
      </Container>
    </footer>
  );
}
