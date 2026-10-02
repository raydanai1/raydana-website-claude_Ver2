/**
 * Subsystem icons in the Figma pastel-hexagon style (cards in 2:19265, hero icon 164:1311).
 * Finance subsystems use the original Figma exports; the others draw a line glyph
 * (24×24, stroke) on the same hexagon, in one of the Figma pastel colour pairs.
 */

/** Hexagon «Polygon 12» on the 74×74 Figma icon canvas. */
export const hexPath =
  'M32.9469 2.28112C35.3918 0.869559 38.4041 0.86956 40.849 2.28112L64.9015 16.1679C67.3464 17.5794 68.8525 20.1881 68.8525 23.0112V50.7847C68.8525 53.6078 67.3464 56.2165 64.9015 57.6281L40.849 71.5148C38.4041 72.9264 35.3918 72.9264 32.9469 71.5148L8.89441 57.6281C6.44951 56.2165 4.94339 53.6078 4.94339 50.7847V23.0112C4.94339 20.1881 6.44951 17.5794 8.89441 16.1679L32.9469 2.28112Z';

/** Figma pastel pairs (hexagon fill, glyph colour); glyph colours of the lightest pairs deepened for thin strokes. */
export const pastels = [
  { bg: '#EDECFB', fg: '#958EFE' }, // violet
  { bg: '#F9F0E0', fg: '#E0A949' }, // sand
  { bg: '#F1DAF9', fg: '#CA51F2' }, // orchid
  { bg: '#F2FCD0', fg: '#A9B01C' }, // lime
  { bg: '#FFF0F9', fg: '#EE76C2' }, // pink
  { bg: '#E7F5F6', fg: '#3FB3C0' }, // teal
  { bg: '#FCF1C2', fg: '#D9AE1E' }, // yellow
] as const;

/** Original Figma icons (hexagon + glyph in one file), keyed by subsystem id. */
const figmaIcons: Record<string, string> = Object.fromEntries(
  [
    'general-accounting',
    'financial-management',
    'treasury',
    'assets',
    'consolidated-accounting',
    'cost-accounting',
    'budget-credits',
    'revenue',
  ].map((id) => [id, `/images/modules/icons/${id}.svg`]),
);

