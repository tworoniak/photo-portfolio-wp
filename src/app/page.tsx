import Link from 'next/link';
import Image from 'next/image';
import { MOCK_SERIES } from '@/lib/mock-data';

export default function HomePage() {
  const featured = MOCK_SERIES.slice(0, 3);
  const hero = MOCK_SERIES[0];

  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          height: '100svh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {hero.featuredImage && (
          <Image
            src={hero.featuredImage.node.sourceUrl}
            alt={hero.featuredImage.node.altText}
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        )}
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.1) 100%)',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '4rem 2rem',
            maxWidth: '900px',
          }}
        >
          <p
            className='animate-fade-up stagger-1'
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              margin: '0 0 1rem',
            }}
          >
            Kansas City, MO
          </p>
          <h1
            className='animate-fade-up stagger-2'
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.95,
              color: 'var(--text-primary)',
              margin: '0 0 1.5rem',
              fontStyle: 'italic',
            }}
          >
            Concert &amp;
            <br />
            Event Photography
          </h1>
          <p
            className='animate-fade-up stagger-3'
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '480px',
              lineHeight: 1.6,
              margin: '0 0 2.5rem',
            }}
          >
            Covering heavy music, live events, and editorial work.
            Editor-in-Chief @ Antihero Magazine.
          </p>
          <Link
            href='/gallery'
            className='animate-fade-up stagger-4'
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--bg)',
              background: 'var(--accent)',
              padding: '0.85rem 2rem',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
          >
            View Work
          </Link>
        </div>
      </section>

      {/* Featured grid */}
      <section style={{ padding: '6rem 2rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '2.5rem',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1rem',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              margin: 0,
              color: 'var(--text-primary)',
            }}
          >
            Recent Work
          </h2>
          <Link
            href='/gallery'
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              textDecoration: 'none',
            }}
          >
            All Series →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.5px',
            background: 'var(--border)',
          }}
        >
          {featured.map((series) => {
            const img = series.featuredImage?.node;
            return (
              <Link
                key={series.id}
                href={`/gallery/${series.slug}`}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  background: 'var(--bg)',
                }}
              >
                <article
                  className='series-card'
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '3/2',
                      overflow: 'hidden',
                    }}
                  >
                    {img && (
                      <Image
                        src={img.sourceUrl}
                        alt={img.altText || series.title}
                        fill
                        sizes='(max-width: 768px) 100vw, 33vw'
                        style={{
                          objectFit: 'cover',
                          transition:
                            'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        }}
                        className='series-card-img'
                      />
                    )}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                      }}
                    />
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        margin: '0 0 0.35rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {series.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {series.photoSeriesFields.genre} ·{' '}
                      {series.photoSeriesFields.location}
                    </span>
                  </div>
                  <style>{`.series-card:hover .series-card-img { transform: scale(1.04); }`}</style>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
