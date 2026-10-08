/**
 * Services page content structure. Text lives under `services` in src/i18n/{fa,en}.json —
 * the `key` fields below point into those files. Layout values come from the Figma
 * "services" frame (node 2:9421).
 */

const img = (path: string) => `/images/services/${path}`;

/** Section anchors on the page. */
export const serviceSections = {
  training: 'training',
  customization: 'customization',
  support: 'support',
  deployment: 'deployment',
} as const;

/**
 * Service cards, in Figma reading order (start → end, row by row).
 * `section` = anchor of the matching section on this page; cards without one are not links.
 * `hex` = the whole hexagon badge as one image; otherwise `poly` (tinted hexagon) + `icon`.
 */
export const serviceCards = [
  { key: 'consulting', poly: img('card-poly-consulting.svg'), icon: img('card-icon-consulting.svg') },
  { key: 'feasibility', poly: img('card-poly-feasibility.svg'), icon: img('card-icon-feasibility.svg') },
  { key: 'training', hex: img('card-hex-training.svg'), section: serviceSections.training },
  { key: 'installation', poly: img('card-poly-installation.svg'), icon: img('card-icon-installation.svg'), section: serviceSections.deployment },
  { key: 'development', poly: img('card-poly-development.svg'), icon: img('card-icon-development.svg') },
  { key: 'customization', poly: img('card-poly-customization.svg'), icon: img('card-icon-customization.svg'), section: serviceSections.customization },
  { key: 'warranty', hex: img('card-hex-warranty.svg') },
  { key: 'support', poly: img('card-poly-support.svg'), icon: img('card-icon-support.svg'), section: serviceSections.support },
] as const;

/** Customization benefits (bullet list). */
export const customizationBenefits = ['experience', 'fit', 'improve', 'speed', 'integrated'] as const;

/**
 * Customization process flow; `icon` = small illustration at the start of the step label.
 * Desktop geometry from Figma ver4 "diagram-right" 4001:4147 (612.7 wide, 995 high), in px measured
 * from the start edge: `label`/`desc` = tilted label and description box (`gap` = space above it,
 * `start`/`width` = inline position, `rotate` = label tilt), `line` = connector drawn in that gap
 * ([start x at top, start x at bottom]), `dot` = x of the small green hexagon on the box's top edge.
 */
export const customizationSteps = [
  {
    key: 'prototype',
    icon: img('flow-icon-1.webp'),
    iconSize: 44,
    label: { gap: 63.8, start: 64.9, width: 447.5, rotate: 1.22, line: [317, 317] },
    desc: { gap: 18.2, start: 28.5, width: 584.2, minH: 86, line: [320.6, 324.7], dot: 325 },
  },
  {
    key: 'integration',
    icon: img('flow-icon-2.webp'),
    iconSize: 37,
    label: { gap: 58.8, start: 94, width: 395.9, rotate: 1.38, line: [322.6, 299.2] },
    desc: { gap: 20.2, start: 0, width: 578.1, minH: 83, line: [289, 295.2], dot: 297.6 },
  },
  {
    key: 'docs',
    icon: img('flow-icon-3.webp'),
    iconSize: 37,
    label: { gap: 59.8, start: 172, width: 238.4, rotate: 2.3, line: [277.5, 301.3] },
    desc: { gap: 23.2, start: 12.2, width: 578.1, minH: 105, line: [291.2, 286.9], dot: 286.4 },
  },
  {
    key: 'test',
    icon: undefined,
    iconSize: 0,
    label: { gap: 38.8, start: 196.5, width: 238.4, rotate: -2.18, line: [321.6, 317.4] },
    desc: { gap: 25.2, start: 12.2, width: 578.1, minH: 100, line: [321.2, 335.9], dot: undefined },
  },
] as const;

/** Width of the desktop customization diagram in Figma (px); the geometry above scales with it. */
export const customizationDiagramWidth = 612.7;

/**
 * Support hexagon rings. x/y = top-left inside the 603×605 desktop cluster (start-relative,
 * measured from Figma 4001:4156), rotate = ring tilt in degrees.
 */
export const supportHexes = [
  { key: 'updates', color: '#98ed71', x: 216, y: 0, rotate: 0 },
  { key: 'stability', color: '#7b72ff', x: 375, y: 90, rotate: 18 },
  { key: 'support247', color: '#84cfd8', x: 113, y: 151, rotate: -12 },
  { key: 'periodicTraining', color: '#80d3b6', x: 264, y: 260, rotate: 10 },
  { key: 'monitoring', color: '#b672ff', x: 428, y: 346, rotate: -8 },
  { key: 'newFeatures', color: '#f9c167', x: 165, y: 432, rotate: 14 },
] as const;

/**
 * Deployment timeline steps; steps 4–7 share one description in Figma (`stepText`).
 * Desktop rhythm from Figma ver4 (4001:4158): `gap` = space above the row (a row is as tall as its card or
 * its 96px number badge, whichever is taller), `minH` = card height (px).
 */
export const deploymentSteps = [
  { key: 'prelaunch', text: false, compact: true, gap: 0, minH: 65 },
  { key: 'asis', text: 'own', latin: true, gap: 24, minH: 172 },
  { key: 'tobe', text: 'own', latin: true, gap: 6, minH: 147 },
  { key: 'server', text: 'shared', gap: 10, minH: 154 },
  { key: 'training', text: 'shared', gap: 0, minH: 147 },
  { key: 'consulting', text: 'shared', gap: 3, minH: 157 },
  { key: 'implementation', text: 'shared', gap: 33, minH: 157 },
] as const;

export const serviceImages = {
  heroBg: img('hero-bg.webp'),
  heroCube: img('hero-cube.webp'),
  training: img('training.webp'),
  customization: img('customization.webp'),
  deployment: img('deployment.webp'),
  titleBadge: img('title-badge.svg'),
  cardArrow: img('arrow-right.svg'),
  ring: img('ring.svg'),
  check: img('check-hex.svg'),
  timelineDot: img('tl-dot.svg'),
  badgeOuter: img('poly-outer.svg'),
  badgeInner: img('poly-inner.svg'),
  finalRing: img('final-ring.svg'),
  finalFill: img('final-fill.svg'),
};
