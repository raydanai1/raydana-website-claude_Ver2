/**
 * Knowledge base categories, in display order. To add a category, add one line here
 * (key = URL part, fa/en = names shown on the site).
 */
export const knowledgeCategoryNames = {
  news: { fa: 'تازه‌ترین اخبار علمی', en: 'Latest news' },
  articles: { fa: 'مقالات علمی تخصصی', en: 'Articles' },
  events: { fa: 'رویدادها', en: 'Events' },
} as const;

export type KnowledgeCategory = keyof typeof knowledgeCategoryNames;
export const knowledgeCategories = Object.keys(knowledgeCategoryNames) as [KnowledgeCategory, ...KnowledgeCategory[]];
