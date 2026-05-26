/**
 * Mock data for local development without a live WP instance.
 * Mirrors the shape returned by WPGraphQL queries.
 */
import type { PhotoSeries, PhotoGenre } from "@/types/wp";

export const MOCK_SERIES: PhotoSeries[] = [
  {
    id: "1",
    slug: "lamb-of-god-kansas-city-2024",
    title: "Lamb of God — Kansas City",
    date: "2024-11-12",
    featuredImage: {
      node: {
        sourceUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=80",
        altText: "Lamb of God live at Midland Theatre",
        mediaDetails: { width: 1200, height: 800 },
      },
    },
    photoSeriesFields: {
      genre: "metal",
      location: "Midland Theatre, Kansas City MO",
      eventDate: "2024-11-12",
      photoCount: 34,
      description:
        "Into Oblivion tour stop at the Midland. Pit access for the first three songs — brutal lighting, brutal music.",
      gear: "Canon R5 · 70-200mm f/2.8 · 24-70mm f/2.8",
    },
  },
  {
    id: "2",
    slug: "spiritbox-the-van-buren-2024",
    title: "Spiritbox — Phoenix",
    date: "2024-09-08",
    featuredImage: {
      node: {
        sourceUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
        altText: "Spiritbox at The Van Buren",
        mediaDetails: { width: 1200, height: 800 },
      },
    },
    photoSeriesFields: {
      genre: "metal",
      location: "The Van Buren, Phoenix AZ",
      eventDate: "2024-09-08",
      photoCount: 28,
      description: "Courtney LaPlante commanding the stage on the Rotoscope tour.",
      gear: "Canon R5 · 35mm f/1.4",
    },
  },
  {
    id: "3",
    slug: "this-gift-is-a-curse-chicago-2024",
    title: "This Gift Is a Curse — Chicago",
    date: "2024-07-20",
    featuredImage: {
      node: {
        sourceUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80",
        altText: "This Gift Is a Curse live",
        mediaDetails: { width: 1200, height: 800 },
      },
    },
    photoSeriesFields: {
      genre: "black-metal",
      location: "Subterranean, Chicago IL",
      eventDate: "2024-07-20",
      photoCount: 19,
      description: "Dense, claustrophobic set. Almost no front-of-house lighting — shot wide open.",
      gear: "Canon R5 · 50mm f/1.2",
    },
  },
  {
    id: "4",
    slug: "nature-morte-editorial-2024",
    title: "Nature Morte — Editorial Series",
    date: "2024-05-03",
    featuredImage: {
      node: {
        sourceUrl: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=1200&q=80",
        altText: "Editorial still life",
        mediaDetails: { width: 1200, height: 800 },
      },
    },
    photoSeriesFields: {
      genre: "editorial",
      location: "Studio, Kansas City MO",
      eventDate: "2024-05-03",
      photoCount: 12,
      description: "Personal editorial project — still life with decay and texture.",
      gear: "Canon R5 · 100mm Macro f/2.8",
    },
  },
];

export const MOCK_GENRES: PhotoGenre[] = [
  { id: "1", name: "Metal", slug: "metal", count: 2 },
  { id: "2", name: "Black Metal", slug: "black-metal", count: 1 },
  { id: "3", name: "Editorial", slug: "editorial", count: 1 },
];
