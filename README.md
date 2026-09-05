# Dimensi — Corporate Website

Multi-page, bilingual (EN/ID) marketing site for Dimensi, built with [Astro](https://astro.build) and Tailwind CSS v4. Output is fully static — no server or database required.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output locally
```

## Deploying to Vercel

Vercel auto-detects Astro. If you configure it manually:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Output directory:** `dist`

Update `site` in `astro.config.mjs` to the production domain — it drives canonical URLs, `hreflang` tags, and `sitemap-index.xml`. The domain also appears in `public/robots.txt`.

## Structure

```
src/
  data/          all site copy, one file per domain (see "Editing content")
  i18n/ui.ts     language helpers: t(), localize(), getLang()
  lib/icons.ts   the stroke icon set
  components/    shared UI; components/pages/ holds one component per page
  layouts/       BaseLayout — head tags, header, footer, reveal script
  pages/         routes; /pages/id/* mirrors the English tree
  styles/        global.css — design tokens and component classes
public/assets/   imagery from the company profile
design/          landing.jpeg, the reference composition
legacy/          the previous single-page site, kept for reference
```

## Editing content

Every string is bilingual, written as `{ en: '…', id: '…' }`. Change copy in `src/data/` and both languages update together:

| File | Holds |
| --- | --- |
| `site.ts` | brand details, navigation, contact info, shared button labels |
| `pages.ts` | per-page headline, lead paragraph, and SEO title/description |
| `services.ts` | the eight services (a new entry creates its own detail page) |
| `industries.ts` | industry sectors |
| `work.ts` | case studies and the IT talent feature |
| `insights.ts` | articles |
| `careers.ts` | open roles and perks |
| `company.ts` | value strip, statistics, principles, process, milestones |
| `partners.ts` | partners and client logos |

Adding an item to `services`, `work`, `insights`, or `careers` generates its detail page in both languages automatically — no new route file needed.

## Routes

`/` `/about` `/services` `/services/[slug]` `/industries` `/work` `/work/[slug]` `/insights` `/insights/[slug]` `/careers` `/careers/[slug]` `/contact`, each mirrored under `/id/`, plus a shared 404.

## Notes

- **Contact form** has no backend. On submit it opens the visitor's email client with the fields filled in (`src/components/pages/Contact.astro`). To post to a real endpoint, give the `<form>` an `action` and delete the inline script at the bottom of that file.
- **Search** (magnifier in the header, or ⌘K / Ctrl+K) filters an index built at compile time from the navigation, services, industries, articles, and roles.
- **Placeholder copy.** Industries, Insights, and Careers had no source material in the company profile; their content is plausible placeholder text written to be replaced.
