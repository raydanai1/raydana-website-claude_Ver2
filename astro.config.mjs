// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Change to the production domain before deploying (used for canonical and hreflang URLs).
  site: 'https://raydana.com',
  output: 'static',
  devToolbar: { enabled: false },
  i18n: {
    locales: ['fa', 'en'],
    defaultLocale: 'fa',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
