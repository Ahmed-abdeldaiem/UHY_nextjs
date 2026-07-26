import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { assets, corporateService, serviceOfferings } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { SectorsCarousel } from "@/components/sections/services/SectorsCarousel";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Services overview — hero, full offerings grid and an innovative sector
 * carousel, styled to match the About / Contact visual identity.
 */
export default function ServicesPage() {
  const { t, isRtl } = useLanguage();
  const s = t.servicesPage;
  const siteName = t.meta.siteName;

  return (
    <SiteLayout
      title={`${s.title} | ${siteName}`}
      description={s.description}
      path="/services"
      ogImage={assets.images.servicesHero}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Hero — service.jpg, purple duotone overlay, angled bottom edge      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full overflow-hidden bg-primary min-h-[440px] md:min-h-[620px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.images.servicesHero}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className={`absolute inset-0 z-[1] ${isRtl ? "-scale-x-100" : ""}`}
          style={{
            background:
              "linear-gradient(105deg, #3D1A5C 0%, rgba(61,26,92,0.92) 32%, rgba(74,42,112,0.70) 56%, rgba(89,33,148,0.45) 80%, rgba(125,41,181,0.28) 100%)",
          }}
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
              {s.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-surface-white mb-5 leading-tight">
              {s.hero.title}
            </h1>
            <span className="block w-16 h-1 bg-secondary-fixed rounded-full mb-6" />
            <p className="text-base md:text-xl text-surface-white/90 leading-relaxed">
              {s.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm hover:brightness-105 transition-all shadow-lg active:scale-95"
              >
                {t.cta.primary}
                <DirectionalArrow className="text-base" />
              </Link>
              <a
                href="#sectors"
                className="inline-flex items-center justify-center px-8 py-4 border border-surface-white/60 text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-surface-white/10 transition-all active:scale-95"
              >
                {s.sectorsEyebrow}
              </a>
            </div>
          </motion.div>
        </Container>

        <div
          className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-background z-[2]"
          style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
        />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Offerings grid                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap bg-background relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -end-24 h-80 w-80 bg-contain bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: "url('/B2.png')" }}
        />
        <Container className="relative z-10">
          <SectionHeader
            eyebrow={s.offeringsEyebrow}
            title={s.offeringsTitle}
            className="mb-4"
          />
          <p className="max-w-2xl mx-auto text-center font-body-md text-body-md text-on-surface-variant mb-14">
            {s.offeringsSubtitle}
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {serviceOfferings.map((offering) => (
              <motion.div key={offering.key} variants={staggerItem}>
                <Link
                  href={offering.href}
                  className="group relative flex flex-col h-full p-7 rounded-2xl bg-surface-white border border-outline-variant shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:bg-primary hover:border-primary transition-all duration-300 overflow-hidden"
                >
                  <MaterialIcon
                    name={offering.icon}
                    className="pointer-events-none absolute -top-6 -end-6 text-[140px] text-primary opacity-[0.04] transition-all duration-300 group-hover:text-surface-white group-hover:opacity-[0.1]"
                  />
                  <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 text-primary mb-5 group-hover:bg-secondary-fixed group-hover:text-on-secondary-fixed transition-colors duration-300">
                    <MaterialIcon name={offering.icon} className="text-3xl" />
                  </span>
                  <h3 className="relative font-headline-md text-headline-md text-primary mb-3 group-hover:text-surface-white transition-colors duration-300">
                    {t.serviceItems[offering.key]}
                  </h3>
                  <p className="relative font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow group-hover:text-surface-white/85 transition-colors duration-300">
                    {s.details[offering.key]}
                  </p>
                  <span className="relative mt-6 inline-flex items-center gap-2 text-secondary font-label-sm text-label-sm group-hover:text-secondary-fixed group-hover:gap-3 transition-all">
                    {s.learnMore}
                    <DirectionalArrow className="text-base" />
                  </span>
                </Link>
              </motion.div>
            ))}

            {/* Featured — corporate & institutional services */}
            <motion.div variants={staggerItem} className="sm:col-span-2 lg:col-span-3">
              <Link
                href={corporateService.href}
                className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-8 md:p-10 rounded-3xl overflow-hidden text-surface-white shadow-lg bg-gradient-to-br from-[#3D1A5C] via-[#592194] to-[#7d29b5] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="pointer-events-none absolute -bottom-10 -end-10 w-56 h-56 bg-no-repeat bg-contain bg-right-bottom opacity-[0.1] transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
                  style={{ backgroundImage: "url('/logo-icon-white.png')" }}
                />
                <span className="relative shrink-0 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-surface-white/15 border border-surface-white/20 text-secondary-fixed backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                  <MaterialIcon name="domain" className="text-4xl md:text-5xl" />
                </span>
                <div className="relative flex-1">
                  <span className="inline-flex items-center gap-2.5 mb-3 rounded-full bg-surface-white/15 backdrop-blur-sm border border-surface-white/25 text-surface-white px-3.5 py-1.5 text-xs font-label-sm uppercase tracking-wide">
                    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary-fixed shadow-[0_0_8px_2px_rgba(255,145,0,0.7)]" />
                    </span>
                    {s.corporate.badge}
                  </span>
                  <h3 className="font-headline-lg text-headline-md md:text-headline-lg mb-3">
                    {s.corporate.title}
                  </h3>
                  <p className="font-body-md text-body-md text-surface-white/85 leading-relaxed max-w-2xl">
                    {s.corporate.description}
                  </p>
                </div>
                <span className="relative shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm group-hover:brightness-105 transition-all shadow-lg">
                  {s.corporate.cta}
                  <DirectionalArrow className="text-base" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Sectors carousel                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section id="sectors" className="py-section-gap bg-surface-container-low scroll-mt-24">
        <Container>
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4 block">
              {s.sectorsEyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              {s.sectorsTitle}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {s.sectorsSubtitle}
            </p>
          </motion.div>

          <SectorsCarousel />
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
              href="/locations"
              className="px-10 py-4 border border-surface-white text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-surface-white/10 transition-all active:scale-95 text-center"
            >
              {t.cta.secondary}
            </Link>
          </motion.div>
        </Container>
      </section>
    </SiteLayout>
  );
}
