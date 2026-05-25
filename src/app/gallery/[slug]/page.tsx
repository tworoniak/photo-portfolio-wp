import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_SERIES } from "@/lib/mock-data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return MOCK_SERIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const series = MOCK_SERIES.find((s) => s.slug === params.slug);
  if (!series) return { title: "Not Found" };
  return {
    title: series.title,
    description: series.photoSeriesFields.description,
  };
}

export default function SeriesPage({ params }: Props) {
  const series = MOCK_SERIES.find((s) => s.slug === params.slug);
  if (!series) notFound();

  const { photoSeriesFields: fields } = series;
  const img = series.featuredImage?.node;

  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Hero */}
      {img && (
        <div style={{ position: "relative", height: "70svh", overflow: "hidden" }}>
          <Image
            src={img.sourceUrl}
            alt={img.altText || series.title}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.8) 100%)",
            }}
          />
        </div>
      )}

      {/* Meta block */}
      <div
        style={{
          padding: "3rem 2rem",
          borderBottom: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div>
          <Link
            href="/gallery"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            ← Back to Gallery
          </Link>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              margin: "0 0 1rem",
              lineHeight: 1.05,
            }}
          >
            {series.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: 0,
            }}
          >
            {fields.description}
          </p>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            minWidth: "200px",
          }}
        >
          {[
            { label: "Genre", value: fields.genre },
            { label: "Location", value: fields.location },
            { label: "Date", value: fields.eventDate },
            { label: "Photos", value: `${fields.photoCount} frames` },
            ...(fields.gear ? [{ label: "Gear", value: fields.gear }] : []),
          ].map(({ label, value }) => (
            <div key={label}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  margin: "0 0 0.2rem",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo grid — populated from WP ACF gallery field in production */}
      <div style={{ padding: "3rem 2rem" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--text-muted)",
            letterSpacing: "0.1em",
            textAlign: "center",
            padding: "4rem 0",
            border: "1px dashed var(--border)",
          }}
        >
          Photo grid renders here — populated via WPGraphQL{" "}
          <code style={{ color: "var(--accent)" }}>photoSeriesFields.photos</code> ACF field
        </p>
      </div>
    </div>
  );
}
