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

/** Customization process flow; `icon` = small illustration at the start of the step label. */
export const customizationSteps = [
  { key: 'prototype', icon: img('flow-icon-1.webp') },
  { key: 'integration', icon: img('flow-icon-2.webp') },
  { key: 'docs', icon: img('flow-icon-3.webp') },
  { key: 'test', icon: undefined },
] as const;

/**
 * Support hexagon rings. x/y = top-left inside the 603×605 desktop cluster (start-relative,
 * measured from Figma 4001:4156), rotate = ring tilt in degrees.
 */
export const supportHexes = [
  { key: 'updates', color: '#98ed71', x: 215, y: 4, rotate: 0 },
  { key: 'stability', color: '#7b72ff', x: 378, y: 83, rotate: 18 },
  { key: 'support247', color: '#84cfd8', x: 110, y: 155, rotate: -12 },
  { key: 'periodicTraining', color: '#80d3b6', x: 265, y: 266, rotate: 10 },
  { key: 'monitoring', color: '#b672ff', x: 429, y: 339, rotate: -8 },
  { key: 'newFeatures', color: '#f9c167', x: 167, y: 431, rotate: 14 },
] as const;

/** Deployment timeline steps; steps 4–7 share one description in Figma (`stepText`). */
export const deploymentSteps = [
  { key: 'prelaunch', text: false, compact: true },
  { key: 'asis', text: 'own', latin: true },
  { key: 'tobe', text: 'own', latin: true },
  { key: 'server', text: 'shared' },
  { key: 'training', text: 'shared' },
  { key: 'consulting', text: 'shared' },
  { key: 'implementation', text: 'shared' },
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
