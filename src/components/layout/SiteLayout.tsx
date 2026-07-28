import Head from "next/head";
import { useRouter } from "next/router";
import { type ReactNode } from "react";
import { assets } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import {
  absoluteAssetUrl,
  absoluteUrl,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo";

interface SiteLayoutProps {
  children: ReactNode;
  /** Page <title> — pass translated string from useLanguage().t */
  title?: string;
  /** Meta description for SEO */
  description?: string;
  /**
   * Canonical path (e.g. "/about"). Defaults to the current router pathname
   * so every page gets a correct absolute canonical automatically.
   */
  path?: string;
  /** Optional Open Graph / Twitter image path — defaults to logos.share (logo-icon-2) */
  ogImage?: string;
  /** Hide page from search engines (placeholders / drafts) */
  noIndex?: boolean;
  /** Extra JSON-LD objects (Article, BreadcrumbList, …) */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function imageMimeType(assetPath: string): string {
  const lower = assetPath.toLowerCase();
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".gif")) return "image/gif";
  return "image/jpeg";
}

/**
 * Shared page shell: navbar + main + footer, with brand SEO defaults.
 * Favicon / default OG use logos.share (logo-icon-2) — UI keeps logos.icon.
 */
export function SiteLayout({
  children,
  title,
  description,
  path,
  ogImage,
  noIndex = false,
  jsonLd,
}: SiteLayoutProps) {
  const router = useRouter();
  const { t, locale } = useLanguage();
  const siteName = t.meta.siteName;
  const pageTitle = title ?? t.meta.homeTitle;
  const pageDescription = description ?? t.meta.homeDescription;
  const ogLocale = locale === "ar" ? "ar_EG" : "en_US";
  const altLocale = locale === "ar" ? "en_US" : "ar_EG";

  const resolvedPath =
    path ??
    (typeof router.asPath === "string"
      ? router.asPath.split("?")[0].split("#")[0]
      : "/");
  const canonical = absoluteUrl(resolvedPath === "" ? "/" : resolvedPath);
  const sharePath = ogImage ?? assets.logos.share;
  const shareImage = absoluteAssetUrl(sharePath);
  const shareMime = imageMimeType(sharePath);
  const isDefaultShare = !ogImage;

  const structuredData = [
    buildOrganizationJsonLd(siteName),
    buildWebSiteJsonLd(siteName),
    ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {t.meta.keywords ? <meta name="keywords" content={t.meta.keywords} /> : null}
        <meta name="application-name" content={siteName} />
        <meta name="author" content={siteName} />
        <meta name="theme-color" content="#3D1A5C" />
        <meta
          name="robots"
          content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
        />
        <link rel="canonical" href={canonical} />

        {/* Favicon for Google Search / browsers — lightweight share mark only */}
        <link rel="icon" href={assets.logos.share} type="image/jpeg" sizes="48x48" />
        <link rel="icon" href={assets.logos.share} type="image/jpeg" sizes="192x192" />
        <link rel="icon" href={assets.logos.share} type="image/jpeg" sizes="any" />
        <link rel="apple-touch-icon" href={assets.logos.share} sizes="180x180" />
        <link rel="shortcut icon" href={assets.logos.share} />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:locale:alternate" content={altLocale} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:image:type" content={shareMime} />
        {isDefaultShare ? (
          <>
            <meta property="og:image:width" content="600" />
            <meta property="og:image:height" content="600" />
          </>
        ) : null}
        <meta property="og:image:alt" content={siteName} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={shareImage} />
        <meta name="twitter:image:alt" content={siteName} />

        {structuredData.map((data, index) => (
          <script
            // eslint-disable-next-line react/no-danger
            key={`ld-json-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </Head>
      <SiteHeader />
      <main style={{ paddingTop: "var(--site-header-height)" }}>{children}</main>
      <Footer />
      <FloatingActions />
    </>
  );
}
