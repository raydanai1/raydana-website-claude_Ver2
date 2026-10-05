/** /sitemap-index.xml — lists the per-language sitemaps. */
import type { APIRoute } from 'astro';
import { locales } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://raydana.com');
  const items = locales.map((l) => `  <sitemap><loc>${new URL(`/sitemap-${l}.xml`, base).href}</loc></sitemap>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
