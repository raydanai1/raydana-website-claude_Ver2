/**
 * Contact page content structure. Text lives under `contact` in src/i18n/{fa,en}.json —
 * the `key` fields below point into contact.cards. Layout values come from the Figma
 * "تماس با ما" frame (node 28:1536).
 */

const img = (path: string) => `/images/contact/${path}`;

export const contactImages = {
  cubes: img('cubes.webp'), // 43:4755 "9898989 1" (mirrored in Figma)
  arrow: img('arrow.svg'), // 38:772 "Vector 640"
};

/** Office position (from the office's Google Maps pin): Ghandi (Palizi) St., off North Sohrevardi, Tehran. */
export const officeLocation = { lat: 35.738983, lon: 51.439238 };

/** The office's Google Maps share link. */
export const googleMapsUrl = 'https://maps.app.goo.gl/wVxYKGtQWg8s5q9BA';

export type ContactCardKey = 'address' | 'management' | 'sales' | 'support';

export interface ContactCard {
  key: ContactCardKey;
  /** Pastel hexagon icon and its Figma size. */
  icon: string;
  iconW: number;
  iconH: number;
  /** Phone as shown (Latin digits; localized for fa) and as dialled. */
  phone?: { display: string; tel: string };
  email?: string;
  /** Button target: the map section or a mailto link. */
  href: string;
}

/** Cards in reading order (RTL from the right): address, management, sales, support. */
export const contactCards: ContactCard[] = [
  { key: 'address', icon: img('icon-address.svg'), iconW: 81.3596, iconH: 81.3595, href: '#map' }, // 37:616, 38:756
  {
    key: 'management', // 37:577, 38:782
    icon: img('icon-management.svg'),
    iconW: 81.3596,
    iconH: 81.3595,
    phone: { display: '+98 (21) 8876 5311', tel: '+982188765311' },
    email: 'info@raydana.com',
    href: 'mailto:info@raydana.com',
  },
  {
    key: 'sales', // 37:576, 38:798
    icon: img('icon-sales.svg'),
    iconW: 81.0983,
    iconH: 81.6217,
    phone: { display: '+98 (21) 8854 8676', tel: '+982188548676' },
    email: 'sales@raydana.com',
    href: 'mailto:sales@raydana.com',
  },
  {
    key: 'support', // 37:575, 38:814
    icon: img('icon-support.svg'),
    iconW: 81.0983,
    iconH: 81.6217,
    phone: { display: '+98 (21) 8854 8802', tel: '+982188548802' },
    email: 'support@raydana.com',
    href: 'mailto:support@raydana.com',
  },
];
