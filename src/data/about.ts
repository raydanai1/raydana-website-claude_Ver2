/**
 * About page content structure. Text lives in src/i18n/{fa,en}.json under `about` — the `key`
 * fields below point into those files. Images were exported from the Figma «درباره ما» frame
 * (node 2015:6532) into public/images/about/.
 */

const img = (path: string) => `/images/about/${path}`;

export const aboutImages = {
  videoPoster: img('video-poster.webp'),
  play: img('play.svg'),
  worldMap: img('world-map.webp'),
  glanceHex: img('glance-hex.svg'),
  glanceIcon: img('glance-icon.svg'),
  ringTrack: img('ring-track.svg'),
  ringInner: img('ring-inner.svg'),
  visionCubes: img('vision-cubes.webp'),
  check: img('check-yellow.svg'),
  mission: img('mission.webp'),
  values: img('values.webp'),
  yearHex: img('year-hex.svg'),
  yearHexGlow: img('year-hex-glow.svg'),
  timelinePath: img('timeline-path.svg'),
} as const;

/** "Raydana at a glance" white cards (reading order). */
export const glanceCards = ['identity', 'product', 'field', 'principles'] as const;

/** Gradient ring counters (reading order). `value` counts up from 0 on scroll. */
export const glanceStats = [
  { key: 'trusted', value: 40, prefix: '+', ring: img('ring-purple.svg'), color: '#ca51f2' },
  { key: 'honours', value: 2, prefix: '', ring: img('ring-blue.svg'), color: '#0071e3' },
  { key: 'experience', value: 24, prefix: '+', ring: img('ring-orange.svg'), color: '#f9c167' },
  { key: 'experts', value: 280, prefix: '+', ring: img('ring-green.svg'), color: '#95c93d' },
] as const;

/** Vision items: 2-column grid in reading order. */
export const visionItems = ['leadership', 'flexibility', 'integration', 'intelligence'] as const;
export const missionItems = ['integrate', 'simplify', 'smart', 'grow'] as const;
export const valueItems = ['realProblem', 'decisions', 'structure', 'growth', 'integration', 'simplicity'] as const;

/** "Why CYBER ERP" columns: pastel hexagon fill + accent colour of the icon. */
export const whyItems = [
  { key: 'platform', fill: '#eafdf0', accent: '#4cc777' },
  { key: 'fit', fill: '#fffbcc', accent: '#f0b429' },
  { key: 'beyond', fill: '#fef6e8', accent: '#ee76c2' },
  { key: 'growth', fill: '#ebf9fa', accent: '#3ecdc7' },
] as const;

/** Project logo cards. `w` = rendered logo width in px (Figma size). */
export const projectLogos = [
  { key: 'pension', src: img('project-pension-mark.webp'), w: 81, label: true },
  { key: 'razavi', src: img('project-razavi.webp'), w: 109 },
  { key: 'foreign', src: img('project-foreign.webp'), w: 108 },
  { key: 'presidency', src: img('project-presidency.webp'), w: 111 },
  { key: 'mint', src: img('project-mint.webp'), w: 115 },
] as const;

/**
 * Certificates (reading order; Figma ver4 6001:2125). `course` is the course printed on the certificate,
 * `w` = rendered image width inside the 371px image box (Figma), `px` = intrinsic size of the webp.
 */
export const certificates = [
  { name: 'zarrabi', course: 'Oracle SOA Suite 11g: Build Composite', src: img('cert-soa-zarrabi.webp'), w: 314, px: [640, 488] },
  { name: 'nilforoushan', course: 'Oracle ADF 11g: Build Web Application', src: img('cert-adf-nilforoushan.webp'), w: 300, px: [640, 508] },
  { name: 'zarrabi', course: 'Oracle ADF 11g: Build Web Application', src: img('cert-adf-zarrabi.webp'), w: 300, px: [640, 494] },
  { name: 'nilforoushan', course: 'Oracle BPM Suite 11g: Implementation', src: img('cert-bpm-nilforoushan.webp'), w: 300, px: [640, 499] },
  { name: 'zarrabi', course: 'Oracle BPM Suite 11g: Implementation', src: img('cert-bpm-zarrabi.webp'), w: 294, px: [640, 501] },
  { name: 'nilforoushan', course: 'Oracle SOA Suite 11g: Build Composite', src: img('cert-soa-nilforoushan.webp'), w: 300, px: [640, 499] },
  { name: 'zarrabi', course: 'Intalio BPM and SOA: Modeling, Designing and Executing', src: img('cert-intalio-zarrabi.webp'), w: 321, px: [640, 447] },
] as const;

