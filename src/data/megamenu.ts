/**
 * Header megamenu (Figma 6004:3053 / 6004:3054 / 6004:3055): three tabs, each a list of links laid out
 * in up to three columns, filled column by column (start column first). Text lives under `megamenu`
 * in src/i18n/<lang>.json. `module` = the module page the item opens; items without one open the
 * products page, `page` names another page.
 */
import type { StaticPage } from '../i18n';

export interface MegamenuItem {
  key: string;
  module?: string;
  page?: StaticPage;
}
export interface MegamenuTab {
  key: 'areas' | 'industries' | 'products';
  /** Items per column, as in Figma. */
  rows: number;
  items: MegamenuItem[];
}

export const megamenuTabs: MegamenuTab[] = [
  {
    key: 'areas',
    rows: 7,
    items: [
      { key: 'finance', module: 'finance' },
      { key: 'accounting', module: 'accounting' },
      { key: 'hr', module: 'hr' },
      { key: 'supply', module: 'supply' },
      { key: 'purchasing', module: 'purchasing' },
      { key: 'productionEquipment' },
      { key: 'warehouse', module: 'warehouse' },
      { key: 'budget', module: 'budget' },
      { key: 'services', module: 'services' },
      { key: 'production', module: 'production-planning' },
      { key: 'contracts', module: 'contracts' },
      { key: 'transportation', module: 'transportation' },
      { key: 'sales', module: 'sales' },
      { key: 'maintenance', module: 'maintenance' },
      { key: 'quality', module: 'quality-control' },
      { key: 'it', module: 'it' },
    ],
  },
  {
    key: 'industries',
    rows: 2,
    items: ['government', 'large', 'oil', 'pension', 'international', 'sme'].map((key) => ({ key })),
  },
  {
    key: 'products',
    rows: 3,
    items: [
      { key: 'cloud', page: 'cloud' },
      { key: 'bpms' },
      { key: 'bi' },
      { key: 'ai' },
      { key: 'rb' },
      { key: 'dashboard' },
      { key: 'eform' },
      { key: 'ar' },
    ],
  },
];
