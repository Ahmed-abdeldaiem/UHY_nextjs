/**
 * Structural site data — URLs, icons, images, IDs
 * Text content is in src/data/i18n/translations.ts
 */

// ---------------------------------------------------------------------------
// Brand assets
// ---------------------------------------------------------------------------

export const assets = {
  logos: {
    /** Navbar brand mark */
    navbar: "/logopng.png",
    /** Footer brand mark */
    footer: "/logowhite.png",
    /** Compact square icon (dark) */
    icon: "/logo-icon.png",
    /** Compact square icon (white, for dark backgrounds) */
    iconWhite: "/logo-icon-white.png",
  },
  images: {
    /** Branded background used behind the site footer */
    footerBackground: "/footer.jpg",
    /** Contact page hero background */
    contactHero: "/contact.jpg",
    /** Services page hero background */
    servicesHero: "/service.jpg",
    /** Locations page hero background */
    locationsHero: "/location.jpeg",
    /** Expertise page hero background */
    expertiseHero: "/T3-1.jpeg",
    /** Insights page hero background */
    insightsHero: "/insights.jpg",
    /** Success Partners page hero background */
    partnersHero: "/success.jpg",
  },
} as const;

// ---------------------------------------------------------------------------
// Navigation (labels come from translations)
// ---------------------------------------------------------------------------

export const SERVICES_PAGE_HREF = "/services";


export const navLinks = [
  { key: "home" as const, href: "/" },
  { key: "about" as const, href: "/about" },
  { key: "expertise" as const, href: "/expertise" },
  { key: "partners" as const, href: "/partners" },
  { key: "locations" as const, href: "/locations" },
  { key: "insights" as const, href: "/insights" },
] as const;

export type NavLinkKey = (typeof navLinks)[number]["key"];

/** Services dropdown is rendered immediately after this link in the navbar */
export const servicesNavAfter: NavLinkKey = "about";

export const navServices = [
  { key: "auditAndReview", slug: "audit-and-review" },
  { key: "bookkeeping", slug: "bookkeeping" },
  { key: "taxAndInternationalTax", slug: "tax" },
  { key: "transferPricing", slug: "transfer-pricing" },
  { key: "internalAudit", slug: "internal-audit" },
  { key: "fraudExamination", slug: "fraud-examination" },
  { key: "financialAssessment", slug: "financial-assessment" },
  { key: "feasibilityStudies", slug: "feasibility-studies" },
  { key: "managementConsulting", slug: "management-consulting" },
  { key: "corporateGovernance", slug: "corporate-governance" },
  { key: "contractConsulting", slug: "contract-consulting" },
] as const;

export type NavServiceKey = (typeof navServices)[number]["key"];

/**
 * Single official contact used site-wide (top bar, floating buttons, footer).
 * `whatsapp.link` uses the international wa.me format (country code, no "+"/spaces).
 */
export const officialContact = {
  email: "info@wmcpa-eg.com",
  whatsapp: {
    /** Human-readable number shown in the UI */
    display: "+2 011 1117 4241",
    /** Egypt (+20) mobile 011 1117 4241 → 20 111 117 4241 */
    link: "https://wa.me/201111174241",
  },
} as const;

// ---------------------------------------------------------------------------
// Hero carousel (team photos — branch tied via `branch` field)
// ---------------------------------------------------------------------------

export interface HeroSlide {
  id: "cairoTeam" | "alexLeadership" | "alexExcellence";
  image: string;
  branch: "cairo" | "alexandria";
  /** object-position focus so faces stay in frame while cropping */
  focus: string;
}


export const heroSlides: HeroSlide[] = [
  { id: "alexLeadership", image: "/T3.jpeg", branch: "alexandria", focus: "center top" },
  { id: "alexExcellence", image: "/SL2-2.jpg", branch: "alexandria", focus: "center top" },
  { id: "cairoTeam", image: "/SL1-1.jpg", branch: "cairo", focus: "center 20%" },
];

