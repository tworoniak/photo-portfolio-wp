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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, transparent 100%)",
        backdropFilter: "blur(0px)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.1rem",
          letterSpacing: "0.01em",
          color: "var(--text-primary)",
          textDecoration: "none",
        }}
      >
        Thomas Woroniak
        <span style={{ color: "var(--accent)", marginLeft: "0.15em" }}>Photography</span>
      </Link>

      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: pathname.startsWith(href)
                ? "var(--accent)"
                : "var(--text-secondary)",
              transition: "color 0.2s ease",
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
