/**
 * Homepage structure (Figma file esbwi68Qf1BhHNaNeK6vhV, HomePage frame 2:19786, 1440×8174).
 * Text lives in src/i18n/<lang>.json — every `key` points into those files.
 * Coordinates marked "stage" are desktop positions measured from Figma; they are only used ≥1280px.
 */

const img = (path: string) => `/images/home/${path}`;

/**
 * "Trusted by" strip (Figma 2068:3926): 96×96 tiles, logo image + translatable caption.
 * img = [x, y, w, h] inside the tile; caption top / size / colour as in Figma; nastaliq = calligraphic caption.
 * Order = visual order from the reading start (Persian: right to left).
 */
export const trustedLogos = [
  { key: 'razavi', src: img('logos/razavi.webp'), img: [24.1, 4.15, 48.2, 48.2], caption: { top: 54.85, size: 16.8, color: '#1f0665', nastaliq: true } },
  { key: 'tehranRefinery', src: img('logos/tehran-refinery.webp'), img: [17.45, 4.99, 63.16, 63.16], caption: { top: 71.46, size: 9.97, color: '#0b518c' } },
  { key: 'foreignMinistry', src: img('logos/foreign-ministry.webp'), img: [8.2, 6.65, 79.66, 84.05] },
  { key: 'mint', src: img('logos/mint.webp'), img: [24.93, 5.82, 46.54, 46.54], caption: { top: 52.35, size: 14.96, color: '#160150', nastaliq: true } },
  { key: 'offsetPress', src: img('logos/offset.webp'), img: [10.8, 5.82, 74.24, 85.27] },
  { key: 'tabrizRefinery', src: img('logos/tabriz-refinery.webp'), img: [20.77, 7.48, 55.68, 55.68], caption: { top: 72.3, size: 9.97, color: '#0b518c' } },
  { key: 'bankPension', src: img('logos/bank-pension.webp'), img: [11.63, -0.83, 66.95, 66.95], blend: 'multiply', caption: { top: 66.12, size: 9.97, color: '#0b518c' } },
  { key: 'presidencyFull', src: img('logos/presidency-emblem.svg'), img: [27.89, 8.31, 38.9, 38.23], caption: { top: 47, size: 19.94, color: '#000000', nastaliq: true, country: true }, captionKey: 'presidency' },
  { key: 'steelPension', src: img('logos/steel-pension.webp'), img: [20, 5, 57, 57], blend: 'multiply', caption: { top: 69, size: 12, color: '#2b3a7f' } },
  { key: 'hagsan', src: img('logos/hagsan.webp'), img: [4.5, 12, 87, 72] },
] as const;

/**
 * Challenge chips (Figma 2065:3808). x/y = chip centre on the stage (origin 46,1003; 1354×360),
 * w = chip width, rotate = visual tilt in degrees. `oval` + `x` = icons drawn in two layers.
 */
export const challenges = [
  { key: 'islands', icon: 'islands', x: 428, y: 35, w: 245, rotate: -0.1 },
  { key: 'excel', icon: 'excel', x: 192, y: 84, w: 320, rotate: -5.5 },
  { key: 'integration', icon: 'integration', x: 544, y: 89, w: 320, rotate: 8.2 },
  { key: 'waste', icon: 'waste-oval', iconX: 'waste-x', x: 759, y: 27, w: 176, rotate: -9.9 },
  { key: 'humanError', icon: 'human-error', x: 888, y: 125, w: 277, rotate: -9.9 },
  { key: 'visibility', icon: 'visibility', x: 1004, y: 49, w: 320, rotate: 3.4 },
  { key: 'lateReports', icon: 'late-reports', x: 1230, y: 100, w: 243, rotate: -5.2 },
  { key: 'cost', icon: 'cost', x: 141, y: 152, w: 273, rotate: 10.5 },
  { key: 'forms', icon: 'forms', iconX: 'forms-x', x: 552, y: 160, w: 318, rotate: -3.3 },
  { key: 'slowDecision', icon: 'slow-decision', x: 843, y: 187, w: 278, rotate: 2.2 },
  { key: 'slowReports', icon: 'slow-reports', x: 1174, y: 160, w: 274, rotate: 0 },
  { key: 'mismatch', icon: 'mismatch', x: 236, y: 203, w: 368, rotate: 9.4 },
  { key: 'siloed', icon: 'siloed', x: 600, y: 238, w: 281, rotate: 4.3 },
  { key: 'scattered', icon: 'scattered-oval', iconX: 'scattered-x', x: 1077, y: 243, w: 417, rotate: 4.1 },
  { key: 'finance', icon: 'finance', x: 270, y: 279, w: 187, rotate: 5.8 },
  { key: 'planning', icon: 'planning', iconX: 'planning-x', x: 545, y: 308, w: 365, rotate: -1.2 },
  { key: 'nonIntegrated', icon: 'non-integrated', iconX: 'planning-x', x: 842, y: 318, w: 281, rotate: -7.9 },
] as const;

