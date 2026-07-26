import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { assets, offices, officialContact } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { fadeInUp } from "@/lib/animations";

const HERO_GRADIENT =
  "linear-gradient(105deg, #3D1A5C 0%, rgba(61,26,92,0.92) 32%, rgba(74,42,112,0.70) 56%, rgba(89,33,148,0.45) 80%, rgba(125,41,181,0.28) 100%)";

/**
 * Dedicated Locations page — office details + Google Maps embeds for each branch.
 */
export default function LocationsPage() {
  const { t, isRtl } = useLanguage();
  const l = t.locationsPage;

  return (
    <SiteLayout
      title={l.meta.title}
      description={l.meta.description}
      path="/locations"
      ogImage={assets.images.locationsHero}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full overflow-hidden bg-primary min-h-[440px] md:min-h-[560px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.images.locationsHero}
            alt=""
            fill
            priority
            className={`object-cover object-center ${isRtl ? "-scale-x-100" : ""}`}
            sizes="100vw"
          />
        </div>
        <div
          className={`absolute inset-0 z-[1] ${isRtl ? "-scale-x-100" : ""}`}
          style={{ background: HERO_GRADIENT }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1040]/70 via-transparent to-transparent" />

        <Container className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-secondary-fixed font-label-sm text-sm md:text-base uppercase tracking-[0.25em] mb-4 block">
              {l.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-surface-white mb-5 leading-tight">
              {l.hero.title}
            </h1>
            <span className="block w-16 h-1 bg-secondary-fixed rounded-full mb-6" />
            <p className="text-base md:text-xl text-surface-white/90 leading-relaxed">
              {l.hero.subtitle}
            </p>
          </motion.div>
        </Container>

        <div
          className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-background z-[2]"
          style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
        />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Offices + maps                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap bg-background relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-20 -end-20 h-80 w-80 bg-contain bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: "url('/B2.png')" }}
        />
        <Container className="relative z-10 space-y-16 md:space-y-20">
          {offices.map((office, index) => {
            const officeText = t.offices[office.id];
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={office.id}
                id={office.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
              >
                {/* Info panel */}
                <div
                  className={`lg:col-span-5 flex flex-col rounded-3xl bg-surface-white border border-outline-variant shadow-sm p-7 md:p-9 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary mb-5">
                    <MaterialIcon name={office.icon} className="text-3xl" />
                  </span>

                  <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary mb-2">
                    {officeText.name}
                  </h2>
                  <p className="text-sm text-on-surface-variant mb-6">
                    {officeText.company}
                  </p>

                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3">
                      <MaterialIcon
                        name="location_on"
                        className="text-secondary text-xl mt-0.5 shrink-0"
                      />
                      <span className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {officeText.address}
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <MaterialIcon name="call" className="text-secondary text-xl shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="font-body-md text-body-md text-primary hover:text-secondary transition-colors"
                        dir="ltr"
                      >
                        {office.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <MaterialIcon name="mail" className="text-secondary text-xl shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="font-body-md text-body-md text-primary hover:text-secondary transition-colors break-all"
                      >
                        {office.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <BrandIcon platform="whatsapp" className="w-5 h-5 text-[#25D366] shrink-0" />
                      <a
                        href={officialContact.whatsapp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body-md text-body-md text-primary hover:text-secondary transition-colors"
                        dir="ltr"
                      >
                        {officialContact.whatsapp.display}
                      </a>
                    </li>
                  </ul>

                  <div className="rounded-2xl bg-surface-container-low border border-outline-variant p-4 mb-6">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                      {t.offices.contactPartner}
                    </p>
                    <p className="text-sm font-semibold text-on-surface">{office.partner.name}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{office.partner.email}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={office.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 px-6 py-3.5 bg-primary text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-[#ff9100] transition-all shadow-md active:scale-95"
                    >
                      <MaterialIcon name="directions" className="text-lg" />
                      {t.offices.getDirections}
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex flex-1 items-center justify-center gap-2 px-6 py-3.5 border border-primary text-primary rounded-lg font-label-sm text-label-sm hover:bg-primary hover:text-surface-white transition-all active:scale-95"
                    >
                      {l.contactOffice}
                      <DirectionalArrow className="text-base" />
                    </Link>
                  </div>
                </div>

                {/* Map */}
                <div
                  className={`lg:col-span-7 relative min-h-[320px] md:min-h-[420px] rounded-3xl overflow-hidden border border-outline-variant shadow-lg bg-[#3D1A5C]/5 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <iframe
                    src={office.mapEmbedUrl}
                    title={`${officeText.name} — ${l.mapLabel}`}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </motion.article>
            );
          })}
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 signature-lines text-surface-white pointer-events-none" />
        <Container className="max-w-4xl text-center relative z-10">
          <motion.h2
            {...fadeInUp}
            className="font-display-hero text-headline-lg text-surface-white mb-6"
          >
            {t.cta.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-surface-white/80 font-body-lg text-body-lg mb-10"
          >
            {t.cta.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-10 py-4 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm hover:brightness-105 transition-all shadow-lg active:scale-95"
            >
              {t.cta.primary}
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-surface-white text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-surface-white/10 transition-all active:scale-95 text-center"
            >
              {t.nav.services}
            </Link>
          </motion.div>
        </Container>
      </section>
    </SiteLayout>
  );
}