// ---------------------------------------------------------------------------
// Goal / Vision / Mission pillars (gradients defined in globals.css)
// ---------------------------------------------------------------------------

export const pillarKeys = ["goal", "vision", "mission"] as const;
export type PillarKey = (typeof pillarKeys)[number];

export const pillarGradients: Record<PillarKey, "dark" | "bright" | "accent"> = {
  goal: "dark",
  vision: "bright",
  mission: "accent",
};

// ---------------------------------------------------------------------------
// Partnership
// ---------------------------------------------------------------------------

export const partnershipImage = {
  src: "/BOKS1.jpg",
};

export const partnershipStats = [
  { value: "70+", key: "memberFirms" as const },
  { value: "50+", key: "countries" as const },
];

// ---------------------------------------------------------------------------
// Offices (non-translatable contact data)
// ---------------------------------------------------------------------------

export interface OfficeData {
  id: "cairo" | "alexandria";
  icon: string;
  /** Landline for this office */
  phone: string;
  /** Shared mobile for both offices (same as official WhatsApp) */
  mobile: string;
  email: string;
  /** Opens Google Maps directions to this office */
  directionsUrl: string;
  /** Google Maps embed URL for the locations page */
  mapEmbedUrl: string;
}

/** Shared contact partner for both offices — WhatsApp opens the shared mobile. */
export const contactPartner = {
  name: "Waled Mounir",
  whatsappLink: officialContact.whatsapp.link,
} as const;

const SHARED_MOBILE = officialContact.whatsapp.display;
const SHARED_EMAIL = officialContact.email;

export const offices: OfficeData[] = [
  {
    id: "cairo",
    icon: "location_on",
    phone: "+20 2 3827 7021",
    mobile: SHARED_MOBILE,
    email: SHARED_EMAIL,
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Arkan%20Plaza%2C%20El%20Sheikh%20Zayed%2C%20Giza%2C%20Egypt&travelmode=driving",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27633.67134648762!2d30.974413810426725!3d30.0308636502199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585b0525c31285%3A0xe916bcf3ee2db2ad!2sArkan%20Plaza!5e0!3m2!1sen!2seg!4v1785088796786!5m2!1sen!2seg",
  },
  {
    id: "alexandria",
    icon: "location_city",
    phone: "+20 3 424 3371",
    mobile: SHARED_MOBILE,
    email: SHARED_EMAIL,
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=38%20El-Prince%20Ibrahim%20Street%2C%20Ezbet%20Saad%2C%20Smouha%2C%20Alexandria%2C%20Egypt&travelmode=driving",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218387.62980564873!2d29.64322709453125!3d31.21223079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49700000001%3A0x3a2f0adb98a5d690!2sUHY%20EGYPT!5e0!3m2!1sen!2seg!4v1785088858927!5m2!1sen!2seg",
  },
];

// ---------------------------------------------------------------------------
// Global reach stats
// ---------------------------------------------------------------------------

export const globalReachStats = [
  { value: "235", key: "globalOffices" as const, icon: "public" },
  { value: "75", key: "countries" as const, icon: "flag" },
];

// ---------------------------------------------------------------------------
// Team strength — expertise & track record (branded showcase)
// ---------------------------------------------------------------------------

export const teamStrength = {
  /** Branded banner — wide for desktop, square for small screens */
  image: {
    wide: "/wmcpa.jpg",
    square: "/wmcpa2.jpg",
  },
  /** Brand slogan mirrored on the banner (labels translated in i18n) */
  features: [
    { key: "megaProjects", icon: "apartment" },
    { key: "regionalReach", icon: "travel_explore" },
    { key: "eliteTeam", icon: "diversity_3" },
    { key: "trackRecord", icon: "military_tech" },
  ],
} as const;

export type TeamStrengthFeatureKey = (typeof teamStrength.features)[number]["key"];

// ---------------------------------------------------------------------------
// About page
// ---------------------------------------------------------------------------

