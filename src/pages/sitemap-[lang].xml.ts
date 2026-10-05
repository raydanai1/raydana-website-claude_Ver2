/**
 * One sitemap per language: /sitemap-fa.xml, /sitemap-en.xml, /sitemap-ru.xml, /sitemap-ar.xml.
 * Each URL lists its translations (xhtml:link hreflang). Forwarding pages are left out.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { localeInfo, locales, pagePath, type Locale } from '../i18n';
import { getRoutes, type PageRoute } from '../routing';

export const getStaticPaths = (() => locales.map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

const xml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async ({ params, site }) => {
  const lang = params.lang as Locale;
  const base = site ?? new URL('https://raydana.com');
  const abs = (path: string) => xml(new URL(path, base).href);
  const pages = (await getRoutes()).filter((r): r is PageRoute => r.kind === 'page');
  const byPage = new Map<string, Locale[]>();
  for (const r of pages) byPage.set(r.page, [...(byPage.get(r.page) ?? []), r.locale]);

  const urls = pages
    .filter((r) => r.locale === lang)
    .map((r) => {
      const langs = byPage.get(r.page)!;
      const links =
        langs.length > 1
          ? [
              ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${localeInfo[l].htmlLang}" href="${abs(pagePath(r.page, l))}"/>`),
              `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pagePath(r.page, langs.includes('fa') ? 'fa' : langs[0]))}"/>`,
            ].join('\n')
          : '';
      return `  <url>\n    <loc>${abs(r.path)}</loc>\n${links}${links ? '\n' : ''}  </url>`;
    });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
