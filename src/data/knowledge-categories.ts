/**
 * Knowledge base categories, in display order (Figma ver4 pills: رویدادها · مقالات علمی تخصصی · اخبار علمی). To add a category, add one line here
 * (key = URL part, fa/en/ru/ar = names shown on the site).
 */
export const knowledgeCategoryNames = {
  events: { fa: 'رویدادها', en: 'Events', ru: 'События', ar: 'الفعاليات' },
  articles: { fa: 'مقالات علمی تخصصی', en: 'Scientific articles', ru: 'Научные статьи', ar: 'مقالات علمية متخصصة' },
  news: { fa: 'اخبار علمی', en: 'Scientific news', ru: 'Научные новости', ar: 'أخبار علمية' },
} as const;

export type KnowledgeCategory = keyof typeof knowledgeCategoryNames;
export const knowledgeCategories = Object.keys(knowledgeCategoryNames) as [KnowledgeCategory, ...KnowledgeCategory[]];
