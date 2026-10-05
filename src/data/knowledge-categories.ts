/**
 * Knowledge base categories, in display order. To add a category, add one line here
 * (key = URL part, fa/en/ru/ar = names shown on the site).
 */
export const knowledgeCategoryNames = {
  news: { fa: 'تازه‌ترین اخبار علمی', en: 'Latest news', ru: 'Последние новости', ar: 'أحدث الأخبار' },
  articles: { fa: 'مقالات علمی تخصصی', en: 'Articles', ru: 'Экспертные статьи', ar: 'مقالات متخصصة' },
  events: { fa: 'رویدادها', en: 'Events', ru: 'События', ar: 'الفعاليات' },
} as const;

export type KnowledgeCategory = keyof typeof knowledgeCategoryNames;
export const knowledgeCategories = Object.keys(knowledgeCategoryNames) as [KnowledgeCategory, ...KnowledgeCategory[]];
