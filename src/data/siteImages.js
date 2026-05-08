/**
 * AI-generated editorial photography (UK, secular/humanist contexts).
 * Paths are under `public/images/photo/`. Do not use for the hero portrait slot
 * (real photo of Alex).
 */
const p = (base) => `/images/photo/${base}.webp`;

/** Per-service pools for cards and detail pages (2–4 variants each). */
export const SERVICE_IMAGE_POOLS = {
  weddings: [p("hero-barn-ceremony"), p("wedding-garden"), p("wedding-woodland")],
  "vow-renewals": [p("vow-marquee"), p("vow-patio"), p("vow-coast")],
  funerals: [p("funeral-chapel"), p("funeral-detail"), p("life-garden"), p("life-hall")],
  naming: [p("naming-garden"), p("naming-home"), p("naming-park")],
  dj: [p("dj-marquee"), p("dj-dancefloor"), p("dj-outdoor")],
};

export function serviceImageAt(slug, index = 0) {
  const pool = SERVICE_IMAGE_POOLS[slug];
  if (!pool?.length) return undefined;
  return pool[index % pool.length];
}

/** Home + About gallery tiles (`ALEX_GALLERY` ids). */
export const GALLERY_IMAGE_BY_ID = {
  weddings: p("wedding-garden"),
  vows: p("vow-coast"),
  funerals: p("funeral-detail"),
  naming: p("naming-park"),
  dj: p("dj-dancefloor"),
  venues: p("venue-barn-interior"),
  work: "/images/alex/alex-07.jpg",
  moments: p("moments-dance"),
  evenings: p("evening-candles"),
};

export const HERO_BACKGROUND = p("hero-barn-ceremony");
export const ABOUT_STRIP_HOME = p("about-planning");
export const ABOUT_PAGE_COLUMN_TALL = p("about-couple-field");
export const ABOUT_PAGE_COLUMN_WIDE = p("venue-oast");
export const CONTACT_PANEL = p("contact-desk");

export const PROCESS_IMAGES = [
  p("process-consult"),
  p("process-messages"),
  p("process-writing"),
  p("process-suppliers"),
  p("process-delivery"),
];

export const LINKS_THUMBNAILS = [p("links-social"), "/images/GOLD AND BLUE LOGO-01.jpg"];
