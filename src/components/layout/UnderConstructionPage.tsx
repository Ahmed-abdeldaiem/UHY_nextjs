import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { fadeInUp } from "@/lib/animations";

/**
 * Placeholder page shown while inner routes are being built.
 * Reuse for every "coming soon" route.
 */
export function UnderConstructionPage() {
  const { t } = useLanguage();

  return (
    <SiteLayout title={`${t.pages.underConstruction} | ${t.meta.siteName}`} noIndex>
      <div className="min-h-[60vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop">
        <motion.h1
          initial={fadeInUp.initial}
          animate={fadeInUp.whileInView}
          transition={{ ...fadeInUp.transition, duration: 0.9 }}
          className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary text-center"
        >
          {t.pages.underConstruction}
        </motion.h1>
      </div>
    </SiteLayout>
  );
}
