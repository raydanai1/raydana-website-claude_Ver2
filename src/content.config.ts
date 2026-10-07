import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { knowledgeCategories } from './data/knowledge-categories';

/**
 * Knowledge base items: src/content/knowledge/<slug>/{fa,en,ru,ar}.md + cover.jpg.
 * fa.md is the Persian version; en.md, ru.md and ar.md are the (optional) translations; they are linked by the folder name.
 * Folders starting with "_" (e.g. _template) are never published.
 * Entry ids are "<slug>/<lang>", e.g. "erp-vs-crm/fa".
 */
const knowledge = defineCollection({
  loader: glob({
    base: './src/content/knowledge',
    pattern: '[!_]*/{fa,en,ru,ar}.md',
    generateId: ({ entry }) => entry.replace(/\\/g, '/').replace(/\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1, 'title is required'),
      summary: z.string().min(1, 'summary is required'),
      category: z.enum(knowledgeCategories, {
        error: `category must be one of: ${knowledgeCategories.join(', ')}`,
      }),
      date: z.coerce.date({ error: 'date must be a date like 2026-08-30' }),
      cover: image(),
      coverAlt: z.string().optional(),
      /** Optional bold blue line under the title in the slider (Figma 6002:2557). */
      intro: z.string().optional(),
      /** Optional ready-made slider artwork (shown instead of the cover cut to a hexagon). */
      sliderImage: image().optional(),
      featured: z.boolean().default(false),
      /** Tie-breaker for items with the same date: lower numbers come first. */
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

export const collections = { knowledge };
