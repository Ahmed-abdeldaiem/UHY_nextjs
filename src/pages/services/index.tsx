import Head from "next/head";
import { motion } from "motion/react";
import { navServices } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { fadeInUp } from "@/lib/animations";

/**
 * Services overview — all offerings listed until individual pages are ready.
 */
export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <SiteLayout title={`${t.servicesPage.title} | UHY Egypt`}>
      <Head>
        <meta name="description" content={t.servicesPage.description} />
      </Head>

      <section className="py-section-gap bg-surface-container-low">
        <Container>
          <motion.div {...fadeInUp} className="max-w-2xl mb-12">
            <h1 className="font-display-hero text-display-hero-mobile md:text-headline-lg text-primary mb-4">
              {t.servicesPage.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {t.servicesPage.description}
            </p>
            <p className="mt-4 text-sm text-on-surface-variant/70 italic">{t.servicesPage.comingSoon}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {navServices.map((service, index) => (
              <motion.article
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="flex flex-col h-full p-6 rounded-2xl bg-surface-white border border-outline-variant"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                    <MaterialIcon name="verified" className="text-xl" />
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary leading-snug pt-1">
                    {t.serviceItems[service.key]}
                  </h2>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
