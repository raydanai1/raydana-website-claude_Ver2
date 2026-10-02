/**
 * Homepage content structure. Text lives in src/i18n/{fa,en}.json — the `key` fields
 * below point into those files. Positions marked "Figma" are the desktop layout
 * coordinates measured from the HomePage frame (node 2034:4623).
 */

const img = (path: string) => `/images/${path}`;

/** "Trusted by" marquee — logo tiles exported from the Figma Brands strip. */
export const trustedLogos = [
  { key: 'offsetPress', src: img('brands/logo-04.png') },
  { key: 'bankPension', src: img('brands/logo-02.png') },
  { key: 'tabrizRefinery', src: img('brands/logo-03.png') },
  { key: 'mint', src: img('brands/logo-05.png') },
  { key: 'presidency', src: img('brands/logo-01.png') },
  { key: 'foreignMinistry', src: img('brands/logo-06.png') },
  { key: 'razavi', src: img('brands/logo-08.png') },
  { key: 'tehranRefinery', src: img('brands/logo-07.png') },
  { key: 'steelPension', src: img('brands/logo-09.png') },
  /*{ key: 'other', src: img('brands/logo-10.png') },*/
] as const;

/**
 * Challenge chips. x/y = chip centre in the Figma "carts" stage (origin 14,1003; 1421×430),
 * w = chip width, rotate = visual tilt in degrees (desktop ≥1280px only).
 */
export const challenges = [
  { key: 'islands', icon: 'c13', x: 449, y: 32, w: 257, rotate: 0 },
  { key: 'excel', icon: 'c14', x: 202, y: 83, w: 335, rotate: -5.2 },
  { key: 'integration', icon: 'c01', x: 570, y: 88, w: 336, rotate: 7.8 },
  { key: 'waste', icon: 'c19', x: 791, y: 62, w: 151, rotate: -9.4 },
  { key: 'humanError', icon: 'c07', x: 907, y: 117, w: 290, rotate: -9.4 },
  { key: 'visibility', icon: 'c17', x: 1053, y: 49, w: 335, rotate: 3.3 },
  { key: 'lateReports', icon: 'c08', x: 1290, y: 99, w: 255, rotate: -4.9 },
  { key: 'warehouseView', icon: 'c11', x: 129, y: 156, w: 249, rotate: 10 },
  { key: 'forms', icon: 'c06', x: 374, y: 167, w: 222, rotate: 9 },
  { key: 'separate', icon: 'c04', x: 628, y: 165, w: 202, rotate: -6.5 },
  { key: 'slowDecision', icon: 'c16', x: 868, y: 177, w: 263, rotate: 2.1 },
  { key: 'slowReports', icon: 'c03', x: 1200, y: 159, w: 351, rotate: 0 },
  { key: 'mismatch', icon: 'c05', x: 143, y: 241, w: 206, rotate: 6 },
  { key: 'siloed', icon: 'c15', x: 609, y: 239, w: 336, rotate: 4.1 },
  { key: 'scattered', icon: 'c02', x: 1104, y: 245, w: 488, rotate: 3.9 },
  { key: 'finance', icon: 'c09', x: 331, y: 275, w: 230, rotate: -9.4 },
  { key: 'management', icon: 'c12', x: 649, y: 309, w: 228, rotate: -1.1 },
  { key: 'nonIntegrated', icon: 'c18', x: 940, y: 325, w: 180, rotate: -7.5 },
  { key: 'warehouse', icon: 'c10', x: 1294, y: 321, w: 230, rotate: -9.4 },
] as const;

/**
 * "How Cyber ERP transforms your organization" cards around the cube image.
 * x/y/w = outer card box in the Figma stage (origin 87,1676; 1184×492);
 * iconH = icon height, iconTop = icon offset from the inner card's top edge.
 */
export const transformCards = [
  { key: 'integrated', icon: img('solutions/icon-integrated.svg'), iconH: 103, iconTop: -20, x: 747, y: 4, w: 421 },
  { key: 'process', icon: img('solutions/icon-process.svg'), iconH: 99, iconTop: -16, x: 0, y: 3, w: 469 },
  { key: 'custom', icon: img('solutions/icon-custom.svg'), iconH: 61, iconTop: 18, x: 789, y: 157, w: 389, accent: true },
  { key: 'growth', icon: img('solutions/icon-growth.svg'), iconH: 104, iconTop: -21, x: 50, y: 166, w: 364 },
  { key: 'web', icon: img('solutions/icon-web.svg'), iconH: 113, iconTop: -26, x: 804, y: 342, w: 346 },
  { key: 'cloud', icon: img('solutions/icon-cloud.svg'), iconH: 113, iconTop: -31, x: 105, y: 354, w: 317 },
] as const;

