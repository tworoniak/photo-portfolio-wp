# Thomas Woroniak Photography — Headless WordPress + Next.js

A headless photography portfolio powered by **WordPress** (CMS) and **Next.js 14** (App Router frontend).

## Stack

| Layer | Tech |
|---|---|
| Frontend | Next.js 14, App Router, TypeScript |
| Styling | Tailwind CSS v4 |
| CMS | WordPress (self-hosted) |
| Data layer | WPGraphQL |
| Images | `next/image` with remote patterns |
| Font | DM Serif Display + DM Sans (Google Fonts) |

---

## WordPress Setup

### Required Plugins
- **WPGraphQL** — exposes GraphQL API
- **WPGraphQL for Advanced Custom Fields** — exposes ACF fields to GraphQL
- **Advanced Custom Fields (ACF)** — custom field groups
- **Custom Post Type UI** — register `photo_series` CPT

### Custom Post Type: `photo_series`
Register via CPT UI:
- Post type slug: `photo_series`
- Supports: title, thumbnail (featured image)

### ACF Field Group: `Photo Series Fields`
Attach to: `photo_series` post type

| Field name | Type | Notes |
|---|---|---|
| `genre` | Text | e.g. "metal", "black-metal", "editorial" |
| `location` | Text | Venue + city |
| `event_date` | Date Picker | |
| `photo_count` | Number | |
| `description` | Textarea | |
| `gear` | Text | Camera + lens info |
| `photos` | Gallery | ACF Gallery field — main photo grid |

Enable all ACF fields in **WPGraphQL → Settings → Allow GraphQL**.

### Taxonomy: `photo_genre`
Register via CPT UI, attach to `photo_series`.

---

## Development

```bash
cp .env.local.example .env.local
# Fill in NEXT_PUBLIC_WP_GRAPHQL_URL

npm install
npm run dev
```

The app ships with **mock data** in `src/lib/mock-data.ts` that mirrors the WPGraphQL response shape, so you can develop the frontend without a live WP instance.

### Switching from mock data to live WP

In each page/component, replace:
```ts
import { MOCK_SERIES } from "@/lib/mock-data";
const series = MOCK_SERIES;
```
with:
```ts
import { wpClient } from "@/lib/graphql";
import { GET_ALL_SERIES } from "@/lib/queries";
import type { GetAllSeriesResponse } from "@/types/wp";

const data = await wpClient.request<GetAllSeriesResponse>(GET_ALL_SERIES);
const series = data.allPhotoSeries.nodes;
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout, fonts, Header/Footer
│   ├── globals.css          # CSS variables, grain overlay, animations
│   ├── page.tsx             # Homepage — hero + featured grid
│   ├── gallery/
│   │   ├── page.tsx         # All series, genre filter
│   │   └── [slug]/
│   │       └── page.tsx     # Series detail — meta + photo grid
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── gallery/
│       └── SeriesCard.tsx
├── lib/
│   ├── graphql.ts           # WPGraphQL client (graphql-request)
│   ├── queries.ts           # All GQL query strings
│   └── mock-data.ts         # Dev mock data
└── types/
    └── wp.ts                # TypeScript interfaces for WP/GQL responses
```

---

## Deployment

Recommended: **Vercel**

Set `NEXT_PUBLIC_WP_GRAPHQL_URL` in Vercel environment variables.

For ISR (Incremental Static Regeneration), add `revalidate` to data-fetching pages:
```ts
export const revalidate = 3600; // revalidate every hour
```

Or use WPGraphQL's webhook support to trigger on-demand revalidation when content is published.
