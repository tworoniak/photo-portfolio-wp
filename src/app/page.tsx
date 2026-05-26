import Link from 'next/link';
import Image from 'next/image';
import { MOCK_SERIES } from '@/lib/mock-data';

export default function HomePage() {
  const featured = MOCK_SERIES.slice(0, 3);
  const hero = MOCK_SERIES[0];

  return (
    <>
      {/* Hero */}
      <section className="relative h-svh overflow-hidden flex items-end">
        {hero.featuredImage && (
          <Image
            src={hero.featuredImage.node.sourceUrl}
            alt={hero.featuredImage.node.altText}
            fill
            priority
            className="object-cover object-center"
          />
        )}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.1) 100%)' }}
        />

        {/* Hero content */}
        <div className="relative z-1 px-8 py-16 max-w-225">
          <p className="animate-fade-up stagger-1 font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
            Kansas City, MO
          </p>
          <h1
            className="animate-fade-up stagger-2 font-display leading-[0.95] text-foreground mb-6 italic"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Concert &amp;
            <br />
            Event Photography
          </h1>
          <p className="animate-fade-up stagger-3 font-body text-base text-secondary max-w-120 leading-relaxed mb-10">
            Covering heavy music, live events, and editorial work.
            Editor-in-Chief @ Antihero Magazine.
          </p>
          <Link
            href='/gallery'
            className="animate-fade-up stagger-4 inline-block font-mono text-xs tracking-[0.15em] uppercase text-canvas bg-accent py-[0.85rem] px-8 no-underline transition-colors duration-200"
          >
            View Work
          </Link>
        </div>
      </section>

      {/* Featured grid */}
      <section className="px-8 py-24">
        <div className="flex items-baseline justify-between mb-10 border-b border-border pb-4">
          <h2 className="font-display text-[1.8rem] m-0 text-foreground">
            Recent Work
          </h2>
          <Link
            href='/gallery'
            className="font-mono text-[0.7rem] tracking-[0.12em] uppercase text-accent no-underline"
          >
            All Series →
          </Link>
        </div>

        <div
          className="grid gap-[1.5px] bg-border"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
        >
          {featured.map((series) => {
            const img = series.featuredImage?.node;
            return (
              <Link
                key={series.id}
                href={`/gallery/${series.slug}`}
                className="no-underline block bg-canvas"
              >
                <article className="series-card relative overflow-hidden">
                  <div className="relative aspect-3/2 overflow-hidden">
                    {img && (
                      <Image
                        src={img.sourceUrl}
                        alt={img.altText || series.title}
                        fill
                        sizes='(max-width: 768px) 100vw, 33vw'
                        className="series-card-img object-cover transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                      />
                    )}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
                    />
                  </div>
                  <div className="px-6 pt-5">
                    <h3 className="font-display text-[1.2rem] mb-[0.35rem] text-foreground">
                      {series.title}
                    </h3>
                    <span className="font-mono text-[0.68rem] text-muted tracking-[0.06em] uppercase">
                      {series.photoSeriesFields.genre} ·{' '}
                      {series.photoSeriesFields.location}
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
