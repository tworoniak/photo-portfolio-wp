import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="px-8 pt-40 pb-24 max-w-195 mx-auto">
      <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent mb-4">
        About
      </p>
      <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-10 italic">
        Thomas Woroniak
      </h1>

      <div className="font-body text-[1.05rem] leading-[1.8] text-secondary flex flex-col gap-6">
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
            className="text-accent no-underline"
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
        className="inline-block mt-12 font-mono text-xs tracking-[0.15em] uppercase text-canvas bg-accent py-[0.85rem] px-8 no-underline"
      >
        Get In Touch
      </Link>
    </div>
  );
}
