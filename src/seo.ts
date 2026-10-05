/** schema.org helpers for the page-level JSON-LD passed to Layout (`jsonLd`). */
import type { KnowledgeItem } from './data/knowledge';
import { homePath, localeInfo, pagePath, type Locale, type Page, useTranslations } from './i18n';

const site = 'https://raydana.com';
const abs = (path: string) => new URL(path, site).href;

/** Home › … › current page. `trail` = [name, page] pairs after the homepage. */
export function breadcrumbList(locale: Locale, trail: [string, Page][]) {
  const items: [string, string][] = [[useTranslations(locale).meta.siteName, homePath(locale)], ...trail.map(([n, p]) => [n, pagePath(p, locale)] as [string, string])];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
  };
}

/** Knowledge base article. */
export function articleSchema(locale: Locale, item: KnowledgeItem, image: string) {
  return {
    '@type': 'Article',
    headline: item.data.title,
    description: item.data.summary,
    image: abs(image),
    datePublished: item.data.date.toISOString().slice(0, 10),
    inLanguage: localeInfo[locale].htmlLang,
    mainEntityOfPage: abs(pagePath(`knowledge/${item.slug}`, locale)),
    author: { '@type': 'Organization', name: useTranslations(locale).meta.siteName, url: abs(homePath(locale)) },
    publisher: { '@id': `${abs('/')}#organization` },
  };
}
