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

/** Convert Latin digits to Persian digits for the fa locale. */
export function localizeDigits(value: string | number, locale: Locale): string {
  const text = String(value);
  if (locale !== 'fa') return text;
  return text.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]);
}
