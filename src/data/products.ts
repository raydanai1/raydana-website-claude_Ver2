/**
 * Products page content structure. Text lives under `products` in src/i18n/{fa,en}.json —
 * the `key` fields below point into those files. Layout values come from the Figma
 * "products" frame (node 2:5214).
 */

const img = (path: string) => `/images/products/${path}`;

/**
 * Business-solution modules (4×4 grid), in Figma reading order (start → end, row by row).
 * `icon` = the card's 68×68 hexagon + glyph, exported from Figma as one SVG;
 * `module` = the module page id (src/data/modules/<module>.json, page /products/<module>/).
 */
export const productModules = [
  { key: 'sales', module: 'sales', icon: img('m-sales.svg') },
  { key: 'finance', module: 'finance', icon: img('m-finance.svg') },
  { key: 'hr', module: 'hr', icon: img('m-hr.svg') },
  { key: 'production', module: 'production-planning', icon: img('m-production.svg') },
  { key: 'transport', module: 'transportation', icon: img('m-transport.svg') },
  { key: 'purchase', module: 'purchasing', icon: img('m-purchase.svg') },
  { key: 'maintenance', module: 'maintenance', icon: img('m-maintenance.svg') },
  { key: 'it', module: 'it', icon: img('m-it.svg') },
  { key: 'warehouse', module: 'warehouse', icon: img('m-warehouse.svg') },
  { key: 'quality', module: 'quality-control', icon: img('m-quality.svg') },
  { key: 'budget', module: 'budget', icon: img('m-budget.svg') },
  { key: 'supply', module: 'supply', icon: img('m-supply.svg') },
  { key: 'services', module: 'services', icon: img('m-services.svg') },
  { key: 'accounting', module: 'accounting', icon: img('m-accounting.svg') },
  { key: 'contracts', module: 'contracts', icon: img('m-contracts.svg') },
  { key: 'automation', module: 'office-automation', icon: img('m-automation.svg') },
] as const;

/** Industry solution cards (3-column grid, reading order). */
export const productIndustries = [
  { key: 'government', icon: img('i-government.svg') },
  { key: 'large', icon: img('i-large.svg') },
  { key: 'oil', icon: img('i-oil.svg') },
  { key: 'pension', icon: img('i-pension.svg') },
  { key: 'international', icon: img('i-international.svg') },
  { key: 'sme', icon: img('i-sme.svg') },
] as const;

/** Complementary products (2-column grid, reading order); `badge` is the text in the hexagon. */
export const complementaryProducts = [
  { key: 'bi', badge: 'BI' },
  { key: 'bpms', badge: 'BPMS', small: true },
  { key: 'ai', badge: 'AI' },
  { key: 'eform', badge: 'e-form', small: true },
  { key: 'rb', badge: 'RB' },
  { key: 'ar', badge: 'AR' },
] as const;

export const productImages = {
  heroHexagons: img('hero-hexagons.webp'),
  modulesBg: img('navy-bg.webp'),
  badgeHex: img('badge-hex.svg'),
  industriesBg: '/images/tools/bg-gradient.webp',
  cardArrow: img('arrow.svg'),
};
