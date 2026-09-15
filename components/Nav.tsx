"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/swarthmore", label: "Swarthmore" },
  { href: "/experience", label: "Experience" },
  { href: "/personal", label: "Personal" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-md dark:border-dark-fg/10 dark:bg-dark-bg/85">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-base font-semibold text-ink transition-colors hover:text-accent dark:text-dark-fg dark:hover:text-accent"
        >
          Jacob Cohen
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors ${
                  pathname === href
                    ? "text-accent"
                    : "text-ink-muted hover:text-ink dark:text-dark-muted dark:hover:text-dark-fg"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-ink transition-all dark:bg-dark-fg ${menuOpen ? "translate-y-2.5 rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-all dark:bg-dark-fg ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-all dark:bg-dark-fg ${menuOpen ? "-translate-y-2.5 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-ink/10 bg-cream/95 backdrop-blur-md dark:border-dark-fg/10 dark:bg-dark-bg/95 md:hidden">
          <ul className="mx-auto max-w-5xl flex flex-col px-6 py-4 gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm transition-colors ${
                    pathname === href
                      ? "text-accent"
                      : "text-ink-muted hover:text-ink dark:text-dark-muted dark:hover:text-dark-fg"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
