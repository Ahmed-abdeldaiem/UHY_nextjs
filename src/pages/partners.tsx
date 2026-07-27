import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  assets,
  SUCCESS_PARTNERS_TOTAL,
  successPartnerLogos,
} from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { fadeInUp, staggerItem } from "@/lib/animations";

const HERO_GRADIENT =
  "linear-gradient(105deg, #3D1A5C 0%, rgba(61,26,92,0.92) 30%, rgba(74,42,112,0.72) 55%, rgba(89,33,148,0.48) 78%, rgba(125,41,181,0.3) 100%)";

/**
 * Dedicated Success Partners page — institutional logo wall + SEO.
 */
export default function PartnersPage() {
  const { t, isRtl } = useLanguage();
  const p = t.partnersPage;

  const stats = [
    { value: `${SUCCESS_PARTNERS_TOTAL}+`, label: p.stats.partners, icon: "handshake" },
    { value: "25+", label: p.stats.institutions, icon: "apartment" },
    { value: "100%", label: p.stats.trust, icon: "verified" },
  ] as const;

  return (
    <SiteLayout
      title={p.meta.title}
      description={p.meta.description}
      path="/partners"
      ogImage={assets.images.partnersHero}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full overflow-hidden bg-primary min-h-[440px] md:min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.images.partnersHero}
            alt=""
            fill
            priority
            className={`object-cover object-[center_40%] ${isRtl ? "-scale-x-100" : ""}`}
            sizes="100vw"
          />
        </div>
        <div
          className={`absolute inset-0 z-[1] ${isRtl ? "-scale-x-100" : ""}`}
          style={{ background: HERO_GRADIENT }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1040]/80 via-transparent to-transparent" />

        <Container className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-secondary-fixed font-label-sm text-sm md:text-base uppercase tracking-[0.25em] mb-4 block">
              {p.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-surface-white mb-5 leading-tight">
              {p.hero.title}
            </h1>
            <span className="block w-16 h-1 bg-secondary-fixed rounded-full mb-6" />
            <p className="text-base md:text-xl text-surface-white/90 leading-relaxed">
              {p.hero.subtitle}
            </p>
          </motion.div>
        </Container>

        <div
          className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-background z-[2]"
          style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
        />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Intro + stats                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap bg-background relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-16 -end-16 h-72 w-72 bg-contain bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: "url('/B2.png')" }}
        />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end mb-14">
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.25em] mb-4 block">
                {p.intro.eyebrow}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-5">
                {p.intro.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-2xl border-s-2 border-secondary-fixed ps-5">
                {p.intro.body}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-5 grid grid-cols-3 gap-3 sm:gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-surface-white border border-outline-variant p-4 sm:p-5 text-center shadow-sm"
                >
                  <MaterialIcon name={stat.icon} className="text-secondary text-xl mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-primary leading-none mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wide text-on-surface-variant leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Logo wall */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.25em] mb-3 block">
              {p.grid.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary mb-3">
              {p.grid.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {p.grid.subtitle}
            </p>
          </div>

          <motion.ul
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.04, delayChildren: 0.05 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
          >
            {successPartnerLogos.map((logo) => (
              <motion.li
                key={logo.id}
                variants={staggerItem}
                className="group relative"
              >
                <div className="relative flex aspect-[5/3] items-center justify-center rounded-2xl bg-surface-white border border-outline-variant px-4 py-5 shadow-sm transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-secondary/40">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-secondary-fixed/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <Image
                    src={logo.src}
                    alt={logo.alt ?? `${t.successPartners.logoAlt} ${logo.id}`}
                    width={180}
                    height={90}
                    className="max-h-12 sm:max-h-14 md:max-h-16 w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 signature-lines text-surface-white pointer-events-none" />
        <div
          className="pointer-events-none absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${assets.images.partnersHero})` }}
        />
        <Container className="max-w-4xl text-center relative z-10">
          <motion.h2
            {...fadeInUp}
            className="font-display-hero text-headline-lg text-surface-white mb-6"
          >
            {p.cta.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-surface-white/80 font-body-lg text-body-lg mb-10"
          >
            {p.cta.description}
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
              {p.cta.primary}
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 border border-surface-white text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-surface-white/10 transition-all active:scale-95 text-center"
            >
              {p.cta.secondary}
            </Link>
          </motion.div>
        </Container>
      </section>
    </SiteLayout>
  );
}