/**
 * "How CYBER ERP transforms your organization" cards (Figma 2143:3880) around the cube (2143:3813).
 * Stage origin 95,1677; 1193×512. x/y/w = outer glass card; `text` = accent colour of the description.
 */
export const transformCards = [
  { key: 'integrated', icon: img('transform/icon-integrated.svg'), x: 757, y: 1, w: 427 },
  { key: 'process', icon: img('transform/icon-process.svg'), x: 0, y: 0, w: 475 },
  { key: 'custom', icon: img('transform/icon-custom.svg'), x: 799, y: 156, w: 394 },
  { key: 'growth', icon: img('transform/icon-growth.svg'), x: 51, y: 165, w: 368 },
  { key: 'web', icon: img('transform/icon-web.svg'), x: 815, y: 344, w: 351 },
  { key: 'cloud', icon: img('transform/icon-cloud.svg'), x: 106, y: 356, w: 321 },
] as const;

/** Business-solution modules (Figma 2065:3905, 3×3, reading order); `module` = linked module page id. */
export const modules = [
  { key: 'warehouse', module: 'warehouse', icon: img('modules/warehouse.svg') },
  { key: 'finance', module: 'finance', icon: img('modules/finance-hex.svg'), glyph: img('modules/finance-glyph.svg') },
  { key: 'hr', module: 'hr', icon: img('modules/hr.svg') },
  { key: 'maintenance', module: 'maintenance', icon: img('modules/maintenance.svg') },
  { key: 'purchase', module: 'purchasing', icon: img('modules/purchase.svg') },
  { key: 'production', module: 'production-planning', icon: img('modules/production.svg') },
  { key: 'sales', module: 'sales', icon: img('modules/sales.svg') },
  { key: 'quality', module: 'quality-control', icon: img('modules/quality.svg') },
  { key: 'accounting', module: 'accounting', icon: img('modules/accounting.svg') },
] as const;

/** Complementary tools list (Figma 2:28445, 2 columns, reading order). */
export const tools = [
  { key: 'bi', badge: 'BI', icon: img('tools/badge-bi.svg') },
  { key: 'bpms', badge: 'BPMS', icon: img('tools/badge-bpms.svg'), small: true },
  { key: 'ai', badge: 'AI', icon: img('tools/badge-ai.svg') },
  { key: 'eform', badge: 'e-form', icon: img('tools/badge-eform.svg'), small: true },
  { key: 'rb', badge: 'RB', icon: img('tools/badge-rb.svg') },
  { key: 'ar', badge: 'AR', icon: img('tools/badge-ar.svg') },
] as const;

/**
 * Hexagon orbit (Figma 2:26955, 398×398 box). box = outer bounding box (x, y, size), hex = rotated
 * hexagon size, inset = hexagon inset inside its square (percent), rotate = hexagon rotation,
 * label rotation and size for the tool abbreviation.
 */