export const aboutImages = {
  hero: "/egypt.jpg",
  story: "/T3.jpeg",
  partnershipBackground: "/footer.jpg",
} as const;

/** Headline stats shown as a band under the story section */
export const aboutStats = [
  { value: "25+", key: "years" as const, icon: "workspace_premium" },
  { value: "2", key: "offices" as const, icon: "apartment" },
  { value: "235", key: "globalOffices" as const, icon: "public" },
  { value: "75", key: "countries" as const, icon: "flag" },
];

/** BOKS International global network figures (parent company infographic) */
export const boksStats = [
  { value: "123", key: "members" as const, icon: "groups" },
  { value: "235", key: "offices" as const, icon: "business" },
  { value: "75", key: "countries" as const, icon: "public" },
  { value: "5.1k", key: "employees" as const, icon: "badge" },
  { value: "$598m", key: "feeIncome" as const, icon: "payments" },
  { value: "698", key: "partners" as const, icon: "handshake" },
];

/** "What sets us apart" value cards */
export const aboutValues = [
  { key: "integrity" as const, icon: "verified_user" },
  { key: "excellence" as const, icon: "diamond" },
  { key: "clientFocus" as const, icon: "diversity_3" },
  { key: "globalReach" as const, icon: "language" },
];

/**
 * Founding partners — translations live under about.leadership.partners[key].
 * `image` is the portrait photo; `icon` reflects each partner's focus.
 */
export const foundingPartners = [
  {
    key: "walidMounir" as const,
    image: "/walid.jpeg",
    icon: "account_balance",
  },
  {
    key: "mohamedArafa" as const,
    image: "/mohamed.jpeg",
    icon: "fact_check",
  },
];

// ---------------------------------------------------------------------------
// Success partners (client logos in /public/partners)
// ---------------------------------------------------------------------------

/** Numbered logo files currently in /public/partners */
export const SUCCESS_PARTNERS_LOGO_COUNT = 26;

/** Approximate total success partners (logos shown are a featured selection) */
export const SUCCESS_PARTNERS_TOTAL = 50;

export const successPartnerLogos = Array.from(
  { length: SUCCESS_PARTNERS_LOGO_COUNT },
  (_, index) => ({
    id: index + 1,
    src: `/partners/${index + 1}.jpeg`,
  }),
);

/** Subset used in the home / expertise teaser marquees */
export const successPartnersTeaserLogos = successPartnerLogos;

// ---------------------------------------------------------------------------
// Expertise page — publications & professional presence
// ---------------------------------------------------------------------------

/** Four highlight cards under the Expertise hero — copy in `t.expertisePage.strengths`. */
export const expertiseStrengths = [
  { key: "experience" as const, icon: "workspace_premium" },
  { key: "multidisciplinary" as const, icon: "groups" },
  { key: "regional" as const, icon: "public" },
  { key: "thoughtLeadership" as const, icon: "auto_stories" },
] as const;

export type ExpertiseStrengthKey = (typeof expertiseStrengths)[number]["key"];

export type ExpertisePublicationKey =
  | "footballEconomics"
  | "internalAuditCoso"
  | "corruptionSports";

export const expertisePublications: {
  key: ExpertisePublicationKey;
  image: string;
  href: string;
}[] = [
  {
    key: "footballEconomics",
    image: "/Li1.png",
    href: "https://www.albatel-research.org/publications/football-economics",
  },
  {
    key: "internalAuditCoso",
    image: "/Li2.png",
    href: "https://www.albatel-research.org/publications/internal-audit",
  },
  {
    key: "corruptionSports",
    image: "/Li3.jpeg",
    href: "https://www.albatel-research.org/publications/corruption",
  },
];

export type ExpertiseGalleryKey = "cairoFair" | "jarir" | "riyadhFair" | "universities";

