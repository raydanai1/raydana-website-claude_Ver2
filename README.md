# Raydana website (CYBER ERP homepage)

Astro + Tailwind CSS implementation of the Figma design
([HomePage frame](https://www.figma.com/design/kJjpvHY0nwgIagKfqJ4iEV/raydana-design-For-Framer-To-Holm?node-id=2034-4623)).
The site is bilingual:

| Language | URL    | Direction |
| -------- | ------ | --------- |
| Persian  | `/`    | RTL       |
| English  | `/en/` | LTR       |

The output is fully static, so `dist/` can be uploaded to any web host.

## Requirements

- Node.js 22.12 or newer (developed with Node 24)
- npm

## Run, build, deploy

```bash
npm install        # first time only
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build into ./dist
npm run preview    # serve ./dist locally to check the build
```

**Deploy:** run `npm run build`, then upload the **contents** of `dist/` to the web root of any static host
(Nginx, Apache/cPanel, IIS, Netlify, Vercel, Cloudflare Pages, GitHub Pages…).
`/` serves Persian and `/en/` serves English; no server-side code is needed.

Before going live, set the real domain in `astro.config.mjs` (`site: 'https://raydana.com'`).
It is used for the canonical and `hreflang` links.

## Editing text

All page text lives in two files with the same structure:

- `src/i18n/fa.json`: Persian
- `src/i18n/en.json`: English

Change a value and save. The dev server reloads automatically. When you add a new key, add it to **both** files.

Lists are defined once in `src/data/home.ts`: trusted logos, challenges, modules, tools, industries, process steps,
testimonials and knowledge cards. Each item has a `key` that points to its text in the JSON files.

- **Add a testimonial:** add an entry to `testimonials` in `src/data/home.ts`, plus matching text under
  `testimonials.items` in both JSON files. The carousel arrows and dots appear automatically once there are two or more.
- **Demo video:** the play button shows a "coming soon" note. Wire it to a real video in `src/components/Demo.astro`.
- **Links:** menu and footer links currently point to sections on the homepage (`#…`). Update them as new pages are added.

## Project structure

```text
public/
  fonts/              IRANSansX Regular / Medium / Bold (copied from /fonts)
  images/<section>/   all images exported from Figma (no remote Figma URLs are used)
src/
  components/         one component per homepage section (Header, Hero, TrustedBy, Challenges, …, Footer)
  components/ui/      shared Button and Logo
  data/home.ts        list data and desktop layout coordinates measured from Figma
  i18n/               fa.json, en.json, helpers (locale, direction, Persian digits)
  layouts/Layout.astro  <html lang/dir>, SEO meta, hreflang, fonts
  pages/index.astro     Persian homepage
  pages/en/index.astro  English homepage
  styles/global.css     Tailwind import, @font-face, Figma design tokens (@theme)
```

## Design tokens

The colours, type sizes and shadows from the Figma variables are defined as Tailwind theme tokens in
`src/styles/global.css`. For example: `text-primary` (#0071E3), `text-title` (#0B518C), `text-ink` (#3B4561),
`text-body` (#6C7078 colour), `text-15` (15px size), `shadow-card` and `shadow-industry`.

## RTL / LTR notes

- Layout uses logical utilities (`ms-*`, `pe-*`, `start-*`), so it mirrors automatically.
- Directional arrows use `.dir-icon` / `.dir-icon-rev` to flip in the other direction.
- The scattered "challenges" chips, the cube cards and the serpentine process timeline use Figma coordinates on wide
  screens (≥1280px or ≥1024px) and are mirrored for English. Smaller screens use stacked layouts: wrapped chips,
  a card grid and a vertical timeline.

## Fonts

IRANSansX (Regular 400, Medium 500, Bold 700) is self-hosted from `public/fonts`. Vazirmatn (CDN) is only a fallback.
IRANSansX is a commercial font, so make sure your licence covers web use.