/** Licence logos (reading order). `w` = rendered width in px (Figma size). */
export const licences = [
  { key: 'afta', src: img('licence-afta.webp'), w: 167 },
  { key: 'nezam', src: img('licence-nezam.webp'), w: 180 },
  { key: 'knowledge', src: img('licence-knowledge.webp'), w: 177 },
  { key: 'council', src: img('licence-council.webp'), w: 207 },
  { key: 'ito', src: img('licence-ito.webp'), w: 200 },
  { key: 'isi', src: img('licence-isi.webp'), w: 200 },
  { key: 'mimt', src: img('licence-mimt.webp'), w: 186 },
] as const;

/**
 * History timeline, reading order. `x` = dot centre measured from the reading-start edge of the
 * 1440px Figma frame (desktop stage); `card` = release card box (start offset, top, width) in the
 * same stage (y measured from the stage top, 230px below the section top), or absent for years-only entries. Years: fa in the Iranian calendar, en/ru/ar Gregorian.
 */
export const historyEntries = [
  {
    key: 'founded',
    years: { fa: '1381', en: '2002', ru: '2002', ar: '2002' },
    dot: img('dot-1381.svg'),
    x: 132,
    founded: true,
  },
  {
    key: 'r1',
    years: { fa: '1383-91', en: '2004-2012', ru: '2004-2012', ar: '2004-2012' },
    dot: img('dot-1383.svg'),
    x: 343,
    card: { start: 220, top: 70, w: 258 },
    groups: [{ label: 'CyberERP: Release 1/2/3/4', items: 'r1' }],
  },
  {
    key: 'r5bank',
    years: { fa: '1394-95', en: '2015-2016', ru: '2015-2016', ar: '2015-2016' },
    dot: img('dot-1394.svg'),
    x: 580,
    card: { start: 489, top: 20, w: 197 },
    groups: [{ label: 'CyberERP: Release 5', items: 'r5bank' }],
  },
  {
    key: 'r5cloud',
    years: { fa: '1396-98', en: '2017-2019', ru: '2017-2019', ar: '2017-2019' },
    dot: img('dot-1396.svg'),
    x: 791,
    card: { start: 700, top: 110, w: 185 },
    groups: [
      { label: 'CyberERP: Release 5', items: 'r5cloud' },
      { label: 'Cyber BI Release 1/2', items: 'bi12' },
    ],
  },
  {
    key: 'r71',
    years: { fa: '1399', en: '2020', ru: '2020', ar: '2020' },
    dot: img('dot-1399.svg'),
    x: 998,
    card: { start: 900, top: 20, w: 204 },
    groups: [{ label: 'CyberERP: Release 7.1', items: 'r71' }],
  },
  {
    key: 'r74',
    years: { fa: '1399-1402', en: '2020-2023', ru: '2020-2023', ar: '2020-2023' },
    dot: img('dot-1399b.svg'),
    x: 1230,
    card: { start: 1123, top: 100, w: 207 },
    groups: [
      { label: 'CyberERP: Release 7.4', items: 'r74' },
      { label: 'Cyber BI Release 3', items: 'bi3' },
    ],
  },
  {
    key: 'next',
    years: { fa: '1402-1405', en: '2023-2026', ru: '2023-2026', ar: '2023-2026' },
    dot: img('dot-1402.svg'),
    x: 1098,
    lower: true,
    card: { start: 977, top: 402, w: 243 },
    groups: [{ label: 'Cyber ERP', items: 'next' }],
  },
] as const;
