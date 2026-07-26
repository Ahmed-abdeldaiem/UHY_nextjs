import Image from "next/image";
import { motion } from "motion/react";
import { teamStrength } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Team Strength — a cinematic, brand-toned band celebrating the firm's
 * expertise, elite team and mega-project track record across Egypt and the
 * Arab world. Anchored by the WM "Upper Hand Young" branded banner.
 */
export function TeamStrengthSection() {
  const { t } = useLanguage();
  const c = t.teamStrength;

  return (
    <section className="relative overflow-hidden py-section-gap text-surface-white bg-[#3D1A5C]">
      {/* Subtle depth — darker toward the base */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#3D1A5C] via-[#341550] to-[#2a1040]" />
      {/* Brand graphic watermark (B1) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-no-repeat bg-center bg-contain opacity-[0.08]"
        style={{ backgroundImage: "url('/B1.png')" }}
      />
      {/* Soft golden glows for warmth */}
      <div className="pointer-events-none absolute -top-24 -start-24 w-96 h-96 rounded-full bg-secondary-fixed/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -end-24 w-[28rem] h-[28rem] rounded-full bg-primary-fixed/20 blur-3xl" />

      <Container className="relative z-10">
        {/* Heading + slogan + narrative */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            {...fadeInUp}
            className="inline-flex items-center gap-3 font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary-fixed-dim"
          >
            <span className="w-8 h-px bg-secondary-fixed/70" />
            {c.eyebrow}
            <span className="w-8 h-px bg-secondary-fixed/70" />
          </motion.span>

          <motion.h2
            {...fadeInUp}
            className="font-headline-lg text-headline-lg md:text-4xl text-white mt-5 leading-tight"
          >
            {c.title}
          </motion.h2>

          <motion.div
            {...fadeInUp}
            className="mt-6 flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
          >
            {c.slogan.map((word, index) => (
              <span key={word} className="flex items-center gap-3 sm:gap-4">
                {index > 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed" />
                )}
                <span className="font-label-sm text-sm sm:text-base uppercase tracking-[0.25em] text-secondary-fixed-dim">
                  {word}
                </span>
              </span>
            ))}
          </motion.div>

          <motion.p
            {...fadeInUp}
            className="mt-6 font-body-md text-body-md text-white/75 leading-relaxed"
          >
            {c.description}
          </motion.p>
        </div>

        {/* Expertise pillars */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter"
        >
          {teamStrength.features.map((feature) => (
            <motion.div
              key={feature.key}
              variants={staggerItem}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 hover:bg-white/[0.07] hover:border-secondary-fixed/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed/15 border border-secondary-fixed/25 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <MaterialIcon name={feature.icon} className="text-2xl text-secondary-fixed-dim" />
              </div>
              <h3 className="font-headline-md text-lg text-white mb-2">
                {c.features[feature.key].title}
              </h3>
              <p className="text-sm text-white/65 leading-relaxed">
                {c.features[feature.key].description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Branded banner — wide on desktop, square on mobile */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="mt-14 relative mx-auto max-w-md md:max-w-none"
        >
          <div className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-3xl bg-secondary-fixed/10 blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 ring-1 ring-white/5 shadow-2xl">
            <Image
              src={teamStrength.image.wide}
              alt={c.imageAlt}
              width={1600}
              height={400}
              sizes="(min-width: 768px) 1152px, 0px"
              className="hidden md:block w-full h-auto"
            />
            <Image
              src={teamStrength.image.square}
              alt={c.imageAlt}
              width={1024}
              height={1024}
              sizes="(max-width: 767px) 90vw, 0px"
              className="block md:hidden w-full h-auto"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
