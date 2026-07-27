import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  assets,
  expertiseGalleries,
  expertisePublications,
  expertiseStrengths,
} from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { LeadershipSection } from "@/components/sections/shared/LeadershipSection";
import { SuccessPartnersTeaser } from "@/components/sections/shared/SuccessPartnersTeaser";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const HERO_GRADIENT =
  "linear-gradient(105deg, #3D1A5C 0%, rgba(61,26,92,0.92) 32%, rgba(74,42,112,0.70) 56%, rgba(89,33,148,0.45) 80%, rgba(125,41,181,0.28) 100%)";

function isRasterNeedsUnoptimized(src: string) {
  return /\.jfif$/i.test(src);
}

/**
 * Expertise page — leadership strength, landmark publications and
 * professional presence at fairs, bookstores and universities.
 */
export default function ExpertisePage() {
  const { t, isRtl } = useLanguage();
  const e = t.expertisePage;

  return (
    <SiteLayout
      title={e.meta.title}
      description={e.meta.description}
      path="/expertise"
      ogImage={assets.images.expertiseHero}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Hero — T3.jpeg                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full overflow-hidden bg-primary min-h-[440px] md:min-h-[630px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.images.expertiseHero}
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
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1040]/75 via-transparent to-transparent" />

        <Container className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-secondary-fixed font-label-sm text-sm md:text-base uppercase tracking-[0.25em] mb-4 block">
              {e.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-surface-white mb-5 leading-tight">
              {e.hero.title}
            </h1>
            <span className="block w-16 h-1 bg-secondary-fixed rounded-full mb-6" />
            <p className="text-base md:text-xl text-surface-white/90 leading-relaxed">
              {e.hero.subtitle}
            </p>
          </motion.div>
        </Container>

        <div
          className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-background z-[2]"
          style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
        />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Team strength — four signature cards                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap bg-background relative overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-24 -end-24 h-80 w-80 bg-contain bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: "url('/logo-icon.png')" }}
        />
        <Container className="relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4 block">
              {e.strengths.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              {e.strengths.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {e.strengths.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6"
          >
            {expertiseStrengths.map((item, index) => {
              const copy = e.strengths.items[item.key];
              return (
                <motion.article
                  key={item.key}
                  variants={staggerItem}
                  className="group relative flex flex-col h-full min-h-[280px] p-7 rounded-3xl bg-surface-white border border-outline-variant shadow-sm overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:bg-primary hover:border-primary"
                >
                  {/* Warm glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-secondary-fixed/25 via-transparent to-transparent" />

                  {/* Brand watermark */}
                  <div
                    className="pointer-events-none absolute -bottom-6 -end-6 w-36 h-36 bg-contain bg-no-repeat bg-right-bottom opacity-0 scale-90 group-hover:opacity-[0.14] group-hover:scale-100 transition-all duration-500"
                    style={{ backgroundImage: "url('/logo-icon-white.png')" }}
                  />

                  {/* Index mark */}
                  <span className="absolute top-5 end-5 font-display-hero text-4xl text-primary/10 group-hover:text-surface-white/15 transition-colors duration-500 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/5 text-primary mb-6 transition-all duration-500 group-hover:bg-secondary-fixed group-hover:text-on-secondary-fixed group-hover:scale-110 group-hover:rotate-3">
                    <MaterialIcon name={item.icon} className="text-3xl" />
                  </span>

                  <h3 className="relative font-headline-md text-headline-md text-primary mb-3 leading-snug transition-colors duration-500 group-hover:text-surface-white">
                    {copy.title}
                  </h3>
                  <span className="relative block w-0 h-0.5 bg-secondary-fixed rounded-full mb-4 transition-all duration-500 group-hover:w-12" />
                  <p className="relative font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow transition-colors duration-500 group-hover:text-surface-white/85">
                    {copy.description}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Leadership (shared with About) */}
      <LeadershipSection />

      {/* ------------------------------------------------------------------ */}
      {/* Publications                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap bg-background relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -start-24 h-80 w-80 bg-contain bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: "url('/B2.png')" }}
        />
        <Container className="relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4 block">
              {e.publications.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              {e.publications.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {e.publications.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {expertisePublications.map((pub) => {
              const item = e.publications.items[pub.key];
              return (
                <motion.article
                  key={pub.key}
                  variants={staggerItem}
                  className="group flex flex-col h-full rounded-3xl bg-surface-white border border-outline-variant shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] bg-surface-container-low overflow-hidden">
                    <Image
                      src={pub.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a1040]/70 via-transparent to-transparent" />
                    <span className="absolute top-4 start-4 inline-flex items-center gap-2 rounded-full bg-surface-white/15 backdrop-blur-sm border border-surface-white/25 text-surface-white px-3 py-1.5 text-xs font-label-sm uppercase tracking-wide">
                      <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-fixed" />
                      </span>
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex flex-col flex-grow p-6 md:p-7">
                    <h3 className="font-headline-md text-headline-md text-primary mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary mb-3">{item.subtitle}</p>
                    <p className="text-xs uppercase tracking-wide text-on-surface-variant/80 mb-4">
                      {item.credit}
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow mb-6">
                      {item.description}
                    </p>
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary font-label-sm text-label-sm group-hover:gap-3 transition-all"
                    >
                      {e.publications.viewDetails}
                      <DirectionalArrow className="text-base" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Exhibitions & academic presence                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap bg-surface-container-low relative overflow-hidden">
        <Container>
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4 block">
              {e.presence.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              {e.presence.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {e.presence.subtitle}
            </p>
          </motion.div>

          <div className="space-y-14 md:space-y-16">
            {expertiseGalleries.map((gallery, galleryIndex) => {
              const copy = e.presence.galleries[gallery.key];
              const isFeaturedSingle = gallery.images.length === 1;

              return (
                <motion.div
                  key={gallery.key}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.55, delay: galleryIndex * 0.05 }}
                >
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
                    <div className="max-w-2xl">
                      <h3 className="font-headline-md text-headline-md text-primary mb-2">
                        {copy.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {copy.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant/70">
                      <MaterialIcon name="photo_library" className="text-base text-secondary" />
                      {gallery.images.length}
                    </span>
                  </div>

                  <div
                    className={
                      isFeaturedSingle
                        ? "grid grid-cols-1 max-w-3xl mx-auto"
                        : gallery.images.length === 3
                          ? "grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5"
                          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
                    }
                  >
                    {gallery.images.map((src, imageIndex) => (
                      <div
                        key={src}
                        className={`group relative overflow-hidden rounded-2xl border border-outline-variant bg-surface-white shadow-sm ${
                          isFeaturedSingle
                            ? "aspect-[16/10]"
                            : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${copy.title} — ${imageIndex + 1}`}
                          fill
                          unoptimized={isRasterNeedsUnoptimized(src)}
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes={
                            isFeaturedSingle
                              ? "(max-width: 768px) 100vw, 768px"
                              : "(max-width: 640px) 100vw, 25vw"
                          }
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1A5C]/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <SuccessPartnersTeaser />

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