/** Business-solution modules (3×3 grid, reading order); `module` = the linked module page id. */
export const modules = [
  { key: 'warehouse', module: 'warehouse', icon: img('modules/m-warehouse.svg') },
  { key: 'finance', module: 'finance', icon: img('modules/m-finance-hex.svg'), glyph: img('modules/m-finance-glyph.svg') },
  { key: 'hr', module: 'hr', icon: img('modules/m-hr.svg') },
  { key: 'maintenance', module: 'maintenance', icon: img('modules/m-maintenance.svg') },
  { key: 'purchase', module: 'purchasing', icon: img('modules/m-purchase.svg') },
  { key: 'production', module: 'production-planning', icon: img('modules/m-production.svg') },
  { key: 'sales', module: 'sales', icon: img('modules/m-sales.svg') },
  { key: 'quality', module: 'quality-control', icon: img('modules/m-quality.svg') },
  { key: 'accounting', module: 'accounting', icon: img('modules/m-accounting.svg') },
] as const;

/** Complementary tools (2-column grid, reading order). */
export const tools = [
  { key: 'bi', badge: 'BI', icon: img('tools/hex-bi.svg') },
  { key: 'bpms', badge: 'BPMS', icon: img('tools/hex-bpms.svg'), small: true },
  { key: 'ai', badge: 'AI', icon: img('tools/hex-ai.svg') },
  { key: 'eform', badge: 'e-form', icon: img('tools/hex-eform.svg'), small: true },
  { key: 'rb', badge: 'RB', icon: img('tools/hex-rb.svg') },
  { key: 'ar', badge: 'AR', icon: img('tools/hex-ar.svg') },
] as const;

/** Industry solution cards (3-column grid, reading order). */
export const industries = [
  { key: 'government', icon: img('industries/i-government.svg') },
  { key: 'large', icon: img('industries/i-large.svg') },
  { key: 'oil', icon: img('industries/i-oil.svg') },
  { key: 'pension', icon: img('industries/i-pension.svg') },
  { key: 'international', icon: img('industries/i-international.svg') },
  { key: 'sme', icon: img('industries/i-sme.svg') },
] as const;

/**
 * Implementation steps. Coordinates are Figma positions relative to the process stage
 * (origin 118,6290; 1255×760): badge = number badge centre, dot = track dot centre,
 * label = label centre, labelAbove = label sits above the track.
 */
export const processSteps = [
  { key: 's1', n: 1, badge: [880, 76], dot: [880, 147], label: [889, 203], labelAbove: false },
  { key: 's2', n: 2, badge: [595, 215], dot: [595, 145], label: [595, 90], labelAbove: true },
  { key: 's3', n: 3, badge: [308, 75], dot: [308, 147], label: [308, 200], labelAbove: false },
  { key: 's4', n: 4, badge: [308, 317], dot: [308, 389], label: [308, 442], labelAbove: false },
  { key: 's5', n: 5, badge: [589, 461], dot: [588, 390], label: [588, 329], labelAbove: true },
  { key: 's6', n: 6, badge: [880, 317], dot: [880, 389], label: [879, 444], labelAbove: false },
  { key: 's7', n: 7, badge: [884, 561], dot: [883, 631], label: [889, 695], labelAbove: false },
  { key: 's8', n: 8, badge: [596, 700], dot: [596, 629], label: [595, 573], labelAbove: true },
  { key: 's9', n: 9, badge: [320, 558], dot: [320, 631], label: [314, 695], labelAbove: false },
] as const;

/** Testimonials. Add more entries (and matching text in the i18n files) to fill the carousel. */
export const testimonials = [{ key: 'presidency', logo: img('testimonials/logo-presidency.png') }] as const;

/** Knowledge-base cards. */
export const knowledgeCards = {
  news: img('news/news.webp'),
  articles: img('news/articles.webp'),
  events: img('news/events.webp'),
} as const;

export const footerLinks = ['products', 'services', 'industries', 'about', 'contact', 'standards', 'knowledge'] as const;
export const footerCerts = ['knowledgeBased', 'rating', 'rating', 'rating', 'rating'] as const;
