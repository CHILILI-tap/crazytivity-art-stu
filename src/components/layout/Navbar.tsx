"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-ivory/10"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-editorial items-center justify-between px-5 py-5 md:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-widest2 text-ivory"
            aria-label="Crazytivity Art Stu — home"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracotta" />
            Crazytivity Art Stu
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {site.nav
              .filter((item) => item.href !== "/")
              .map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-[0.72rem] uppercase tracking-widest2 transition-colors duration-300",
                        active
                          ? "text-terracotta"
                          : "text-ivory/75 hover:text-ivory"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
          </ul>

          <Link
            href="/contact"
            className="hidden rounded-full border border-ivory/25 px-5 py-2.5 text-[0.68rem] uppercase tracking-widest2 text-ivory transition-all duration-300 hover:border-terracotta hover:text-terracotta lg:inline-flex"
          >
            Let&apos;s Create
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-full bg-ivory transition-all duration-300",
                  open && "top-1/2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ivory transition-all duration-300",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-px w-full bg-ivory transition-all duration-300",
                  open && "bottom-1/2 -rotate-45"
                )}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink transition-all duration-500 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="flex flex-1 flex-col justify-center px-8">
          <ul className="space-y-6">
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "display block text-4xl leading-none text-ivory transition-colors duration-300 hover:text-terracotta md:text-5xl",
                    "opacity-0 translate-y-4"
                  )}
                  style={{
                    transitionDelay: open ? `${80 + i * 60}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(16px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "600ms",
                    transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-ivory px-7 py-4 text-[0.72rem] uppercase tracking-widest2 text-ink"
          >
            Let&apos;s Create →
          </Link>
        </div>
      </div>
    </>
  );
}