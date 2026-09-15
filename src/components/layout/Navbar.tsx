"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/nav";
import { siteConfig } from "@/constants/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DownloadDialog } from "@/components/sections/DownloadDialog";
import { MobileNav } from "@/components/layout/MobileNav";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-5">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navItems.map((item) => {
            const isActive = item.href.startsWith("/") && !item.href.includes("#") && pathname === item.href;

            return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "rounded-lg text-sm font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7D3CFF]",
                isActive
                  ? "bg-gradient-to-r from-[#3B2EFF] via-[#EC3FA9] to-[#FF8A4C] bg-clip-text text-transparent"
                  : "text-zinc-600 hover:bg-gradient-to-r hover:from-[#3B2EFF] hover:via-[#EC3FA9] hover:to-[#FF8A4C] hover:bg-clip-text hover:text-transparent",
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
            );
          })}
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
