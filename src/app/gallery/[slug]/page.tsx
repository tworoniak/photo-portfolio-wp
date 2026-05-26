import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_SERIES } from "@/lib/mock-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MOCK_SERIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const series = MOCK_SERIES.find((s) => s.slug === slug);
  if (!series) return { title: "Not Found" };
  return {
    title: series.title,
    description: series.photoSeriesFields.description,
  };
}

export default async function SeriesPage({ params }: Props) {
  const { slug } = await params;
  const series = MOCK_SERIES.find((s) => s.slug === slug);
  if (!series) notFound();

  const { photoSeriesFields: fields } = series;
  const img = series.featuredImage?.node;

  return (
    <div className="pt-20">
      {/* Hero */}
      {img && (
        <div className="relative h-[70svh] overflow-hidden">
          <Image
            src={img.sourceUrl}
            alt={img.altText || series.title}
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.8) 100%)" }}
          />
        </div>
      )}

      {/* Meta block */}
      <div className="px-8 py-12 border-b border-border grid grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <Link
            href="/gallery"
            className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-accent no-underline inline-block mb-4"
          >
            ← Back to Gallery
          </Link>
          <h1
            className="font-display mb-4 leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {series.title}
          </h1>
          <p className="font-body text-base text-secondary leading-[1.7] max-w-150 m-0">
            {fields.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-5 min-w-50">
          {[
            { label: "Genre", value: fields.genre },
            { label: "Location", value: fields.location },
            { label: "Date", value: fields.eventDate },
            { label: "Photos", value: `${fields.photoCount} frames` },
            ...(fields.gear ? [{ label: "Gear", value: fields.gear }] : []),
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-muted mb-[0.2rem]">
                {label}
              </p>
              <p className="font-body text-sm text-foreground m-0">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Photo grid — populated from WP ACF gallery field in production */}
      <div className="px-8 py-12">
        <p className="font-mono text-[0.7rem] text-muted tracking-widest text-center py-16 border border-dashed border-border">
          Photo grid renders here — populated via WPGraphQL{" "}
          <code className="text-accent">photoSeriesFields.photos</code> ACF field
        </p>
      </div>
    </div>
  );
}
