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
    <Link href={`/gallery/${series.slug}`} className="no-underline block">
      <article className="series-card relative overflow-hidden bg-surface">
        {/* Image */}
        <div className="relative aspect-[3/2] overflow-hidden">
          {img ? (
            <Image
              src={img.sourceUrl}
              alt={img.altText || series.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="series-card-img object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            />
          ) : (
            <div className="w-full h-full bg-surface-2 flex items-center justify-center">
              <span className="text-muted text-xs">No image</span>
            </div>
          )}

          {/* Overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }}
          />

          {/* Genre tag */}
          <span className="absolute top-4 left-4 font-mono text-[0.65rem] tracking-[0.12em] uppercase text-accent bg-[rgba(10,10,10,0.8)] py-[0.25rem] px-[0.6rem] backdrop-blur-sm">
            {series.photoSeriesFields.genre}
          </span>
        </div>

        {/* Meta */}
        <div className="pt-5 px-6 pb-6">
          <h2 className="font-display text-[1.3rem] text-foreground mb-2 leading-[1.2]">
            {series.title}
          </h2>
          <div className="flex gap-6 items-center">
            <span className="font-mono text-[0.7rem] text-muted tracking-[0.06em]">
              {series.photoSeriesFields.location}
            </span>
            <span className="font-mono text-[0.7rem] text-muted">
              {series.photoSeriesFields.photoCount} photos
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
