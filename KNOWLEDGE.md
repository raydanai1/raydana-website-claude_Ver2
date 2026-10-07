# Knowledge base (پایگاه دانش): how to add an article

Every news item, article or event is one folder in `src/content/knowledge/`:

```
src/content/knowledge/
  erp-vs-crm/
    fa.md        Persian text (required)
    en.md        English text (optional)
    ru.md        Russian text (optional)
    ar.md        Arabic text (optional)
    cover.jpg    cover image
  _template/     copy this to start; folders starting with "_" are never published
```

An item appears in a language only when that language's file exists. Without `en.md`, for example, it is on the Persian site but not the English one.

## Steps

1. **Copy** the folder `src/content/knowledge/_template` and rename the copy to a short, lowercase English name with dashes, e.g. `erp-for-hospitals`. This name is the item's id. The page address in each language comes from `src/i18n/routes/<lang>.ts` (`articles` list). If you don't add a line there, the folder name is used as the address.
2. **Add the cover**: replace `cover.jpg` with your image (landscape, at least 1320 px wide). The site makes the smaller sizes automatically.
3. **Fill in `fa.md`**: the lines between the two `---` lines, then the text below them.
   - `title`: the title
   - `summary`: one or two sentences shown on cards and in search results
   - `category`: `events` (رویدادها), `articles` (مقالات علمی تخصصی) or `news` (اخبار علمی)
   - `date`: year-month-day, e.g. `2026-08-30`. It is shown as «۸ شهریور ۱۴۰۵» on the Persian site and "Aug 30, 2026" in English.
   - `order` (optional): for items with the same date, lower numbers are listed first
   - `cover: ./cover.jpg` (leave as it is) and `coverAlt`: a short description of the image
   - `featured: true`: puts the item first in the slider at the top of the knowledge base. The slider always shows 3 items: featured ones first, then the newest.
   - `intro` (optional): a bold blue line shown under the title in the slider
   - `sliderImage` (optional): a ready-made slider picture (e.g. `./slider.jpg`) shown instead of the cover in the hexagon frame
   - `draft: true`: hides the item. **Change it to `false` (or delete the line) to publish.**
   - The text goes below the second `---`, in Markdown: `##` for a heading, `-` for a list, `>` for a quote, `[text](https://…)` for a link, `![description](./photo.jpg)` for an extra image in the same folder, and tables.
   - Do the same in `en.md`, `ru.md` and `ar.md` for the translations (same `category`, `date` and `order`), or delete the ones you don't need.
4. **Check and publish**: run `npm run dev` and open the knowledge base (`/پایگاه-دانش/` on the Persian site) to preview. When it looks right, run `npm run build` and upload the `dist/` folder.

If something in the lines at the top is wrong (for example a misspelled category or a date in the wrong format), `npm run dev` / `npm run build` stops with a message naming the file and the field.

## Good to know

- The knowledge base home shows the slider, the category buttons, the 2 newest events as wide cards and the 3 newest articles.
- Lists show the newest items first. Each category page shows 12 items per page, with page numbers.
- All three category buttons are always shown. A category with nothing in it shows "Nothing has been published here yet."
- The homepage «پایگاه دانش» section is fixed (as in the design): its three cards link to the category pages.
- The language button on an article goes to its translation when there is one, otherwise to that language's knowledge base home.
- To add a category, add one line to `src/data/knowledge-categories.ts` (key and the names in all four languages) and its URL word to `categories` in `src/i18n/routes/<lang>.ts`.
- Page text (buttons, headings) lives under `knowledge` in `src/i18n/{fa,en,ru,ar}.json`; translations are also listed in `docs/translations-v3.xlsx`.
