/**
 * Knowledge base helpers. Items live in src/content/knowledge/<slug>/{fa,en,ru,ar}.md (see KNOWLEDGE.md);
 * categories in ./knowledge-categories.ts. Layout values come from the Figma "KnowledgePage"
 * frame (node 33:6798) and the article page "NewsAndLectures" (node 119:1523).
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { localizeDigits, pagePath, type Locale } from '../i18n';
import { knowledgeCategories, knowledgeCategoryNames, type KnowledgeCategory } from './knowledge-categories';

export { knowledgeCategories, knowledgeCategoryNames, type KnowledgeCategory };

export type KnowledgeEntry = CollectionEntry<'knowledge'>;
export interface KnowledgeItem {
  slug: string;
  locale: Locale;
  entry: KnowledgeEntry;
  data: KnowledgeEntry['data'];
  href: string;
}

/** Listing pages show this many items per page. */
export const KNOWLEDGE_PAGE_SIZE = 12;

const img = (path: string) => `/images/knowledge/${path}`;
export const knowledgeImages = {
  chipDot: img('chip-dot.svg'), // 115:1030 / 33:10611 (8% blue disc behind the category label)
  calendar: img('calendar.svg'), // 33:10646
  calendarGrey: img('calendar-grey.svg'), // 2023:9147 (article archive)
  arrowBlue: img('arrow-blue.svg'), // 33:10633 "ادامه مطلب" text button
  pillArrowWhite: img('pill-arrow-white.svg'), // 33:10802
  pillArrowBlue: img('pill-arrow-blue.svg'), // 33:10805
  hexBack: img('hex-back.webp'), // 2046:3814 pale stamp-edged hexagon
  hexCard: img('hex-card.svg'), // 2046:3815 white hexagon card with shadow
  hexMask: img('hex-mask.svg'), // 2118:3808 mask (Polygon 15)
  hexSmall: img('hex-small.webp'), // 2046:3819 small blue hexagon
};

// URL slugs per language live in src/i18n/routes/<lang>.ts.
export const knowledgeBase = (locale: Locale) => pagePath('knowledge', locale);
export const knowledgeItemPath = (slug: string, locale: Locale) => pagePath(`knowledge/${slug}`, locale);
export const knowledgeCategoryPath = (category: KnowledgeCategory, locale: Locale, page = 1) =>
  pagePath(`knowledge/category/${category}/${page}`, locale);

const splitId = (id: string) => {
  const [slug, lang] = id.split('/');
  return { slug, locale: lang as Locale };
};

/** Published items of one language, newest first. */
export async function getKnowledgeItems(locale: Locale): Promise<KnowledgeItem[]> {
  const entries = await getCollection('knowledge', (e) => !e.data.draft && splitId(e.id).locale === locale);
  return entries
    .map((entry) => {
      const { slug } = splitId(entry.id);
      return { slug, locale, entry, data: entry.data, href: knowledgeItemPath(slug, locale) };
    })
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.slug.localeCompare(b.slug));
}

/** Slugs that have a published version in the given language. */
export async function getKnowledgeSlugs(locale: Locale): Promise<Set<string>> {
  return new Set((await getKnowledgeItems(locale)).map((i) => i.slug));
}

export const itemsInCategory = (items: KnowledgeItem[], category: KnowledgeCategory) => items.filter((i) => i.data.category === category);

/** Featured items for the slider (max 3); the 3 newest when none are featured. */
export function sliderItems(items: KnowledgeItem[]) {
  const featured = items.filter((i) => i.data.featured);
  return (featured.length ? featured : items).slice(0, 3);
}

/** Same category first, then the newest of the rest. */
export function relatedItems(items: KnowledgeItem[], current: KnowledgeItem, count = 3) {
  const others = items.filter((i) => i.slug !== current.slug);
  const same = others.filter((i) => i.data.category === current.data.category);
  return [...same, ...others.filter((i) => i.data.category !== current.data.category)].slice(0, count);
}

/** "۸ شهریور ۱۴۰۵" (Persian calendar and digits), "Aug 30, 2026", "30 авг. 2026 г." or "٣٠ أغسطس ٢٠٢٦". */
const dateLocales: Record<Exclude<Locale, 'fa'>, string> = { en: 'en-US', ru: 'ru-RU', ar: 'ar-EG' };
export function formatKnowledgeDate(date: Date, locale: Locale): string {
  if (locale === 'fa') {
    const parts = new Intl.DateTimeFormat('fa-IR-u-ca-persian-nu-arabext', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).formatToParts(date);
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
    return localizeDigits(`${get('day')} ${get('month')} ${get('year')}`, 'fa');
  }
  const month = locale === 'ar' ? 'long' : 'short';
  return new Intl.DateTimeFormat(dateLocales[locale], { day: 'numeric', month, year: 'numeric', timeZone: 'UTC' }).format(date);
}

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
