import fa from './fa.json';
import en from './en.json';

export const locales = ['fa', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fa';

const dictionaries = { fa, en } as const;
export type Dictionary = typeof fa;

export const localeInfo: Record<Locale, { dir: 'rtl' | 'ltr'; htmlLang: string; ogLocale: string }> = {
  fa: { dir: 'rtl', htmlLang: 'fa-IR', ogLocale: 'fa_IR' },
  en: { dir: 'ltr', htmlLang: 'en', ogLocale: 'en_US' },
};

export function getLocale(value: string | undefined): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}

/** Path of the homepage for a locale (Persian is served at the root). */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

/**
 * Pages that exist in both languages. Module and subsystem detail pages are keyed by their
 * path under /products, e.g. `products/finance` or `products/finance/general-accounting`.
 */
type StaticPage = 'home' | 'services' | 'products' | 'cloud' | 'oilGas' | 'contact' | 'about';
export type Page = StaticPage | `products/${string}`;
const pageSlugs: Record<StaticPage, string> = {
  home: '',
  services: 'services/',
  products: 'products/',
  cloud: 'cloud/',
  oilGas: 'solutions/oil-gas-petrochemical/',
  contact: 'contact/',
  about: 'about/',
};

/** Path of a page for a locale, e.g. /services/ (fa) and /en/services/ (en). */
export function pagePath(page: Page, locale: Locale): string {
  const slug = page.startsWith('products/') ? `${page}/` : pageSlugs[page as StaticPage];
  return `${homePath(locale)}${slug}`;
}

/** Fill `{N}` / `{S}` style placeholders in a UI string. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/** Convert Latin digits to Persian digits for the fa locale. */
export function localizeDigits(value: string | number, locale: Locale): string {
  const text = String(value);
  if (locale !== 'fa') return text;
  return text.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}
