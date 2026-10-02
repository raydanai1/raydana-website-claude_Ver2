/**
 * Cloud page content structure. Text lives under `cloud` in src/i18n/{fa,en}.json —
 * the `key` fields below point into those files. Layout values come from the Figma
 * "cloud" frame (node 5:29104).
 */

const img = (path: string) => `/images/cloud/page/${path}`;

export const cloudImages = {
  heroServer: img('hero-server.webp'), // 5:33357
  heroHex: img('hero-hex.webp'), // 102:11990
  heroGlow: img('hero-glow.svg'), // 102:11999
  bandPhoto: img('band-photo.webp'), // 17:33668 "uiuiu 1"
  bandArc: img('band-arc.svg'), // 17:33669 and its four copies
  bandStrip: img('band-strip.webp'), // 23:526
  outlineCloud: img('outline-cloud.svg'), // 24:490 …
  dots: img('dots-206.svg'), // 24:528 …
  tabArrowWhite: img('tab-arrow-white.svg'),
  tabArrowBlue: img('tab-arrow-blue.svg'),
  dotStart: img('dot.svg'), // 5:33258 (first column)
  dotEnd: img('dot-2.svg'), // 5:33273 (second column)
  demoPhoto: img('demo-photo.webp'), // 17:33534 "image 43"
  demoHex: img('demo-hex.svg'), // 5:32850
  demoHexIcon: img('demo-hex-icon.svg'), // 5:32852
  selectChevron: img('select-chevron.svg'),
  submitArrow: img('submit-arrow.svg'),
  faqPlus: img('faq-plus.svg'),
};

/**
 * Benefit cards in Figma order: index i pairs with cloud.benefits.items[i].
 * Odd items sit in the start column, even items in the end column. Each card keeps the
 * glass opacity, inner radius and check icon of its Figma group.
 */
export const cloudBenefits = [
  { check: img('check-1.svg'), size: 29.66, glass: 0.22, radius: 12 }, // 16:33401
  { check: img('check-3.svg'), size: 31.92, glass: 0.33, radius: 10 }, // 16:33397
  { check: img('check-6.svg'), size: 29.27, glass: 0.22, radius: 10 }, // 16:33400
  { check: img('check-2.svg'), size: 30.18, glass: 0.44, radius: 10 }, // 16:33399
  { check: img('check-4.svg'), size: 27.94, glass: 0.22, radius: 12 }, // 16:33398
  { check: img('check-5.svg'), size: 27.94, glass: 0.33, radius: 12 }, // 16:33402
] as const;

/** Feature tabs, start → end. */
export const cloudTabs = ['servers', 'storage', 'backup', 'services', 'desktop', 'security', 'network'] as const;

/**
 * Decorative outline clouds and dotted drop lines at the sides of the benefits band
 * (Figma 24:490 … / 24:528 …). Positions are in px within the 1440-wide band (top = band top).
 */
export const bandClouds = [
  { x: 1262, y: 221, w: 78 },
  { x: 1188, y: 269, w: 60 },
  { x: 1126, y: 185, w: 51 },
  { x: 242, y: 182, w: 59 },
  { x: 183, y: 227, w: 51 },
  { x: 125, y: 133, w: 66 },
  { x: 57, y: 254, w: 51 },
] as const;

export const bandLines = [
  { x: 1299.8, y: 287, h: 153.9 },
  { x: 1149.8, y: 230, h: 179.9 },
  { x: 1217.8, y: 320, h: 179.9 },
  { x: 267.8, y: 236, h: 205.7 },
  { x: 204.8, y: 269, h: 205.7 },
  { x: 152.8, y: 189, h: 205.7 },
  { x: 84.8, y: 301, h: 205.7 },
] as const;