export const expertiseGalleries: {
  key: ExpertiseGalleryKey;
  images: string[];
}[] = [
  {
    key: "cairoFair",
    images: ["/Cairo2.jfif", "/Cairo3.jfif", "/Cairo4.jfif"],
  },
  {
    key: "jarir",
    images: ["/Jarir.jfif"],
  },
  {
    key: "riyadhFair",
    images: ["/Riyad1.jfif", "/Riyad2.jfif", "/Riyad3.jfif", "/Riyad4.jfif"],
  },
  {
    key: "universities",
    images: ["/college1.jfif", "/college2.jfif", "/college3.jfif"],
  },
];

// ---------------------------------------------------------------------------
// Services (bento grid layout config)
// ---------------------------------------------------------------------------

export type ServiceVariant = "default" | "primary" | "wide";

export interface ServiceConfig {
  id: "audit" | "tax" | "advisory" | "finance";
  icon: string;
  backgroundIcon?: string;
  variant: ServiceVariant;
  colSpan: 4 | 8;
}

export const services: ServiceConfig[] = [
  { id: "audit", icon: "verified", backgroundIcon: "finance_mode", variant: "wide", colSpan: 8 },
  { id: "tax", icon: "receipt_long", variant: "primary", colSpan: 4 },
  { id: "advisory", icon: "insights", variant: "default", colSpan: 4 },
  { id: "finance", icon: "account_balance", backgroundIcon: "monetization_on", variant: "wide", colSpan: 8 },
];

/** Icons for each navigable service (titles in `t.serviceItems`). */
const serviceIcons: Record<NavServiceKey, string> = {
  auditAndReview: "fact_check",
  bookkeeping: "menu_book",
  taxAndInternationalTax: "receipt_long",
  transferPricing: "compare_arrows",
  internalAudit: "policy",
  fraudExamination: "gavel",
  financialAssessment: "monitoring",
  feasibilityStudies: "query_stats",
  managementConsulting: "insights",
  corporateGovernance: "assured_workload",
  contractConsulting: "handshake",
};

/**
 * Full list of professional offerings for the Services page & detail routes.
 * Titles: `t.serviceItems` · short copy: `t.servicesPage.details` ·
 * long copy: `t.servicesPage.pages[key]`.
 */
export const serviceOfferings = navServices.map((service) => ({
  key: service.key,
  slug: service.slug,
  icon: serviceIcons[service.key],
  href: `${SERVICES_PAGE_HREF}/${service.slug}` as const,
}));

/** Featured corporate / institutional offering (also has its own detail page). */
export const corporateService = {
  key: "corporate" as const,
  slug: "corporate-institutions",
  icon: "domain",
  href: `${SERVICES_PAGE_HREF}/corporate-institutions` as const,
};

export type ServicePageKey = NavServiceKey | typeof corporateService.key;

export function getServiceBySlug(slug: string) {
  const offering = serviceOfferings.find((s) => s.slug === slug);
  if (offering) return offering;
  if (slug === corporateService.slug) return corporateService;
  return null;
}

export function getAllServiceSlugs(): string[] {
  return [...serviceOfferings.map((s) => s.slug), corporateService.slug];
}

// ---------------------------------------------------------------------------
// Sectors
// ---------------------------------------------------------------------------

export const sectors = [
  {
    id: "manufacturing" as const,
    image: {
      src: "/indust1.jpg",
    },
  },
  {
    id: "energy" as const,
    image: {
      src: "/indust2.jpg",
    },
  },
  {
    id: "realEstate" as const,
    image: {
      src: "/indust3.jpg",
    },
  },
];

/**
 * Industry sectors for the Services page carousel — content lives under
 * `t.servicesPage.sectorItems[key]`. Icon-led cards keep the brand identity
 * consistent regardless of imagery availability.
 */
export type ServiceSectorKey =
  | "manufacturing"
  | "energy"
  | "realEstate"
  | "financialServices"
  | "healthcare"
  | "retail"
  | "technology"
  | "hospitality"
  | "agriculture"
  | "publicSector"
  | "transport"
  | "education";

