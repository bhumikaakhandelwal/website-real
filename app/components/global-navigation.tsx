"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "./container";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Activities", href: "/#activities" },
  { label: "Hackathon", href: "/#hackathon" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Challenges", href: "/challenges" },
  { label: "XP System", href: "/xp-system" },
  { label: "GitHub" , href:"https://github.com/DBCE-Coders-Club"}
] as const;
{navigation.map((item) => (
  <Link
    key={item.label}
    href={item.href}
    className="transition-colors hover:text-accent"
  >
    {item.label}
  </Link>
))}
export function GlobalNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="border-b border-border bg-background">
      <Container className="flex min-h-[var(--nav-height)] items-center justify-between gap-6 px-page">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          DBCE Coders Club
        </Link>

        <nav aria-label="Primary navigation" className="relative">
          <ul className="hidden items-center gap-1 sm:flex">
            {navigation.map((item) => {
              const isCurrentPage = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrentPage ? "page" : undefined}
                    className={`rounded-card px-3 py-2 text-sm font-medium ${
                      isCurrentPage
                        ? "bg-surface text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-card text-foreground hover:bg-surface sm:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          {isMenuOpen && (
            <div
              id="mobile-navigation"
              className="absolute right-0 top-full z-20 mt-3 w-52 rounded-card border border-border bg-background p-2 shadow-[0_12px_32px_rgb(21_21_19_/_0.08)] sm:hidden"
            >
              <ul>
                {navigation.map((item) => {
                  const isCurrentPage = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isCurrentPage ? "page" : undefined}
                        className={`block rounded-[calc(var(--radius-card)-0.25rem)] px-3 py-2 text-sm font-medium ${
                          isCurrentPage
                            ? "bg-surface text-foreground"
                            : "text-muted hover:bg-surface hover:text-foreground"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
