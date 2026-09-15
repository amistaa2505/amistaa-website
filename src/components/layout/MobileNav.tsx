"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { navItems } from "@/constants/nav";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/cn";

const mobileNavItems = navItems;

const mobileActions = [
  { href: siteConfig.creatorUrl, label: "Become a Creator" },
  { href: siteConfig.downloadUrl, label: "Download App" },
];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const focusableItems = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]");
    focusableItems?.[0]?.focus();

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (menuRef.current?.contains(target) || triggerRef.current?.contains(target)) {
        return;
      }

      closeMenu();
    }

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      closeMenu();
      triggerRef.current?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  function handleMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") {
      return;
    }

    const focusableItems = Array.from(menuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);

    if (focusableItems.length === 0) {
      return;
    }

    const firstItem = focusableItems[0];
    const lastItem = focusableItems[focusableItems.length - 1];

    if (event.shiftKey && document.activeElement === firstItem) {
      event.preventDefault();
      lastItem.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastItem) {
      event.preventDefault();
      firstItem.focus();
    }
  }

  return (
    <div className="relative lg:hidden">
      <button
        aria-controls="mobile-navigation-menu"
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="relative flex h-11 w-11 items-center justify-center rounded-2xl text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D3CFF]"
        onClick={() => setOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        <motion.span
          animate={open ? { opacity: 0, rotate: -90, scale: 0.8 } : { opacity: 1, rotate: 0, scale: 1 }}
          className="absolute"
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </motion.span>
        <motion.span
          animate={open ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: 90, scale: 0.8 }}
          className="absolute"
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <X aria-hidden="true" className="h-6 w-6" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white/95 p-3 shadow-[0_24px_80px_rgba(16,17,20,0.16)] backdrop-blur-xl"
            exit={reduceMotion ? { opacity: 0 } : { filter: "blur(8px)", opacity: 0, y: -8 }}
            id="mobile-navigation-menu"
            initial={reduceMotion ? { opacity: 0 } : { filter: "blur(8px)", opacity: 0, y: -8 }}
            onKeyDown={handleMenuKeyDown}
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {mobileNavItems.map((item) => {
                const isActive = item.href.startsWith("/") && !item.href.includes("#") && pathname === item.href;

                return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-2xl px-5 py-4 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D3CFF]",
                    isActive ? "bg-[#f7f6ff] text-[#6D4AFF]" : "text-zinc-700 hover:bg-zinc-50 hover:text-[#6D4AFF]",
                  )}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                );
              })}
            </nav>

            <div className="mt-3 grid gap-1 border-t border-zinc-200/80 pt-3">
              {mobileActions.map((item) => (
                <Link
                  className="rounded-2xl px-5 py-4 text-base font-semibold text-zinc-950 transition hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D3CFF]"
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
