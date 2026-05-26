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
    <div className="pt-28">
      {/* Page header */}
      <div className="px-8 pb-12">
        <p className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-accent mb-3">
          Portfolio
        </p>
        <h1
          className="font-display leading-none mb-8"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          All Work
        </h1>

        {/* Genre filters */}
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            aria-pressed="true"
            className="font-mono text-[0.68rem] tracking-widest uppercase py-[0.4rem] px-4 bg-accent text-canvas border-0 cursor-pointer"
          >
            All
          </button>
          {genres.map((genre) => (
            <button
              key={genre.id}
              type="button"
              aria-pressed="false"
              className="font-mono text-[0.68rem] tracking-widest uppercase py-[0.4rem] px-4 bg-transparent text-secondary border border-border cursor-pointer"
            >
              {genre.name}
              <span className="text-muted ml-[0.4em]">({genre.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div
        className="grid gap-[1.5px] bg-border border-t border-border"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))" }}
      >
        {series.map((s, i) => (
          <div key={s.id} className="bg-canvas">
            <SeriesCard series={s} priority={i < 2} />
          </div>
        ))}
      </div>

      {series.length === 0 && (
        <div className="px-8 py-24 text-center">
          <p className="text-muted font-mono text-[0.8rem]">No series found.</p>
        </div>
      )}
    </div>
  );
}
