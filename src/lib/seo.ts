import {
  assets,
  corporateService,
  getAllInsightSlugs,
  getAllServiceSlugs,
  officialContact,
} from "@/data/home";

/** Official share / favicon mark (lightweight) — not the UI design icon */
const BRAND_SHARE_LOGO = assets.logos.share;

/**
 * Preferred canonical origin for SEO / Open Graph absolute URLs.
 * Visitors can open both www.wmcpa-eg.com and wmcpa-eg.com; we still emit
 * www in meta/sitemap/JSON-LD so crawlers fetch share images without a
 * host redirect (WhatsApp/Google often drop og:image after a 308).
 * Override with NEXT_PUBLIC_SITE_URL if needed.
 */
export const DEFAULT_SITE_URL = "https://www.wmcpa-eg.com";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  return DEFAULT_SITE_URL;
}

/** Absolute URL for a site path (e.g. "/about" → "https://www.wmcpa-eg.com/about"). */
export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteAssetUrl(assetPath: string): string {
  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }
  return absoluteUrl(assetPath.startsWith("/") ? assetPath : `/${assetPath}`);
}

export interface SitemapEntry {
  path: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

/**
 * Builds the full list of indexable routes for the sitemap.
 * Service + insight slugs are derived from data — no manual URL list to maintain.
 */
export function getSitemapEntries(): SitemapEntry[] {
  const staticEntries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: 1 },
    { path: "/about", changefreq: "monthly", priority: 0.9 },
    { path: "/expertise", changefreq: "monthly", priority: 0.9 },
    { path: "/partners", changefreq: "monthly", priority: 0.85 },
    { path: "/services", changefreq: "weekly", priority: 0.95 },
    { path: "/locations", changefreq: "monthly", priority: 0.85 },
    { path: "/insights", changefreq: "weekly", priority: 0.9 },
    { path: "/contact", changefreq: "monthly", priority: 0.85 },
    { path: "/privacy", changefreq: "yearly", priority: 0.3 },
  ];

  const serviceEntries: SitemapEntry[] = getAllServiceSlugs().map((slug) => ({
    path: `/services/${slug}`,
    changefreq: "monthly" as const,
    priority: slug === corporateService.slug ? 0.8 : 0.75,
  }));

  const insightEntries: SitemapEntry[] = getAllInsightSlugs().map((slug) => ({
    path: `/insights/${slug}`,
    changefreq: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...insightEntries];
}

export function buildSitemapXml(entries: SitemapEntry[], lastmod = new Date()): string {
  const lastmodIso = lastmod.toISOString().slice(0, 10);
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${absoluteUrl(entry.path === "/" ? "/" : entry.path)}</loc>
    <lastmod>${lastmodIso}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export function buildRobotsTxt(): string {
  const sitemapUrl = absoluteUrl("/sitemap.xml");
  return `User-agent: *
Allow: /

# Prefer the brand sitemap
Sitemap: ${sitemapUrl}
`;
}

/** Organization / LocalBusiness JSON-LD using the official firm name + brand icon. */
export function buildOrganizationJsonLd(siteName: string) {
  const logoUrl = absoluteAssetUrl(BRAND_SHARE_LOGO);
  const logoImage = {
    "@type": "ImageObject",
    url: logoUrl,
    width: 600,
    height: 600,
    contentUrl: logoUrl,
  };

  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteName,
    legalName: "Upper Hand Young — Waled Mounir & Mohamed Arafa",
    alternateName: [
      "Upper Hand Young",
      "Waled Mounir & Mohamed Arafa",
      "WMCPA",
      "UHY Egypt",
    ],
    url: getSiteUrl(),
    logo: logoImage,
    image: logoImage,
    email: officialContact.email,
    telephone: officialContact.whatsapp.display,
    areaServed: ["EG", "Middle East"],
    description:
      "Upper Hand Young — Waled Mounir & Mohamed Arafa. Certified Public Accountants in Egypt and a member firm of BOKS International, providing audit, tax and advisory services.",
    memberOf: {
      "@type": "Organization",
      name: "BOKS International",
      url: "https://boks-international.com/",
    },
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Alexandria",
        addressCountry: "EG",
        streetAddress: "38 El-Prince Ibrahim Street, Ezbet Saad, Smouha",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressRegion: "Giza",
        addressCountry: "EG",
        streetAddress:
          "Building 4, 4th Floor, Arkan Plaza, Plot 31, Zayed 2000 Compound, El Sheikh Zayed",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: officialContact.email,
        telephone: officialContact.whatsapp.display,
        availableLanguage: ["en", "ar"],
      },
    ],
    sameAs: [],
  };
}

export function buildWebSiteJsonLd(siteName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: "Upper Hand Young",
    url: getSiteUrl(),
    publisher: {
      "@type": "Organization",
      name: "Upper Hand Young | Waled Mounir & Mohamed Arafa",
      logo: {
        "@type": "ImageObject",
        url: absoluteAssetUrl(BRAND_SHARE_LOGO),
        width: 600,
        height: 600,
      },
    },
    inLanguage: ["en", "ar"],
  };
}
