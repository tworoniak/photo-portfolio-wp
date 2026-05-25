import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div
      style={{
        paddingTop: "10rem",
        paddingBottom: "6rem",
        padding: "10rem 2rem 6rem",
        maxWidth: "780px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          margin: "0 0 1rem",
        }}
      >
        About
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          lineHeight: 1,
          margin: "0 0 2.5rem",
          fontStyle: "italic",
        }}
      >
        Thomas Woroniak
      </h1>

      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "var(--text-secondary)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <p>
          Based in Kansas City, MO. Concert and event photographer specializing
          in heavy music — metal, hardcore, extreme genres.
        </p>
        <p>
          Founder and Editor-in-Chief of{" "}
          <a
            href="https://antiheromag.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "none" }}
          >
            Antihero Magazine
          </a>
          , an independent heavy music publication covering interviews, reviews,
          and live event photography.
        </p>
        <p>
          Available for concert, event, and editorial assignments. Accreditation
          requests via email.
        </p>
      </div>

      <Link
        href="/contact"
        style={{
          display: "inline-block",
          marginTop: "3rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--bg)",
          background: "var(--accent)",
          padding: "0.85rem 2rem",
          textDecoration: "none",
        }}
      >
        Get In Touch
      </Link>
    </div>
  );
}
