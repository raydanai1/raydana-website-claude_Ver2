/**
 * Every URL the site builds, in one table: real pages (Persian and English everywhere, Russian and
 * Arabic homepage), forwarding pages for not-yet-translated Russian/Arabic URLs, and 301 targets for
 * the URLs used before the localized slugs were introduced. Used by src/pages/[...path].astro, the
 * sitemaps, and the .htaccess generator.
 */
import { modules } from './data/modules';
import { KNOWLEDGE_PAGE_SIZE, getKnowledgeItems, itemsInCategory, knowledgeCategories, type KnowledgeCategory, type KnowledgeItem } from './data/knowledge';
import { fallbackLocale, fullLocales, locales, pagePath, type Locale, type Page } from './i18n';

export type PageView =
  | { view: 'home' | 'services' | 'products' | 'cloud' | 'oilGas' | 'contact' | 'about' | 'knowledge' }
  | { view: 'module'; moduleId: string }
  | { view: 'subsystem'; moduleId: string; subsystemId: string }
  | { view: 'article'; item: KnowledgeItem }
  | { view: 'category'; category: KnowledgeCategory; n: number };

export interface PageRoute {
  kind: 'page';
  path: string;
  locale: Locale;
  page: Page;
  data: PageView;
}
export interface RedirectRoute {
  kind: 'redirect';
  path: string;
  locale: Locale;
  to: string;
  /** "fallback" = untranslated ru/ar page → English; "legacy" = old URL → new URL (301 on Apache). */
  reason: 'fallback' | 'legacy';
}
export type Route = PageRoute | RedirectRoute;

/** Old (pre-localized) Persian URL of a page, e.g. /products/finance/. English URLs did not change. */
function legacyFaPath(page: Page): string | undefined {
  const old: Record<string, string> = {
    services: 'services/',
    products: 'products/',
    cloud: 'cloud/',
    oilGas: 'solutions/oil-gas-petrochemical/',
    contact: 'contact/',
    about: 'about/',
    knowledge: 'knowledge/',
  };
  if (page === 'home') return undefined;
  if (old[page]) return `/${old[page]}`;
  if (page.startsWith('products/')) return `/${page}/`;
  if (page.startsWith('knowledge/category/')) {
    const [, , category, n] = page.split('/');
    return `/knowledge/category/${category}/${n && n !== '1' ? `${n}/` : ''}`;
  }
  if (page.startsWith('knowledge/')) return `/${page}/`;
  return undefined;
}

let cache: Promise<Route[]> | undefined;

export function getRoutes(): Promise<Route[]> {
  cache ??= build();
  return cache;
}

async function build(): Promise<Route[]> {
  const routes: Route[] = [];
  const pages: { page: Page; data: PageView; locales: readonly Locale[] }[] = [];
  const staticViews = ['home', 'services', 'products', 'cloud', 'oilGas', 'contact', 'about', 'knowledge'] as const;
  for (const view of staticViews) pages.push({ page: view, data: { view }, locales: fullLocales });

  for (const m of modules) {
    pages.push({ page: `products/${m.id}`, data: { view: 'module', moduleId: m.id }, locales: fullLocales });
    for (const s of m.subsystems) {
      pages.push({ page: `products/${m.id}/${s.id}`, data: { view: 'subsystem', moduleId: m.id, subsystemId: s.id }, locales: fullLocales });
    }
  }

  for (const locale of fullLocales) {
    const items = await getKnowledgeItems(locale);
    for (const item of items) pages.push({ page: `knowledge/${item.slug}`, data: { view: 'article', item }, locales: [locale] });
    for (const category of knowledgeCategories) {
      // Every category has at least one page; an empty one shows the "nothing published yet" message.
      const count = Math.max(1, Math.ceil(itemsInCategory(items, category).length / KNOWLEDGE_PAGE_SIZE));
      for (let n = 1; n <= count; n++) {
        pages.push({ page: `knowledge/category/${category}/${n}`, data: { view: 'category', category, n }, locales: [locale] });
      }
    }
  }

  for (const p of pages) {
    for (const locale of p.locales) routes.push({ kind: 'page', path: pagePath(p.page, locale), locale, page: p.page, data: p.data });
  }

  // A language that is not fully translated gets its homepage; every other page forwards to English.
  // (Unused since all four languages are complete; kept for languages added later.)
  for (const locale of locales.filter((l) => !(fullLocales as readonly Locale[]).includes(l))) {
    routes.push({ kind: 'page', path: pagePath('home', locale), locale, page: 'home', data: { view: 'home' } });
    const seen = new Set<string>();
    for (const p of pages) {
      if (p.page === 'home' || !p.locales.includes(fallbackLocale) || seen.has(p.page)) continue;
      seen.add(p.page);
      routes.push({ kind: 'redirect', path: pagePath(p.page, locale), locale, to: pagePath(p.page, fallbackLocale), reason: 'fallback' });
    }
  }

  // Old Persian URLs (before localized slugs) → new Persian URLs.
  for (const p of pages) {
    if (!p.locales.includes('fa')) continue;
    const old = legacyFaPath(p.page);
    const now = pagePath(p.page, 'fa');
    if (old && old !== now) routes.push({ kind: 'redirect', path: old, locale: 'fa', to: now, reason: 'legacy' });
  }

  const seenPaths = new Set<string>();
  for (const r of routes) {
    if (seenPaths.has(r.path)) throw new Error(`Two routes share the URL ${r.path}`);
    seenPaths.add(r.path);
  }
  return routes;
}

/** Path → getStaticPaths param ("" for a language root is fine; the site root is undefined). */
export const toParam = (path: string) => path.replace(/^\/|\/$/g, '') || undefined;