/** Line glyphs (24×24 viewBox, drawn with stroke). */
const glyphs = {
  sigma: 'M18 7V4H6l6 8-6 8h12v-3',
  network: 'M9 3h6v5H9zM3 16h6v5H3zM15 16h6v5h-6zM12 8v4M6 16v-2h12v2',
  idCard: 'M3 5h18v14H3zM9 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2M15 9h3M15 13h3',
  fileUser: 'M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8zM14 3v5h5M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8.5 18c.6-1.3 1.9-2 3.5-2s2.9.7 3.5 2',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M12 7v5l3 2',
  calendar: 'M4 6h16v15H4zM4 10h16M8 3v4M16 3v4M9 15l2 2 4-4',
  banknote: 'M2 7h20v10H2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 12h.01M18 12h.01',
  userCheck: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 21c0-3.5 3-6 7-6 1.5 0 2.8.3 3.9.9M16 19l2 2 4-4',
  userPlus: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 21c0-3.5 3-6 7-6s7 2.5 7 6M19 8v6M16 11h6',
  heart: 'M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 0 0-7.1 7.1L12 21.1l8.4-8.4a5 5 0 0 0 0-7.1',
  cap: 'M22 10 12 5 2 10l10 5zM6 12v5c3 2.5 9 2.5 12 0v-5M22 10v6',
  star: 'M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z',
  shieldCheck: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10M9 12l2 2 4-4',
  wrench: 'M14.7 6.3a4 4 0 0 0 5.4 5.4l-9.4 9.4a2.1 2.1 0 0 1-3-3l9.4-9.4a4 4 0 0 0-5.4-5.4l3 3z',
  cpu: 'M6 6h12v12H6zM9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4',
  inbox: 'M22 12h-6l-2 3h-4l-2-3H2M5.5 5h13L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z',
  mail: 'M3 5h18v14H3zM3 7l9 6 9-6',
  message: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 9h8M8 13h5',
  package: 'M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8M7.5 5.5l9 5',
  gantt: 'M3 3v18h18M7 7h7M10 11h8M8 15h6',
  layers: 'M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  gauge: 'M12 14l4-4M3.3 19a10 10 0 1 1 17.4 0M12 14h.01',
  activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
  flask: 'M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7 15h10',
  cart: 'M3 3h2l2.4 12.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H6M9 21h.01M18 21h.01',
  badgeCheck: 'M12 2l2.4 1.8 3-.2.9 2.9 2.5 1.7-.9 2.8.9 2.8-2.5 1.7-.9 2.9-3-.2L12 22l-2.4-1.8-3 .2-.9-2.9-2.5-1.7.9-2.8-.9-2.8 2.5-1.7.9-2.9 3 .2zM9 12l2 2 4-4',
  receipt: 'M5 2v20l3-2 2 2 2-2 2 2 2-2 3 2V2l-3 2-2-2-2 2-2-2-2 2zM9 8h6M9 12h6M9 16h4',
  globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 21c0-3.5 3-6 7-6s7 2.5 7 6M16 3.1a4 4 0 0 1 0 7.8M22 21c0-3-1.8-5.3-4.5-6',
  clipboard: 'M9 4H6a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3M9 3h6v3H9zM9 11h6M9 15h6',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16M21 21l-4.3-4.3M8 11l2 2 4-4',
  bag: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0',
  fileText: 'M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8zM14 3v5h5M9 13h6M9 17h6M9 9h1',
  truck: 'M2 6h12v11H2zM14 9h4l4 4v4h-8M6.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M17.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4',
  warehouse: 'M22 8.4V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.4a2 2 0 0 1 1.2-1.8l8-3.4a2 2 0 0 1 1.6 0l8 3.4A2 2 0 0 1 22 8.4M6 21V12h12v9M6 15h12M6 18h12',
  chart: 'M3 3v18h18M8 17V11M13 17V7M18 17v-4',
  coins: 'M3 8a6 3 0 1 0 12 0 6 3 0 1 0-12 0M3 8v4c0 1.7 2.7 3 6 3s6-1.3 6-3V8M15 11.2c3.3.2 6 1.4 6 2.8v4c0 1.7-2.7 3-6 3s-6-1.3-6-3',
} as const;

type Glyph = keyof typeof glyphs;

/** Subsystem id → glyph. */
const subsystemGlyphs: Record<string, Glyph> = {
  // Human resources
  'formula-tables': 'sigma',
  'organization-structure': 'network',
  personnel: 'idCard',
  'personnel-administration': 'fileUser',
  attendance: 'clock',
  'leave-missions': 'calendar',
  payroll: 'banknote',
  'employee-self-service': 'userCheck',
  recruitment: 'userPlus',
  'employee-welfare': 'heart',
  training: 'cap',
  evaluation: 'star',
  // Production planning
  'materials-planning': 'package',
  'operations-planning': 'gantt',
  'product-engineering': 'layers',
  'production-capacity': 'gauge',
  'production-control': 'activity',
  'product-development': 'flask',
  // Purchasing
  procurement: 'cart',
  'supplier-evaluation': 'badgeCheck',
  'purchase-accounting': 'receipt',
  imports: 'globe',
  'business-partners': 'users',
  // Maintenance
  'preventive-maintenance': 'shieldCheck',
  'emergency-repairs': 'wrench',
  'equipment-specifications': 'cpu',
  // Quality control
  'quality-test-design': 'clipboard',
  'quality-inspection': 'search',
  'material-product-quality': 'badgeCheck',
  // Sales
  'sales-orders': 'bag',
  'sales-accounting': 'fileText',
  exports: 'truck',
  // Warehouse
  'quantitative-warehouse': 'warehouse',
  'inventory-control': 'chart',
  'warehouse-accounting': 'coins',
  // Office automation
  'office-inbox': 'inbox',
  correspondence: 'mail',
  'internal-messages': 'message',
};

export type SubsystemIcon = { src: string } | { glyph: string; bg: string; fg: string };

/** Icon of a subsystem; `order` (1-based) picks the pastel so neighbouring cards differ. */
export function subsystemIcon(id: string, order: number): SubsystemIcon {
  if (figmaIcons[id]) return { src: figmaIcons[id] };
  const { bg, fg } = pastels[(order - 1) % pastels.length];
  return { glyph: glyphs[subsystemGlyphs[id] ?? 'layers'], bg, fg };
}