export const orbitHexes = [
  { key: 'bi', src: img('tools/hex-bi.svg'), box: [166.96, 0, 62.08], hex: 53.28, inset: [1.94, 6.7], rotate: -10.48, label: 'BI', labelRotate: -7.24, labelSize: 18.7 },
  { key: 'eform', src: img('tools/hex-eform.svg'), box: [299.57, 85.64, 92.83], hex: 70.88, inset: [1.46, 6.7], rotate: -22.82, label: 'E-form', labelRotate: -21.87, labelSize: 13.3 },
  { key: 'bpms', src: img('tools/hex-bpms.svg'), box: [0, 97.76, 80.77], hex: 63.35, inset: [0.81, 6.7], rotate: 19.36, label: 'BPMS', labelRotate: 24.43, labelSize: 13.3 },
  { key: 'ai', src: img('tools/hex-ai.svg'), box: [156.05, 240.02, 66.83], hex: 47.42, inset: [1.09, 6.7], rotate: -49.79, label: 'AI', labelRotate: -25.59, labelSize: 18.7 },
  { key: 'rb', src: img('tools/hex-rb.svg'), box: [291.25, 276.57, 75.77], hex: 57.24, inset: [1.44, 6.7], rotate: 24.38, label: 'RB', labelRotate: 24.72, labelSize: 16.7 },
  { key: 'ar', src: img('tools/hex-ar.svg'), box: [21.79, 278.95, 62.7], hex: 47.42, inset: [1.09, 6.7], rotate: -24.2, label: 'AR', labelRotate: -20.54, labelSize: 16 },
  { key: 'dot1', src: img('tools/hex-small-yellow.svg'), box: [166.84, 355.68, 44.06], hex: 31.5, inset: [1.64, 6.7], rotate: -53.47 },
  { key: 'dot2', src: img('tools/hex-small-blue.svg'), box: [110.03, 214.91, 42.11], hex: 31.5, inset: [1.64, 6.7], rotate: 154.01 },
  { key: 'dot3', src: img('tools/hex-small-purple.svg'), box: [176.7, 120.76, 42.4], hex: 31.01, inset: [1.66, 6.7], rotate: -30.22 },
] as const;

/** Industry solution cards (Figma 2:28206, 3 columns, reading order). */
export const industries = [
  { key: 'government', icon: img('industries/government.svg') },
  { key: 'large', icon: img('industries/large.svg') },
  { key: 'oil', icon: img('industries/oil.svg') },
  { key: 'pension', icon: img('industries/pension.svg'), size: 80 },
  { key: 'international', icon: img('industries/international.svg') },
  { key: 'sme', icon: img('industries/sme.svg') },
] as const;

/**
 * Implementation steps (Figma 2067:3915). Stage origin 118,5338; 1255×760:
 * badge = number badge centre, dot = track dot centre, label = label centre.
 */
export const processSteps = [
  { key: 's1', n: 1, badge: [880, 76], dot: [880, 147], label: [889, 203] },
  { key: 's2', n: 2, badge: [595, 215], dot: [595, 145], label: [595, 90] },
  { key: 's3', n: 3, badge: [308, 75], dot: [308, 147], label: [308, 200] },
  { key: 's4', n: 4, badge: [308, 317], dot: [308, 389], label: [308, 442] },
  { key: 's5', n: 5, badge: [589, 461], dot: [588, 390], label: [588, 329] },
  { key: 's6', n: 6, badge: [880, 317], dot: [880, 389], label: [879, 444] },
  { key: 's7', n: 7, badge: [884, 561], dot: [883, 631], label: [889, 695] },
  { key: 's8', n: 8, badge: [596, 700], dot: [596, 629], label: [595, 573] },
  { key: 's9', n: 9, badge: [320, 558], dot: [320, 631], label: [314, 695] },
] as const;

