// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { rename } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

/** Astro does not emit dot-files from pages, so /htaccess.txt is renamed to /.htaccess after the build. */
const htaccess = {
  name: 'raydana-htaccess',
  hooks: {
    /** @param {{ dir: URL }} options */
    'astro:build:done': async ({ dir }) => {
      await rename(fileURLToPath(new URL('htaccess.txt', dir)), fileURLToPath(new URL('.htaccess', dir)));
    },
  },
};

// https://astro.build/config
export default defineConfig({
  // Change to the production domain before deploying (used for canonical, hreflang and sitemap URLs).
  site: 'https://raydana.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  // Inline the (single) site stylesheet into each page so first paint needs no render-blocking CSS request.
  build: { inlineStylesheets: 'always' },
  // Languages and localized URLs are handled by src/i18n and src/routing.ts (one route file: src/pages/[...path].astro).
  integrations: [htaccess],
  vite: {
    plugins: [tailwindcss()],
  },
});
