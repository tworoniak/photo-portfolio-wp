"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV_LINKS = [
  { href: "/gallery", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between"
      style={{
        background: "linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, transparent 100%)",
      }}
    >
      <Link
        href="/"
        className="font-display text-[1.1rem] tracking-[0.01em] text-foreground no-underline"
      >
        Thomas Woroniak
        <span className="text-accent ml-[0.15em]">Photography</span>
      </Link>

      <nav className="flex gap-8 items-center">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "font-body text-[0.8rem] tracking-[0.12em] uppercase no-underline transition-colors duration-200",
              pathname.startsWith(href) ? "text-accent" : "text-secondary"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
