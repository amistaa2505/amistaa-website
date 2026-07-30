import Link from "next/link";
import { navItems } from "@/constants/nav";
import { siteConfig } from "@/constants/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DownloadDialog } from "@/components/sections/DownloadDialog";
import { MobileNav } from "@/components/layout/MobileNav";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  return (
    <header className="relative sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-6 md:min-h-20">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={siteConfig.creatorUrl} variant="secondary">
            Become a Creator
          </ButtonLink>
          <DownloadDialog>Download App</DownloadDialog>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <DownloadDialog className="hidden md:inline-flex">Download App</DownloadDialog>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
