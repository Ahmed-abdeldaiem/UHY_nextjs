import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { PillarsSection } from "@/components/sections/home/PillarsSection";
import { PartnershipSection } from "@/components/sections/home/PartnershipSection";
import { OfficeLocationsSection } from "@/components/sections/home/OfficeLocationsSection";
import { TeamStrengthSection } from "@/components/sections/home/TeamStrengthSection";
import { SuccessPartnersTeaser } from "@/components/sections/shared/SuccessPartnersTeaser";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { SectorFocusSection } from "@/components/sections/home/SectorFocusSection";
import { InsightsSection } from "@/components/sections/home/InsightsSection";
import { CTASection } from "@/components/sections/home/CTASection";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Upper Hand Young — Waled Mounir & Mohamed Arafa — Home Page
 *
 * Text content  → src/data/i18n/translations.ts
 * Images & URLs   → src/data/home.ts
 * Section layout  → src/components/sections/home/
 */
export default function HomePage() {
  const { t } = useLanguage();

  return (
    <SiteLayout title={t.meta.homeTitle} description={t.meta.homeDescription} path="/">
      <HeroSection />
      <PillarsSection />
      <PartnershipSection />
      <SuccessPartnersTeaser />
      <OfficeLocationsSection />
      <TeamStrengthSection />
      <ServicesSection />
      <SectorFocusSection />
      <InsightsSection />
      <CTASection />
    </SiteLayout>
  );
}
