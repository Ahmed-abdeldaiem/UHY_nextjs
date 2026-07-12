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
    navbar: "/logo1.1.png",
    /** Footer brand mark */
    footer: "/logo3.png",
    /** Alexandria branch card logo */
    alexandria: "/logo_alex.jpg",
  },
  images: {
    /** Branded background used behind the site footer */
    footerBackground: "/footer.jpg",
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
  { key: "locations" as const, href: "/#offices" },
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
  { key: "contractConsulting", slug: "contract-consulting" },
] as const;

export type NavServiceKey = (typeof navServices)[number]["key"];

/** Official contact emails shown in the top utility bar */
export const topBarEmails = [
  { id: "cairo" as const, email: "info@uhy-united.com" },
  { id: "alexandria" as const, email: "info@uhy-eg-alex.com" },
] as const;

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
  { id: "alexLeadership", image: "/T1.jpg", branch: "alexandria", focus: "center 30%" },
  { id: "alexExcellence", image: "/T2.jpg", branch: "alexandria", focus: "center 30%" },
  { id: "cairoTeam", image: "/T3.jpg", branch: "cairo", focus: "center 35%" },
];

// ---------------------------------------------------------------------------
// Goal / Vision / Mission pillars (gradients defined in globals.css)
// ---------------------------------------------------------------------------

export const pillarKeys = ["goal", "vision", "mission"] as const;
export type PillarKey = (typeof pillarKeys)[number];

export const pillarGradients: Record<PillarKey, "dark" | "bright" | "teal"> = {
  goal: "dark",
  vision: "bright",
  mission: "teal",
};

// ---------------------------------------------------------------------------
// Partnership
// ---------------------------------------------------------------------------

export const partnershipImage = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCt78Rx3TTM9luti56eKN_pyxprjjbodv04KHCCaBijGo-umUt4-GneXENXMhD6EmYTyi9s7t0wQgOO07hn53wZ036pNMvr7xjVFrbze2aRxcAEAlSh8MTN3e-UZzk46LnF2IaiaKc1qQ3IAoyQTfD6VOQdgKJizaeN-ic7OE2BnuQp54cO7-2q5V0g-1sbjoduhUDcoemLXc9o2taEzGe3fg_dpbTO2LT0MDa22ygbKZoi_eVq5rae",
};

export const partnershipStats = [
  { value: "340+", key: "globalOffices" as const },
  { value: "95+", key: "countries" as const },
];

// ---------------------------------------------------------------------------
// Offices (non-translatable contact data)
// ---------------------------------------------------------------------------

export interface OfficeData {
  id: "cairo" | "alexandria";
  icon: string;
  phone: string;
  email: string;
  partner: { name: string; email: string };
  directionsUrl: string;
}

export const offices: OfficeData[] = [
  {
    id: "cairo",
    icon: "location_on",
    phone: "+2 2516 7355",
    email: "info@uhy-united.com",
    partner: { name: "Ahmed Hegazy", email: "ahmed.hegazy@uhy-united.com" },
    directionsUrl: "https://share.google/xUs1uX4GwF52Cv2YM",
  },
  {
    id: "alexandria",
    icon: "location_city",
    phone: "+20 3 424 3371",
    email: "info@uhy-eg-alex.com",
    partner: { name: "Waled Mounir", email: "waled.mounir@uhy-eg-alex.com" },
    directionsUrl: "https://share.google/X9A1eICPa9U2O75fT",
  },
];

// ---------------------------------------------------------------------------
// Global reach stats
// ---------------------------------------------------------------------------

