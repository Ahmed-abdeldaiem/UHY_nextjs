import Head from "next/head";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { PillarsSection } from "@/components/sections/home/PillarsSection";
import { PartnershipSection } from "@/components/sections/home/PartnershipSection";
import { OfficeLocationsSection } from "@/components/sections/home/OfficeLocationsSection";
import { GlobalReachSection } from "@/components/sections/home/GlobalReachSection";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { SectorFocusSection } from "@/components/sections/home/SectorFocusSection";
import { InsightsSection } from "@/components/sections/home/InsightsSection";
import { CTASection } from "@/components/sections/home/CTASection";
import { useLanguage } from "@/context/LanguageContext";

/**
 * UHY Egypt — Home Page
 *
 * Text content  → src/data/i18n/translations.ts
 * Images & URLs   → src/data/home.ts
 * Section layout  → src/components/sections/home/
 */
export default function HomePage() {
  const { t } = useLanguage();

  return (
    <SiteLayout title={t.meta.homeTitle}>
      <Head>
        <meta name="description" content={t.meta.homeDescription} />
      </Head>

      <HeroSection />
      <PillarsSection />
      <PartnershipSection />
      <OfficeLocationsSection />
      <GlobalReachSection />
      <ServicesSection />
      <SectorFocusSection />
      <InsightsSection />
      <CTASection />
    </SiteLayout>
  );
}
