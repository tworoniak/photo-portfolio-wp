import Link from "next/link";
import Image from "next/image";
import type { PhotoSeries } from "@/types/wp";

interface SeriesCardProps {
  series: PhotoSeries;
  priority?: boolean;
}

export function SeriesCard({ series, priority = false }: SeriesCardProps) {
  const img = series.featuredImage?.node;

  return (
    <Link
      href={`/gallery/${series.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <article
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--surface)",
          cursor: "pointer",
        }}
        className="series-card"
      >
        {/* Image */}
        <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden" }}>
          {img ? (
            <Image
              src={img.sourceUrl}
              alt={img.altText || series.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              style={{
                objectFit: "cover",
                transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              className="series-card-img"
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "var(--surface-2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>No image</span>
            </div>
          )}

          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Genre tag */}
          <span
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "rgba(10,10,10,0.8)",
              padding: "0.25rem 0.6rem",
              backdropFilter: "blur(4px)",
            }}
          >
            {series.photoSeriesFields.genre}
          </span>
        </div>

        {/* Meta */}
        <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              color: "var(--text-primary)",
              margin: "0 0 0.5rem",
              lineHeight: 1.2,
            }}
          >
            {series.title}
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
              }}
            >
              {series.photoSeriesFields.location}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
              }}
            >
              {series.photoSeriesFields.photoCount} photos
            </span>
          </div>
        </div>

        <style>{`
          .series-card:hover .series-card-img {
            transform: scale(1.04);
          }
        `}</style>
      </article>
    </Link>
  );
}