export const serviceSectors: { key: ServiceSectorKey; icon: string }[] = [
  { key: "manufacturing", icon: "factory" },
  { key: "energy", icon: "bolt" },
  { key: "realEstate", icon: "apartment" },
  { key: "financialServices", icon: "account_balance" },
  { key: "healthcare", icon: "local_hospital" },
  { key: "retail", icon: "shopping_bag" },
  { key: "technology", icon: "memory" },
  { key: "hospitality", icon: "hotel" },
  { key: "agriculture", icon: "agriculture" },
  { key: "publicSector", icon: "corporate_fare" },
  { key: "transport", icon: "local_shipping" },
  { key: "education", icon: "school" },
];

// ---------------------------------------------------------------------------
// Insights articles
// ---------------------------------------------------------------------------

export type InsightArticleId =
  | "thirdPartyRisk"
  | "meahcoRevenue"
  | "securitizationBubble"
  | "ias15Revenue";

export interface InsightArticleConfig {
  id: InsightArticleId;
  slug: string;
  image: string;
  icon: string;
}

/**
 * Insights articles — titles/excerpts/body live under `t.insights.articles[id]`.
 * Homepage shows the first two; the Insights page lists all.
 */
export const insightArticles: InsightArticleConfig[] = [
  {
    id: "thirdPartyRisk",
    slug: "third-party-risk-assessment-ey-breach",
    image: "/service.jpg",
    icon: "security",
  },
  {
    id: "meahcoRevenue",
    slug: "meahco-revenue-recognition-case",
    image: "/egypt.jpg",
    icon: "gavel",
  },
  {
    id: "securitizationBubble",
    slug: "egypt-real-estate-securitization",
    image: "/indust3.jpg",
    icon: "apartment",
  },
  {
    id: "ias15Revenue",
    slug: "ias-15-revenue-from-contracts",
    image: "/indust1.jpg",
    icon: "receipt_long",
  },
];

export function getInsightBySlug(slug: string) {
  return insightArticles.find((article) => article.slug === slug) ?? null;
}

export function getAllInsightSlugs() {
  return insightArticles.map((article) => article.slug);
}

// ---------------------------------------------------------------------------
// Footer links (labels from translations)
// ---------------------------------------------------------------------------

/**
 * Top services shown in the footer Quick Links column.
 * Labels come from `t.serviceItems[key]`.
 */
export const footerQuickServiceLinks = [
  { key: "auditAndReview" as const, href: "/services/audit-and-review" },
  { key: "taxAndInternationalTax" as const, href: "/services/tax" },
  { key: "corporateGovernance" as const, href: "/services/corporate-governance" },
  { key: "transferPricing" as const, href: "/services/transfer-pricing" },
  { key: "internalAudit" as const, href: "/services/internal-audit" },
] as const;

/** Legal footer links — Disclosure & Cookies anchor into the Privacy page. */
export const footerLegalLinks = [
  { key: "disclosure" as const, href: "/privacy#disclosure" },
  { key: "privacy" as const, href: "/privacy" },
  { key: "cookies" as const, href: "/privacy#cookies" },
];

export type SocialPlatform =
  | "linkedin"
  | "instagram"
  | "facebook"
  | "x"
  | "youtube"
  | "tiktok"
  | "whatsapp";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
}

/**
 * Unified social media accounts — one set shared across all branches.
 *
 * 👉 TO ADD SOCIAL MEDIA LINKS: paste each page URL into the matching `href`
 *    below (e.g. facebook: "https://www.facebook.com/your-page").
 *    While `href` is an empty string, the icon is shown but not clickable.
 */
export const socialLinks: SocialLink[] = [
  { platform: "facebook", href: "" },
  { platform: "instagram", href: "" },
  { platform: "x", href: "" },
  { platform: "youtube", href: "" },
  { platform: "tiktok", href: "" },
  { platform: "linkedin", href: "" },
];
