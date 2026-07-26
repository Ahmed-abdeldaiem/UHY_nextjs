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
      className="relative w-full overflow-hidden -mt-[var(--site-header-height)] h-[640px] sm:h-[720px] lg:h-[840px] bg-primary"
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

      {/* Content */}
      <Container className="relative z-10 h-full flex flex-col justify-center pt-[var(--site-header-height)] pb-24">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: contentX }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -contentX }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full bg-surface-white/15 backdrop-blur-sm border border-surface-white/25 text-surface-white text-label-sm font-label-sm">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary-fixed shadow-[0_0_8px_2px_rgba(255,145,0,0.7)]" />
                </span>
                {slideText.badge}
              </span>

              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-surface-white mb-5">
                {slideText.title}
              </h1>
              <p className="font-body-lg text-body-lg text-surface-white/90 mb-6 leading-relaxed max-w-xl">
                {slideText.description}
              </p>

              {/* Branch contact chips */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-surface-white/85 text-sm">
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

          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="px-8 py-4 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm hover:brightness-105 transition-all shadow-lg active:scale-95"
            >
              {t.hero.primaryCta}
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-4 border border-surface-white text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-surface-white/10 transition-all backdrop-blur-sm active:scale-95 inline-flex items-center gap-2"
            >
              {t.hero.contactCta}
              <MaterialIcon
                name="arrow_forward"
                className="text-base rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>

      {/* Controls — kept clear of the overlapping section below */}
      <Container className="absolute inset-x-0 bottom-20 sm:bottom-24 z-20">
        <div className="flex items-center justify-between gap-4">
          {/* Dots */}
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

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label={t.hero.previousSlide}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-surface-white/40 text-surface-white hover:bg-surface-white/15 backdrop-blur-sm transition-all active:scale-95"
            >
              <MaterialIcon name={prevIcon} className="text-2xl" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label={t.hero.nextSlide}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-surface-white/40 text-surface-white hover:bg-surface-white/15 backdrop-blur-sm transition-all active:scale-95"
            >
              <MaterialIcon name={nextIcon} className="text-2xl" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
