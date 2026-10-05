/**
 * Oil, gas & petrochemical solution page content structure. Text lives under `solutionOilGas`
 * in src/i18n/{fa,en}.json — the `key` fields below point into those files. Layout values come
 * from the Figma frame «detail- product-راهکار صنایع» (node 2:1044).
 */

const img = (path: string) => `/images/solutions/oil-gas/${path}`;

export const oilGasImages = {
  heroHexShadow: img('hero-hex-shadow.svg'), // 2077:3800
  heroHexes: img('hero-hexes.svg'), // 2077:3854
  heroRefinery: img('hero-refinery.webp'), // 2077:3793
  basketPhoto: img('basket-photo.webp'), // 2:1047
  cardArrow: '/images/products/arrow.svg', // iconbutton/hover 2006:1463 (same file as the products page)
  benefitsHexBack: img('benefits-hex-back.webp'), // 102:10990
  benefitsHexFront: img('benefits-hex-front.svg'), // 102:10991
  benefitsHexMask: img('benefits-hex-mask.svg'), // 102:10995 mask
  benefitsFactory: img('benefits-factory.webp'), // 102:10992
  demoPhoto: img('demo-photo.webp'), // 2:4743
  demoHex: img('demo-hex.svg'), // 2:4785
  demoHexIcon: img('demo-hex-icon.svg'), // 2:4787
};

/**
 * Product basket cards in reading order (start column first, row by row).
 * `icon` = the 68×68 hexagon + glyph from Figma; `module` = the module the card shows and links to
 * (/products/<module>/). The chips are that module's real subsystems (Figma repeats four placeholder chips).
 */
export const basketModules = [
  { key: 'accounting', module: 'accounting', icon: '/images/products/m-accounting.svg' }, // 2:4908
  { key: 'warehouse', module: 'warehouse', icon: '/images/products/m-warehouse.svg' }, // 2:5025
  { key: 'finance', module: 'finance', icon: img('icon-finance.svg') }, // 2:4947
  { key: 'quality', module: 'quality-control', icon: '/images/products/m-quality.svg' }, // 2:4986
  { key: 'sales', module: 'sales', icon: img('icon-sales.svg') }, // 2:5074
  { key: 'budget', module: 'budget', icon: '/images/products/m-budget.svg' }, // 2:5115
] as const;

/**
 * Benefit chips (Figma 2:4793), five staggered rows from the start edge. Figma repeats four texts; each chip
 * here has its own text.
 * `offset` = space before the chip (px from the start edge for the first chip of a row,
 * gap to the previous chip otherwise); `width` = glass frame width; `glass` = frame opacity;
 * `radius` / `innerRadius` = frame / white card corner radius; `check` = the check icon file and size.
 */
type BenefitKey =
  | 'records'
  | 'cheques'
  | 'closing'
  | 'budgetControl'
  | 'assets'
  | 'projectCosts'
  | 'multiCurrency'
  | 'contractors'
  | 'inventory'
  | 'hse'
  | 'consolidated'
  | 'maintenance';
interface BenefitChip {
  key: BenefitKey;
  offset: number;
  width: number;
  glass: 0.22 | 0.44;
  radius: number;
  innerRadius: number;
  check: string;
  size: number;
}
const check = (id: string) => img(`check-${id}.svg`);

export const benefitRows: { top: number; chips: BenefitChip[] }[] = [
  {
    top: 0,
    chips: [
      { key: 'records', offset: 2, width: 284, glass: 0.22, radius: 14, innerRadius: 10, check: check('9ac10'), size: 26 },
      { key: 'cheques', offset: 8, width: 419, glass: 0.22, radius: 14, innerRadius: 12, check: check('94741'), size: 26 },
    ],
  },
  {
    top: 11,
    chips: [
      { key: 'closing', offset: 2, width: 214, glass: 0.44, radius: 14, innerRadius: 14, check: check('9b6e8'), size: 26 },
      { key: 'budgetControl', offset: 10, width: 213, glass: 0.44, radius: 14, innerRadius: 10, check: check('94741'), size: 26 },
      { key: 'assets', offset: 11, width: 330, glass: 0.22, radius: 14, innerRadius: 10, check: check('fb7e3'), size: 26 },
    ],
  },
  {
    top: 9,
    chips: [
      { key: 'projectCosts', offset: 0, width: 367, glass: 0.22, radius: 14, innerRadius: 14, check: check('84be5'), size: 25.92 },
      { key: 'multiCurrency', offset: 9, width: 220, glass: 0.44, radius: 14, innerRadius: 10, check: check('5a9b6'), size: 26 },
    ],
  },
  {
    top: 12,
    chips: [
      { key: 'contractors', offset: 1, width: 366, glass: 0.22, radius: 18, innerRadius: 12, check: check('b72c9'), size: 28.08 },
      { key: 'inventory', offset: 9, width: 215, glass: 0.44, radius: 14, innerRadius: 10, check: check('5a9b6'), size: 26 },
      { key: 'hse', offset: 11, width: 216, glass: 0.44, radius: 14, innerRadius: 10, check: check('9d344'), size: 28.08 },
    ],
  },
  {
    top: 14,
    chips: [
      { key: 'consolidated', offset: 1, width: 215, glass: 0.44, radius: 14, innerRadius: 10, check: check('5a9b6'), size: 26 },
      { key: 'maintenance', offset: 15, width: 215, glass: 0.44, radius: 14, innerRadius: 10, check: check('5a9b6'), size: 26 },
    ],
  },
];

/** Feature tabs, start → end (Figma 2:5158; the duplicate «انبار» tab is dropped). */
export const oilGasTabs = ['finance', 'hr', 'sales', 'purchasing', 'accounting', 'production', 'equipment', 'warehouse'] as const;
