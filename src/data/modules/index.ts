/**
 * ERP module and subsystem content. One JSON file per module lives next to this file
 * (src/data/modules/<moduleId>.json); text for both languages sits in each file's `fa` / `en`.
 * Page layouts come from the Figma frames «detail-product-modules» (2:15565) and
 * «detail-product-modules-subsystems» (119:5583).
 */
import type { Locale } from '../../i18n';

type Localized<T> = { fa: T; en: T };

interface Feature {
  tab: string;
  items: string[];
}
interface Faq {
  q: string;
  a: string;
}
interface Extras {
  /** Feature tabs (section hidden until present). */
  features?: Localized<Feature>[];
  /** Questions and answers (section hidden until present). */
  faq?: Localized<Faq>[];
}

export interface SubsystemText {
  name: string;
  cardText: string;
  tagline: string;
  description: string;
  benefits: string[];
}
export interface Subsystem extends Localized<SubsystemText>, Extras {
  id: string;
  order: number;
  architecture?: Localized<{ title: string; items: string[] }>[];
  stakeholders?: Localized<{ role: string; text: string }>[];
  /** Steps; `details` lines starting with "- " are sub-bullets of the line above. */
  process?: Localized<{ title: string; details: string[] }>[];
}

export interface ModuleText {
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
}
export interface Module extends Localized<ModuleText>, Extras {
  id: string;
  order: number;
  subsystems: Subsystem[];
}

const files = import.meta.glob<Module>('./*.json', { eager: true, import: 'default' });

/** All modules, by `order`; each module's subsystems by `order` too. */
export const modules: Module[] = Object.values(files)
  .map((m) => ({ ...m, subsystems: [...m.subsystems].sort((a, b) => a.order - b.order) }))
  .sort((a, b) => a.order - b.order);

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}

/** Page keys / paths (see pagePath in src/i18n). */
export const modulePage = (moduleId: string) => `products/${moduleId}` as const;
export const subsystemPage = (moduleId: string, subsystemId: string) => `products/${moduleId}/${subsystemId}` as const;

/** Pick one language from a `{ fa, en }` pair. */
export const pick = <T>(pair: Localized<T>, locale: Locale): T => pair[locale];

const img = (path: string) => `/images/modules/${path}`;

export const moduleImages = {
  heroHexes: img('hero-hexes.svg'), // 102:11852 (module hero, green highlights)
  heroHexesSubsystem: img('hero-hexes-subsystem.svg'), // 119:9593 (subsystem hero, violet highlights)
  bandPhoto: img('band-photo.webp'), // 2:15567 (subsystems band / process band photo)
  benefitsChart: img('benefits-chart.webp'), // 102:11624 (module benefits picture)
  benefitsCalculator: img('benefits-calculator.webp'), // 119:9485 (subsystem benefits picture)
  // Same files as the oil & gas benefits picture (identical Figma layers).
  benefitsHexBack: '/images/solutions/oil-gas/benefits-hex-back.webp', // Polygon 13
  benefitsHexFront: '/images/solutions/oil-gas/benefits-hex-front.svg', // Polygon 14
  cardArrow: '/images/products/arrow.svg', // iconbutton/hover 2006:1463
  popoverCheck: img('check-orange.svg'), // 147:1303
  titleDot: img('title-dot.svg'), // 2049:4050
  demoPhoto: img('demo-photo.webp'), // 2:15572 (glass cubes)
  demoHex: '/images/solutions/oil-gas/demo-hex.svg', // 2:19629 (same rounded hexagon as the oil & gas page)
  demoHexIcon: '/images/cloud/page/demo-hex-icon.svg', // 2:19631
};

/** Demo band layer over the photo (Figma 2:15573): blue radial gradient at 40%. */
export const demoOverlay =
  'opacity-40 [background-image:radial-gradient(56.45%_56.49%_at_49.17%_29.53%,#02699c_0%,#064c6f_25.24%,#0a3042_50.48%,#002035_100%)]';

/** Yellow check icons of the benefit chips (shared with the oil & gas page). */
export const benefitChecks = ['9ac10', '94741', '9b6e8', 'fb7e3', '84be5', '5a9b6', 'b72c9', '9d344'].map(
  (id) => `/images/solutions/oil-gas/check-${id}.svg`,
);
