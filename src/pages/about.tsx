import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  aboutImages,
  aboutStats,
  aboutValues,
  boksStats,
  pillarGradients,
  pillarKeys,
} from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { LeadershipSection } from "@/components/sections/shared/LeadershipSection";
import { fadeInUp, slideInFromSide } from "@/lib/animations";

const pillarBackgrounds = {
  dark: "linear-gradient(to bottom, var(--color-brand-gradient-dark-from), var(--color-brand-gradient-dark-to))",
  bright: "linear-gradient(to bottom, var(--color-brand-gradient-bright-from), var(--color-brand-gradient-bright-to))",
  accent: "linear-gradient(to bottom, var(--color-brand-gradient-accent-from), var(--color-brand-gradient-accent-to))",
} as const;

/**
 * About page — inspired by the BOKS International "About" header treatment.
 * Sections: angled hero, story, stats band, global partnership, values,
 * purpose (goal/vision/mission), and closing CTA.
 */
export default function AboutPage() {
  const { t, isRtl } = useLanguage();
  const a = t.about;

  return (
    <SiteLayout title={a.meta.title} description={a.meta.description} path="/about">
      {/* ------------------------------------------------------------------ */}
      {/* Hero — full-bleed image, purple overlay, angled bottom edge         */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full  overflow-hidden bg-primary min-h-[460px] md:min-h-[620px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={aboutImages.hero}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* BOKS-style purple duotone — deep on the text side, lighter over the image */}
        <div
          className={`absolute inset-0 z-[1] ${isRtl ? "-scale-x-100" : ""}`}
          style={{
            background:
              "linear-gradient(105deg, #3D1A5C 0%, rgba(61,26,92,0.92) 32%, rgba(74,42,112,0.70) 56%, rgba(89,33,148,0.45) 80%, rgba(125,41,181,0.28) 100%)",
          }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1040]/70 via-transparent to-transparent" />

        <Container className="relative z-10   w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-secondary-fixed font-label-sm text-sm md:text-base uppercase tracking-[0.25em] mb-4 block">
              {a.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-surface-white mb-5 leading-tight">
              {a.hero.title}
            </h1>
            <span className="block w-16 h-1 bg-secondary-fixed rounded-full mb-6" />
            <p className="text-base md:text-xl text-surface-white/90 leading-relaxed">
              {a.hero.subtitle}
            </p>
          </motion.div>
        </Container>

        {/* Angled white transition into the next section */}
        <div
          className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-background z-[2]"
          style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
        />
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Story                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap bg-background relative overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div className="lg:w-1/2" {...slideInFromSide(isRtl)}>
              <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4 block">
                {a.story.eyebrow}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                {a.story.title}
              </h2>
              <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
                <p>{a.story.paragraph1}</p>
                <p>{a.story.paragraph2}</p>
                <p>{a.story.paragraph3}</p>
              </div>
              <div className="mt-8 flex items-start gap-3 ps-5 border-s-4 border-secondary-fixed">
                <p className="font-headline-md text-headline-md text-primary italic">
                  {a.story.highlight}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative w-full"
              initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-3 bg-primary/5 rounded-3xl -rotate-2" />
              <div className="bg-surface-white p-2 rounded-2xl shadow-2xl relative">
                <Image
                  src={aboutImages.story}
                  alt={a.story.imageAlt}
                  width={640}
                  height={480}
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <motion.div
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.3 }}
                className="absolute -bottom-6 -start-6 bg-secondary-fixed text-on-secondary-fixed px-6 py-5 rounded-xl shadow-lg"
              >
                <div className="font-display-hero text-headline-lg leading-none">25+</div>
                <div className="text-xs uppercase tracking-wide mt-1 font-label-sm">
                  {a.stats.years}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Stats band                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="pb-section-gap bg-background">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant rounded-2xl overflow-hidden border border-outline-variant">
            {aboutStats.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-surface-white p-8 text-center flex flex-col items-center"
              >
                <MaterialIcon name={stat.icon} className="text-secondary text-4xl mb-3" />
                <div className="font-display-hero text-headline-lg text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-on-surface-variant mt-1">
                  {a.stats[stat.key]}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Global partnership — footer.jpg background + BOKS figures           */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden py-section-gap text-surface-white">
        <div className="absolute inset-0 z-0 footer-gradient" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-25"
          style={{ backgroundImage: `url(${aboutImages.partnershipBackground})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        <Container className="relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-secondary-fixed font-label-sm text-label-sm uppercase tracking-[0.25em] mb-4 block">
              {a.partnership.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-surface-white mb-5">
              {a.partnership.title}
            </h2>
            <p className="font-body-lg text-body-lg text-surface-white/85 leading-relaxed">
              {a.partnership.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {boksStats.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="rounded-2xl bg-surface-white/10 border border-surface-white/15 backdrop-blur-sm p-6 md:p-8 text-center hover:bg-surface-white/15 hover:-translate-y-1 transition-all duration-300"
              >
                <MaterialIcon
                  name={stat.icon}
                  className="text-secondary-fixed text-4xl mb-3"
                />
                <div className="font-display-hero text-headline-lg text-surface-white">
                  {stat.value}
                </div>
                <div className="text-sm text-surface-white/75 mt-1">
                  {a.partnership[stat.key]}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Values                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap bg-background relative overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-20 -start-20 h-80 w-80 bg-contain bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: "url('/B2.png')" }}
        />
        <Container className="relative z-10">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center mb-14">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4 block">
              {a.values.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              {a.values.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {a.values.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutValues.map((value, index) => (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-surface-white rounded-2xl p-8 border border-outline-variant shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 text-primary mb-5 group-hover:bg-secondary-fixed group-hover:text-on-secondary-fixed transition-colors duration-300">
                  <MaterialIcon name={value.icon} className="text-3xl" />
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">
                  {a.values[value.key].title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {a.values[value.key].description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <LeadershipSection />

      {/* ------------------------------------------------------------------ */}
      {/* Purpose — Goal / Vision / Mission                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-gap bg-surface-container-low">
        <Container>
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              {a.pillarsTitle}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {a.pillarsSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillarKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ background: pillarBackgrounds[pillarGradients[key]] }}
                className="flex flex-col rounded-2xl px-8 py-10 md:px-10 md:py-12 min-h-[280px] shadow-lg"
              >
                <h3 className="font-headline-lg text-headline-md text-surface-white mb-4">
                  {t.pillars[key].title}
                </h3>
                <p className="font-body-md text-body-md text-surface-white/90 leading-relaxed flex-1">
                  {t.pillars[key].description}
                </p>
              </motion.div>
            ))}
          </div>
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
