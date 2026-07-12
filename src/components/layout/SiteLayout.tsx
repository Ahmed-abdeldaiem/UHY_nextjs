import Head from "next/head";
import { type ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";

interface SiteLayoutProps {
  children: ReactNode;
  /** Page <title> — pass translated string from useLanguage().t */
  title?: string;
}

/**
 * Shared page shell: navbar + main content area + footer.
 * Used by home and all inner pages.
 */
export function SiteLayout({ children, title = "UHY Egypt" }: SiteLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SiteHeader />
      <main style={{ paddingTop: "var(--site-header-height)" }}>{children}</main>
      <Footer />
    </>
  );
}