export const globalReachStats = [
  { value: "340+", key: "globalOffices" as const, icon: "public" },
  { value: "95+", key: "countries" as const, icon: "flag" },
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

// ---------------------------------------------------------------------------
// Sectors
// ---------------------------------------------------------------------------

export const sectors = [
  {
    id: "manufacturing" as const,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYvBkQ8Gclv_hVzih0oCuugLz8bJ5s1qsuF-9jubjKUMD3N2nNnF7K_P6YIvD2oLgAbsppXRwSOJQ0ygW84GutcXFTdDQ3J2jFmOgZHIWqsd8-bQLrXTL62qqc0U2uXW3LhfxkXmmgEcr8RcvXGnsonbEExYmVERDMZuTpEuUV2wxHp-gBaK5MaYHx9M_eqEHUh_0Tt2gKVi9rydoIA0lrCAS3qD9FYBiDOuHSpVo1q-Dg9hMOwHdV",
    },
  },
  {
    id: "energy" as const,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMlRrBGBjIB15EPgdVp7r6wo-mTvRVvio48Fk7fCZj_v738-gOvrATs4IAIwwKEg87kd3zYxYPq6r_u6K34cu9Aho99y15gMqynwlDPMT-Tl232KKgPin1K4pMj-xaRx0otytDPsvmIjMctJuaK9JmI175X5oCMZP4zC0DvBf9laLrlkfAohfMNgBYAKz0Je5FShDJpV64gOFJ052VSKWTyndSMWPJUqxadg4Jvik2f9886sLcfddI",
    },
  },
  {
    id: "realEstate" as const,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk_MwfHFExucgJbBnukWpZYTAmkVc-HPIF7ZiR5JO_qJnPDjUT5GLdt7tgLaqIeIV8-dgDkAY9Yw1gYcUGAKQ1u_dKtxGUVxHUp7tK_L_HJwhP0ex4H0iEE-76VORJB1Ifycr-f0OnmBsuK0Lyz40CwulNlqwFj3lstTS1OrgTNLwFgCv88UQe0PZI5C18bjUfb54WhDJOK3AF4sfTb6474-5bnziGtum0mrnUKWIjWpv-c0Pf--rx",
    },
  },
];

// ---------------------------------------------------------------------------
// Insights articles
// ---------------------------------------------------------------------------

export const insightArticles = [
  {
    id: "taxReform" as const,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4DKmjgffrwUcbO5mlxA6llnUGGSSQnnnnGADZ90d-NqBhbfjJ6MLskY9uWhajZXoBZisAtyw1SmBoX894oPx799ZJ3GbVm0E6IaAEMo4mnzxVUoDQ6hKRfrORYlfh1xt-UtvzJok7eKntAxgpPEjZhnticlI3J0SinY0AxoQAa7WbXb8CF5fMYgoc_jnWKMf0ZPkz5oqLR8Dv8UnG18KJu20Re57cRh465KwoDHQz6E6wCddf-gM9",
    },
  },
  {
    id: "marketVolatility" as const,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS6WksnvHCV2Cyg0jjD1Y9Q4oI6hI3uTYq0vCmbEN6hQ5-AgZY9jQM7euZhnel_kYbX1LDHABdh7d5m5zWHB67atyhA0fWAb_u-ws9B3KGN6WiXt3R8l7IW5lZ-PhaKc3F-a3zCUBhhpb4-kq9FTyHCylARkqHJxEnwFMbxSuilVuloXi2cohWy7Cc1w_ZaAnyl_xsWTu_CrJI0lIBbSTfDulGskIyVEq8eHC5jFOFZsb7_zAgU_xP",
    },
  },
];

// ---------------------------------------------------------------------------
// Footer links (labels from translations)
// ---------------------------------------------------------------------------

export const footerExpertiseLinks = [
  { key: "auditAssurance" as const, href: "/services/audit" },
  { key: "taxAdvisory" as const, href: "/services/tax" },
  { key: "submitRfp" as const, href: "/rfp" },
];

export const footerLegalLinks = [
  { key: "disclosure" as const, href: "/disclosure" },
  { key: "privacy" as const, href: "/privacy" },
  { key: "cookies" as const, href: "/cookies" },
];

export type SocialPlatform = "linkedin" | "instagram" | "facebook";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
}

/** Branch-specific social media accounts */
export const officeSocials: Record<"cairo" | "alexandria", SocialLink[]> = {
  cairo: [
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/company/united-for-auditing-tax-advisory-financial-services/?originalSubdomain=eg",
    },
    { platform: "facebook", href: "https://www.facebook.com/UHYEGYPT/?locale=ar_AR" },
  ],
  alexandria: [
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/company/uhy-waled-mounir-mohammed-arafa/posts/?feedView=all",
    },
    { platform: "instagram", href: "https://www.instagram.com/uhywaledmounirmohammedarafa/" },
    { platform: "facebook", href: "https://www.facebook.com/uhyalexandriaegypt/?locale=ar_AR" },
  ],
};
