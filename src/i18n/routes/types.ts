/** Shape of one language's URL slug file (src/i18n/routes/<lang>.ts). */
export interface RouteSlugs {
  /** Top-level pages. A slug may contain "/" to nest, e.g. "solutions/oil-gas". */
  pages: {
    products: string;
    services: string;
    cloud: string;
    oilGas: string;
    contact: string;
    about: string;
    knowledge: string;
  };
  /** ERP module id (src/data/modules/<id>.json) → slug under the products page. */
  modules: Record<string, string>;
  /** Subsystem id → slug under its module page. */
  subsystems: Record<string, string>;
  /** Word used before a knowledge-base category, e.g. /knowledge/category/news/. */
  knowledgeCategory: string;
  /** Knowledge-base category key → slug. */
  categories: Record<string, string>;
  /** Knowledge-base article folder name → slug (optional; the folder name is used when missing). */
  articles: Record<string, string>;
}