/**
 * "Proud to work with you" logo wall (Figma 4001:4142), rebuilt in HTML so captions can be translated.
 * Stage origin 23,6302; 1382×680. card = [x, y, w, h], inner = optional grey panel, logo = [x, y, w, h],
 * caption = text key + centre x / top y / width, blend = CSS mix-blend-mode of the logo.
 */
type Box = readonly [number, number, number, number];
interface WallTile {
  key: string;
  card?: Box;
  inner?: Box;
  logo?: { src: string; box: Box; blend?: 'multiply' | 'darken'; crop?: true };
  caption?: { key: string; x: number; y: number; w: number; size: number; color: string; weight?: 500 | 700; nastaliq?: boolean; country?: true };
  /** Small shadow variant used by one card. */
  soft?: true;
}
const o = (x: number, y: number) => [x - 23, y - 6302] as const;
const box = (x: number, y: number, w: number, h: number): Box => [...o(x, y), w, h] as const;
export const logoWall: WallTile[] = [
  { key: 'tehranRefinery', card: box(298, 6685, 133, 167), inner: box(309, 6699, 112, 138), logo: { src: img('customers/tehran-refinery.webp'), box: box(327, 6717, 76, 76) }, caption: { key: 'tehranRefinery', x: 364.5 - 23, y: 6797 - 6302, w: 120, size: 12, color: '#003080', weight: 500 } },
  { key: 'foreignMinistry', card: box(801, 6577, 155, 184.5), inner: box(812, 6590, 134, 159), logo: { src: img('customers/foreign-ministry.webp'), box: box(823, 6617, 108.3, 114.3) } },
  { key: 'mint', card: box(971, 6667.2, 155, 184.5), inner: box(981, 6679, 134, 159), logo: { src: img('customers/mint.webp'), box: box(1013.55, 6687, 66.5, 66.5) }, caption: { key: 'mint', x: 1046.65 - 23, y: 6758 - 6302, w: 120, size: 22, color: '#160150', nastaliq: true } },
  { key: 'hagsan', card: box(639, 6754, 132, 157), soft: true, logo: { src: img('customers/hagsan.webp'), box: box(651, 6788, 109, 91) } },
  { key: 'tandis', card: box(146, 6508, 123, 141), logo: { src: img('customers/tandis.webp'), box: box(163, 6540, 90, 75), blend: 'darken' } },
  { key: 'tecvest', card: box(1149, 6554, 117, 139), logo: { src: img('customers/tecvest.webp'), box: box(1163.86, 6599.7, 86, 23.4), blend: 'darken' } },
  { key: 'nitco', card: box(824, 6428, 109, 129), logo: { src: img('customers/nitco.webp'), box: box(838, 6440, 81, 81) } },
  { key: 'sakkook', card: box(479, 6437, 109, 129), logo: { src: img('customers/sakkook.webp'), box: box(489, 6460, 86, 86), blend: 'multiply' } },
  { key: 'ikap', card: box(157, 6669, 102, 122), logo: { src: img('customers/ikap.webp'), box: box(175, 6692, 67, 66) } },
  { key: 'other', card: box(1288, 6607, 117, 138), logo: { src: img('customers/flower.webp'), box: box(1300, 6624, 90, 90), blend: 'darken' } },
  { key: 'other', card: box(23, 6594, 109, 129), logo: { src: img('customers/shipping.webp'), box: box(32, 6607, 92, 92) } },
  { key: 'offsetPress', card: box(643, 6372, 123, 159), logo: { src: img('customers/offset.webp'), box: box(656, 6404, 89, 103) } },
  { key: 'international', card: box(471, 6791, 132, 157), logo: { src: img('customers/international.webp'), box: box(487, 6844, 101, 68.5) }, caption: { key: 'international', x: 558.5 - 23, y: 6810 - 6302, w: 90, size: 13, color: '#151c30', weight: 700 } },
  { key: 'tabrizRefinery', card: box(1140, 6711, 135, 160), logo: { src: img('customers/tabriz-refinery.webp'), box: box(1174, 6736, 67, 67) }, caption: { key: 'tabrizRefinery', x: 1207.5 - 23, y: 6814 - 6302, w: 125, size: 12, color: '#25224f', weight: 500 } },
  { key: 'bankPension', card: box(286, 6480, 156, 185), inner: box(297, 6492, 134, 159), logo: { src: img('customers/bank-pension.webp'), box: box(326, 6504, 80.6, 80.6), blend: 'multiply' }, caption: { key: 'bankPension', x: 365 - 23, y: 6587 - 6302, w: 120, size: 12, color: '#005087', weight: 700 } },
  { key: 'other', card: box(813, 6791, 132, 157), logo: { src: img('customers/kimia.webp'), box: box(833, 6827, 91, 86), blend: 'darken' } },
  { key: 'steelPension', card: box(983, 6495, 132, 154), inner: box(994, 6507, 109, 129), logo: { src: img('customers/steel-pension.webp'), box: box(1004, 6510, 88.9, 88.9), blend: 'multiply' }, caption: { key: 'steelPension', x: 1047.5 - 23, y: 6595 - 6302, w: 100, size: 12, color: '#2b3a7f', weight: 700 } },
  { key: 'presidencyFull', card: box(627, 6550.9, 155, 184.5), inner: box(638, 6563, 134, 159), logo: { src: img('customers/presidency-emblem.svg'), box: box(679.39, 6588, 52.75, 51.84) }, caption: { key: 'presidency', x: 705.3 - 23, y: 6643 - 6302, w: 130, size: 26, color: '#000000', nastaliq: true, country: true } },
  { key: 'razavi', card: box(457, 6584.55, 155, 184.5), inner: box(468, 6598, 134, 159), logo: { src: img('customers/razavi.webp'), box: box(480, 6592, 109, 109) }, caption: { key: 'razavi', x: 534.5 - 23, y: 6684 - 6302, w: 120, size: 20, color: '#1f0665', nastaliq: true } },
];

