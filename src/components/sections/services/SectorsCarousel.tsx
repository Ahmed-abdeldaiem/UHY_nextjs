"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { serviceSectors } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const CARD_GAP = 24;

/** Alternating brand gradients keep the carousel unmistakably on-brand. */
const CARD_GRADIENTS = [
  "bg-gradient-to-br from-[#3D1A5C] to-[#592194]",
  "bg-gradient-to-br from-[#592194] to-[#7d29b5]",
  "bg-gradient-to-br from-[#2a1040] to-[#4a2a70]",
];

/**
 * Innovative sector slider — an auto-advancing, controllable carousel of
 * gradient sector cards. The track is laid out LTR for consistent transform
 * math; each card's text respects the active language direction.
 */
export function SectorsCarousel() {
  const { t, isRtl } = useLanguage();
  const c = t.servicesPage;

  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState(320 + CARD_GAP);
  const [perView, setPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = serviceSectors.length;
  const maxIndex = Math.max(0, total - perView);

  useEffect(() => {
    const measure = () => {
      const card = cardRef.current;
      const viewport = viewportRef.current;
      if (!card || !viewport) return;
      const cardWidth = card.offsetWidth + CARD_GAP;
      setStep(cardWidth);
      setPerView(Math.max(1, Math.floor((viewport.clientWidth + CARD_GAP) / cardWidth)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 3800);
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  const goTo = useCallback(
    (next: number) => {
      if (next < 0) setIndex(maxIndex);
      else if (next > maxIndex) setIndex(0);
      else setIndex(next);
    },
    [maxIndex],
  );

  // Track is laid out LTR, so advancing always shifts content left (negative x),
  // regardless of the page's reading direction.
  const offset = -index * step;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={viewportRef} dir="ltr" className="overflow-hidden">
        <motion.div
          className="flex"
          style={{ gap: CARD_GAP }}
          animate={{ x: offset }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {serviceSectors.map((sector, i) => {
            const item = c.sectorItems[sector.key];
            return (
              <div
                key={sector.key}
                data-card
                ref={i === 0 ? cardRef : undefined}
                className="shrink-0 w-[80vw] sm:w-[300px] lg:w-[320px]"
              >
                <article
                  dir={isRtl ? "rtl" : "ltr"}
                  className={`group relative h-72 rounded-3xl overflow-hidden p-7 flex flex-col justify-end text-surface-white shadow-lg ring-1 ring-surface-white/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:ring-secondary-fixed/40 ${
                    CARD_GRADIENTS[i % CARD_GRADIENTS.length]
                  }`}
                >
                  {/* Branded logo watermark */}
                  <div
                    className="pointer-events-none absolute -bottom-6 -end-6 w-44 h-44 bg-no-repeat bg-contain bg-right-bottom opacity-[0.08] transition-all duration-500 group-hover:opacity-20 group-hover:scale-110"
                    style={{ backgroundImage: "url('/logo-icon-white.png')" }}
                  />
                  {/* Warm glow on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-secondary-fixed/25 via-transparent to-transparent" />

                  <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-white/15 border border-surface-white/20 text-secondary-fixed backdrop-blur-sm mb-auto transition-all duration-500 group-hover:bg-secondary-fixed group-hover:text-on-secondary-fixed group-hover:scale-110">
                    <MaterialIcon name={sector.icon} className="text-3xl" />
                  </span>
                  <h3 className="relative font-headline-md text-headline-md leading-tight mt-6 mb-2 transition-transform duration-500 group-hover:-translate-y-0.5">
                    {item.title}
                  </h3>
                  <p className="relative font-body-md text-body-md text-surface-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-secondary-fixed"
                  : "w-2 bg-outline hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        <div dir="ltr" className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label={c.sectorPrev}
            title={c.sectorPrev}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-outline text-primary hover:bg-primary hover:text-surface-white hover:border-transparent transition-all active:scale-95"
          >
            <MaterialIcon name="chevron_left" className="text-2xl" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label={c.sectorNext}
            title={c.sectorNext}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-outline text-primary hover:bg-primary hover:text-surface-white hover:border-transparent transition-all active:scale-95"
          >
            <MaterialIcon name="chevron_right" className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
