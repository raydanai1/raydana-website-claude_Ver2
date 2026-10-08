import fa from './fa.json';
import en from './en.json';
import ru from './ru.json';
import ar from './ar.json';
import faRoutes from './routes/fa';
import enRoutes from './routes/en';
import ruRoutes from './routes/ru';
import arRoutes from './routes/ar';
import type { RouteSlugs } from './routes/types';

/** All site languages, in switcher order. */
export const locales = ['fa', 'en', 'ru', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fa';
/** Languages that have every page translated (all of them since upgrade v3). */
export const fullLocales = locales;
/** Where pages of a language that is not in `fullLocales` would send the visitor. */
export const fallbackLocale: Locale = 'en';

export type Dictionary = typeof fa;

/** Deep-merge a partial dictionary over a complete one (missing keys fall back to the base). */
function mergeDeep<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (typeof base !== 'object' || base === null || Array.isArray(base)) return over as T;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(over as Record<string, unknown>)) {
    out[key] = key in out ? mergeDeep(out[key], value) : value;
  }
  return out as T;
}

const dictionaries: Record<Locale, Dictionary> = {
  fa,
  en: en as Dictionary,
  // Russian/Arabic are complete; any key added later and not yet translated falls back to English.
  ru: mergeDeep(en as Dictionary, ru),
  ar: mergeDeep(en as Dictionary, ar),
};

export const localeInfo: Record<
  Locale,
  { dir: 'rtl' | 'ltr'; htmlLang: string; ogLocale: string; label: string; name: string; font: 'iransans' | 'inter' }
> = {
  fa: { dir: 'rtl', htmlLang: 'fa-IR', ogLocale: 'fa_IR', label: 'FA', name: 'فارسی', font: 'iransans' },
  en: { dir: 'ltr', htmlLang: 'en', ogLocale: 'en_US', label: 'EN', name: 'English', font: 'iransans' },
  ru: { dir: 'ltr', htmlLang: 'ru', ogLocale: 'ru_RU', label: 'RU', name: 'Русский', font: 'inter' },
  ar: { dir: 'rtl', htmlLang: 'ar', ogLocale: 'ar_AR', label: 'AR', name: 'العربية', font: 'iransans' },
};

export const routeSlugs: Record<Locale, RouteSlugs> = { fa: faRoutes, en: enRoutes, ru: ruRoutes, ar: arRoutes };

export function getLocale(value: string | undefined): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Path of the homepage for a locale (Persian is served at the root). */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

/**
 * Pages of the site. Module and subsystem detail pages are keyed by their id path under products,
 * e.g. `products/finance` or `products/finance/general-accounting`; knowledge base articles by
 * `knowledge/<folder name>` and category listings by `knowledge/category/<category>` (+ `/<n>` for page n).
 */
export type StaticPage = 'home' | 'services' | 'products' | 'cloud' | 'contact' | 'about' | 'knowledge';
export type Page = StaticPage | `products/${string}` | `knowledge/${string}`;

const slug = (map: Record<string, string>, id: string) => map[id] ?? id;

/** Path of a page in a language, e.g. pagePath('services', 'fa') → /خدمات/, pagePath('services', 'en') → /en/services/. */
export function pagePath(page: Page, locale: Locale): string {
  const r = routeSlugs[locale];
  const base = homePath(locale);
  if (page === 'home') return base;
  if (!page.includes('/')) return `${base}${r.pages[page as Exclude<StaticPage, 'home'>]}/`;
  const [root, ...rest] = page.split('/');
  if (root === 'products') {
    const [moduleId, subsystemId] = rest;
    const parts = [r.pages.products, slug(r.modules, moduleId)];
    if (subsystemId) parts.push(slug(r.subsystems, subsystemId));
    return `${base}${parts.join('/')}/`;
  }
  if (root === 'knowledge') {
    if (rest[0] === 'category') {
      const [, category, n] = rest;
      const parts = [r.pages.knowledge, r.knowledgeCategory, slug(r.categories, category)];
      if (n && n !== '1') parts.push(n);
      return `${base}${parts.join('/')}/`;
    }
    return `${base}${r.pages.knowledge}/${slug(r.articles, rest[0])}/`;
  }
  throw new Error(`Unknown page key: ${page}`);
}

/** Is this page actually translated into the language (as opposed to forwarding to the fallback)? */
export function isTranslated(page: Page, locale: Locale): boolean {
  return (fullLocales as readonly Locale[]).includes(locale) || page === 'home';
}

/** URL of the same page in every language (for the language switch and hreflang). */
export function alternates(page: Page): Record<Locale, string> {
  return Object.fromEntries(locales.map((l) => [l, pagePath(page, l)])) as Record<Locale, string>;
}

/** Fill `{N}` / `{S}` style placeholders in a UI string. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

const digitSets: Partial<Record<Locale, string>> = { fa: '۰۱۲۳۴۵۶۷۸۹', ar: '٠١٢٣٤٥٦٧٨٩' };

/** Convert Latin digits to Persian (fa) or Arabic-Indic (ar) digits. */
export function localizeDigits(value: string | number, locale: Locale): string {
  const text = String(value);
  const set = digitSets[locale];
  return set ? text.replace(/\d/g, (d) => set[Number(d)]) : text;
}
