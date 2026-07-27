"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { heroSlides, offices } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const AUTO_ADVANCE_MS = 6500;
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Full-width hero carousel showcasing the Cairo & Alexandria teams.
 * Auto-advances, pauses on hover, and is fully keyboard/RTL aware.
 */
export function HeroSection() {
  const { t, isRtl } = useLanguage();
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = heroSlides.length;
  const active = heroSlides[index];
  const activeOffice = offices.find((o) => o.id === active.branch)!;
  const slideText = t.hero.slides[active.id];

  const paginate = useCallback(
    (dir: number) => {
      setState(([current]) => [(current + dir + count) % count, dir]);
    },
    [count],
  );

  const goTo = useCallback(
    (target: number) => {
      setState(([current]) => [target, target > current ? 1 : -1]);
    },
    [],
  );

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => paginate(1), AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, isPaused, paginate]);

  // Arrow direction: "next" points toward reading direction end.
  const prevIcon = isRtl ? "chevron_right" : "chevron_left";
  const nextIcon = isRtl ? "chevron_left" : "chevron_right";
  const contentX = direction > 0 ? 40 : -40;

  return (
    <section
      className="relative w-full overflow-hidden -mt-[var(--site-header-height)] h-[680px] sm:h-[720px] lg:h-[840px] bg-primary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Background images — crossfade + slow Ken Burns zoom */}
      <AnimatePresence initial={false}>
        <motion.div
          key={active.id}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.18 }}
            transition={{ duration: AUTO_ADVANCE_MS / 1000 + 1.2, ease: "linear" }}
          >
            <Image
              src={active.image}
              alt={`${t.hero.branchLabel[active.branch]} — ${slideText.title}`}
              fill
              priority
              /* Mirror in Arabic so the subject sits opposite the RTL text */
              className={`object-cover ${isRtl ? "-scale-x-100" : ""}`}
              style={{ objectPosition: active.focus }}
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Overlays for legibility — directional overlay mirrors with the image in RTL */}
      <div className={`absolute inset-0 z-[1] hero-gradient ${isRtl ? "-scale-x-100" : ""}`} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />

      {/*
        Content + controls share one column so carousel chrome never overlaps CTAs.
        Bottom padding clears the PillarsSection (-mt-16) overlap.
        End padding on controls clears the floating WhatsApp / email rail on mobile.
      */}
      <Container className="relative z-10 h-full flex flex-col pt-[var(--site-header-height)] pb-16">
        <div className="flex-1 flex flex-col justify-end sm:justify-center min-h-0 pb-5 sm:pb-6">
          <div className="max-w-2xl w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: contentX }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -contentX }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <span className="inline-flex items-center gap-2.5 mb-3 sm:mb-5 px-3.5 sm:px-4 py-1.5 rounded-full bg-surface-white/15 backdrop-blur-sm border border-surface-white/25 text-surface-white text-label-sm font-label-sm">
                  <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary-fixed shadow-[0_0_8px_2px_rgba(255,145,0,0.7)]" />
                  </span>
                  {slideText.badge}
                </span>

                <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-surface-white mb-3 sm:mb-5">
                  {slideText.title}
                </h1>
                <p className="font-body-lg text-body-lg text-surface-white/90 mb-4 sm:mb-6 leading-relaxed max-w-xl">
                  {slideText.description}
                </p>

                {/* Branch contact chips */}
                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5 sm:mb-8 text-surface-white/85 text-sm">
                  <a
                    href={`tel:${activeOffice.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 hover:text-surface-white transition-colors"
                  >
                    <MaterialIcon name="call" className="text-base opacity-80" />
                    <span dir="ltr">{activeOffice.phone}</span>
                  </a>
                  <a
                    href={`mailto:${activeOffice.email}`}
                    className="inline-flex items-center gap-2 hover:text-surface-white transition-colors"
                  >
                    <MaterialIcon name="mail" className="text-base opacity-80" />
                    {activeOffice.email}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/services"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-center bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm hover:brightness-105 transition-all shadow-lg active:scale-95"
              >
                {t.hero.primaryCta}
              </Link>
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 justify-center border border-surface-white text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-surface-white/10 transition-all backdrop-blur-sm active:scale-95 inline-flex items-center gap-2"
              >
                {t.hero.contactCta}
                <MaterialIcon
                  name="arrow_forward"
                  className="text-base rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel controls — always below CTAs, clear of floating actions */}
        <div className="shrink-0 flex items-center justify-between gap-3 pe-16 sm:pe-0">
          <div className="flex items-center gap-2.5" role="tablist">
            {heroSlides.map((slide, i) => {
              const isActive = i === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`${t.hero.goToSlide} ${i + 1}`}
                  aria-selected={isActive}
                  role="tab"
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isActive
                      ? "w-10 bg-secondary-fixed"
                      : "w-2 bg-surface-white/50 hover:bg-surface-white/80"
                  }`}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label={t.hero.previousSlide}
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-surface-white/40 text-surface-white hover:bg-surface-white/15 backdrop-blur-sm transition-all active:scale-95"
            >
              <MaterialIcon name={prevIcon} className="text-xl sm:text-2xl" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label={t.hero.nextSlide}
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-surface-white/40 text-surface-white hover:bg-surface-white/15 backdrop-blur-sm transition-all active:scale-95"
            >
              <MaterialIcon name={nextIcon} className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
