/** /robots.txt — allows everything and points crawlers at the sitemap index. */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://raydana.com');
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', base).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
