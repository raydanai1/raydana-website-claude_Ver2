# Knowledge base (پایگاه دانش): how to add an article

Every news item, article or event is one folder in `src/content/knowledge/`:

```
src/content/knowledge/
  erp-vs-crm/
    fa.md        Persian text (required)
    en.md        English text (optional; without it the item appears on the Persian site only)
    cover.jpg    cover image
  _template/     copy this to start; folders starting with "_" are never published
```

## Steps

1. **Copy** the folder `src/content/knowledge/_template` and rename the copy to a short, lowercase English name with dashes, e.g. `erp-for-hospitals`. This name becomes the page address: `/knowledge/erp-for-hospitals/` (and `/en/knowledge/erp-for-hospitals/`).
2. **Add the cover**: replace `cover.jpg` with your image (landscape, at least 1320 px wide). The site makes the smaller sizes automatically.
3. **Fill in `fa.md`**: the lines between the two `---` lines, then the text below them.
   - `title`: the title
   - `summary`: one or two sentences shown on cards and in search results
   - `category`: `news` (تازه‌ترین اخبار علمی), `articles` (مقالات علمی تخصصی) or `events` (رویدادها)
   - `date`: year-month-day, e.g. `2026-08-30`. It is shown as «۸ شهریور ۱۴۰۵» on the Persian site and "Aug 30, 2026" on the English one.
   - `cover: ./cover.jpg` (leave as it is) and `coverAlt`: a short description of the image
   - `featured: true`: shows the item in the slider at the top of the knowledge base (up to 3; when none are featured, the 3 newest are shown)
   - `draft: true`: hides the item. **Change it to `false` (or delete the line) to publish.**
   - The text goes below the second `---`, in Markdown: `##` for a heading, `-` for a list, `>` for a quote, `[text](https://…)` for a link, `![description](./photo.jpg)` for an extra image in the same folder, and tables.
   - Optionally do the same in `en.md` for the English version, or delete `en.md` if there is none.
4. **Check and publish**: run `npm run dev` and open http://localhost:4321/knowledge to preview. When it looks right, run `npm run build` and upload the `dist/` folder.

If something in the lines at the top is wrong (for example a misspelled category or a date in the wrong format), `npm run dev` / `npm run build` stops with a message naming the file and the field.

## Good to know

- Lists show the newest items first. Each category page shows 12 items per page, with page numbers.
- The homepage «پایگاه دانش» section is fixed (as in the design): its three cards link to the news, articles and events category pages.
- The Fa/En button on an article goes to its translation when there is one, otherwise to the other language's knowledge base home.
- Sections and category buttons with no items hide themselves.
- To add a category, add one line to `src/data/knowledge-categories.ts` (key, Persian name, English name).
- Page text (buttons, headings, FAQ) lives under `knowledge` in `src/i18n/fa.json` and `src/i18n/en.json`.
- A later option is an online editor (Decap CMS) that writes to these same folders.