/** Pale decorative squares behind the logo wall: [x, y, w, h, opacity]. */
export const wallSquares = [
  [1317, 6775, 74, 88, 0.6], [67, 6421, 74, 88, 0.79], [195, 6852, 74, 88, 0.79], [1006, 6877, 74, 88, 0.6],
  [1223, 6382, 61, 73, 0.79], [1329, 6475, 61, 73, 0.6], [1247, 6889, 74, 88, 0.6], [975, 6340, 70, 83, 0.79],
  [1121, 6408, 57, 67, 0.79], [1126, 6915, 49, 58, 0.6], [350, 6921, 49, 58, 0.79], [400, 6382, 55, 65, 0.79],
  [109, 6302, 42, 50, 0.79], [1154, 6309, 42, 50, 0.79], [234, 6363, 64, 76, 0.79], [67, 6829, 65, 77, 0.79],
].map(([x, y, w, h, op]) => ({ x: x - 23, y: y - 6302, w, h, op }));

/** Knowledge-base cards (Figma 2067:3922): photo per category, linked to its category page. */
export const knowledgeCards = {
  news: img('news/news.webp'), // 2053:3700
  articles: img('news/articles.webp'), // 2053:3699
  events: img('news/events.webp'), // 2053:3698
} as const;

// The «standards» link (Figma) is hidden until that page exists.
export const footerLinks = ['products', 'services', 'industries', 'about', 'contact', 'knowledge'] as const;
export const footerCerts = ['knowledgeBased', 'authenticity', 'afta', 'technical', 'guild'] as const;

/** Footer contact numbers (Figma ver4 footer on the HomePage, 4013:4859 / 4013:4860), Tehran area code 021. */
export const footerPhones = ['88765311', '88548676'] as const;
export const footerFax = '88548676';

/** Testimonials — no longer on the homepage (removed in the v3 design) but still shown on the About page. */
export const testimonials = [{ key: 'presidency', logo: '/images/testimonials/logo-presidency.webp' }] as const;
