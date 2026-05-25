import type { Metadata } from "next";
import { MOCK_SERIES, MOCK_GENRES } from "@/lib/mock-data";
import { SeriesCard } from "@/components/gallery/SeriesCard";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Concert and event photography series by Thomas Woroniak.",
};

export default function GalleryPage() {
  const series = MOCK_SERIES;
  const genres = MOCK_GENRES;

  return (
    <div style={{ paddingTop: "7rem" }}>
      {/* Page header */}
      <div style={{ padding: "0 2rem 3rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: "0 0 0.75rem",
          }}
        >
          Portfolio
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            margin: "0 0 2rem",
            lineHeight: 1,
          }}
        >
          All Work
        </h1>

        {/* Genre filters */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <button
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.4rem 1rem",
              background: "var(--accent)",
              color: "var(--bg)",
              border: "none",
              cursor: "pointer",
            }}
          >
            All
          </button>
          {genres.map((genre) => (
            <button
              key={genre.id}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.4rem 1rem",
                background: "transparent",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
                cursor: "pointer",
              }}
            >
              {genre.name}
              <span style={{ color: "var(--text-muted)", marginLeft: "0.4em" }}>
                ({genre.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gap: "1.5px",
          background: "var(--border)",
          borderTop: "1px solid var(--border)",
        }}
      >
        {series.map((s, i) => (
          <div key={s.id} style={{ background: "var(--bg)" }}>
            <SeriesCard series={s} priority={i < 2} />
          </div>
        ))}
      </div>

      {series.length === 0 && (
        <div style={{ padding: "6rem 2rem", textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
            No series found.
          </p>
        </div>
      )}
    </div>
  );
}
