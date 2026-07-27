"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SUCCESS_PARTNERS_TOTAL, successPartnerLogos } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";

type MarqueeRowProps = {
  logos: typeof successPartnerLogos;
  reverse?: boolean;
  logoAlt: string;
};

function MarqueeRow({ logos, reverse = false, logoAlt }: MarqueeRowProps) {
  const doubled = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden" dir="ltr">
      <div
        className={`flex w-max gap-4 sm:gap-5 ${
          reverse ? "partners-marquee-track-reverse" : "partners-marquee-track"
        }`}
      >
        {doubled.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex h-20 w-[9.5rem] sm:h-24 sm:w-44 shrink-0 items-center justify-center rounded-2xl bg-surface-white px-4 py-3 shadow-[0_10px_30px_-18px_rgba(42,16,64,0.35)] ring-1 ring-outline-variant/60"
          >
            <Image
              src={logo.src}
              alt={`${logoAlt} ${logo.id}`}
              width={160}
              height={72}
              className="max-h-12 sm:max-h-14 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Compact showcase of success-partner logos — used on Home and Expertise.
 * Dual marquees + CTA to the dedicated Partners page.
 */
export function SuccessPartnersTeaser() {
  const { t } = useLanguage();
  const copy = t.successPartners;
  const mid = Math.ceil(successPartnerLogos.length / 2);
  const rowA = successPartnerLogos.slice(0, mid);
  const rowB = successPartnerLogos.slice(mid);

  return (
    <section className="relative overflow-hidden py-section-gap bg-[#2a1040] text-surface-white">
      <div className="absolute inset-0 footer-gradient opacity-90" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: "url('/success.jpg')" }}
      />
      <div className="pointer-events-none absolute -top-24 -end-16 h-72 w-72 rounded-full bg-secondary-fixed/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -start-20 h-80 w-80 rounded-full bg-[#25D366]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-secondary-fixed font-label-sm text-label-sm uppercase tracking-[0.25em] mb-4 block">
              {copy.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-surface-white mb-4 max-w-xl">
              {copy.title}
            </h2>
            <p className="font-body-md text-body-md text-surface-white/80 leading-relaxed max-w-2xl">
              {copy.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end lg:text-end"
          >
            <div className="inline-flex items-baseline gap-2 rounded-2xl border border-surface-white/15 bg-surface-white/5 px-5 py-4 backdrop-blur-sm">
              <span className="text-3xl sm:text-4xl font-bold text-secondary-fixed leading-none">
                {SUCCESS_PARTNERS_TOTAL}+
              </span>
              <span className="text-xs uppercase tracking-wider text-surface-white/70 leading-snug text-start">
                {t.partnersPage.stats.partners}
              </span>
            </div>
            <Link
              href="/partners"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shadow-lg hover:brightness-105 transition-all active:scale-95"
            >
              {copy.cta}
              <DirectionalArrow className="text-base transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Full-bleed marquees for visual impact */}
      <div className="partners-marquee-pause relative z-10 space-y-4 sm:space-y-5">
        <div className="pointer-events-none absolute inset-y-0 start-0 w-16 sm:w-28 bg-gradient-to-r from-[#2a1040] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 end-0 w-16 sm:w-28 bg-gradient-to-l from-[#3a1760] to-transparent z-10" />
        <MarqueeRow logos={rowA} logoAlt={copy.logoAlt} />
        <MarqueeRow logos={rowB} reverse logoAlt={copy.logoAlt} />
      </div>

      <Container className="relative z-10 mt-10">
        <p className="flex items-center justify-center gap-2 text-xs text-surface-white/55 tracking-wide">
          <MaterialIcon name="verified" className="text-secondary-fixed text-base" />
          {t.partnersPage.intro.eyebrow}
        </p>
      </Container>
    </section>
  );
}
