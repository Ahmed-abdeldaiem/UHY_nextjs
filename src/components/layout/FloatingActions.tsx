"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { officialContact } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BrandIcon } from "@/components/ui/BrandIcon";

/**
 * Persistent floating utilities:
 *  - Contact rail (WhatsApp + Email) pinned to one side, always visible.
 *  - Back-to-top button on the opposite side, revealed after scrolling.
 */
export function FloatingActions() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Contact rail — WhatsApp + Email */}
      <div className="fixed z-40 bottom-5 sm:bottom-6 end-4 sm:end-6 flex flex-col items-center gap-3">
        <a
          href={officialContact.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.floating.whatsapp}
          title={t.floating.whatsapp}
          className="group relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping group-hover:opacity-0" />
          <BrandIcon platform="whatsapp" className="relative w-6 h-6 sm:w-7 sm:h-7" />
        </a>

        <a
          href={`mailto:${officialContact.email}`}
          aria-label={t.floating.email}
          title={t.floating.email}
          className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3D1A5C] text-white shadow-lg shadow-black/20 hover:bg-primary hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
        >
          <MaterialIcon name="mail" className="text-2xl sm:text-[26px]" />
        </a>
      </div>

      {/* Back to top — opposite side, appears on scroll */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label={t.floating.backToTop}
            title={t.floating.backToTop}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-40 bottom-5 sm:bottom-6 start-4 sm:start-6 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-surface-white/90 text-primary border border-outline-variant backdrop-blur-sm shadow-md hover:bg-[#ff9100] hover:text-white hover:border-transparent hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            <MaterialIcon name="arrow_upward" className="text-xl sm:text-2xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
