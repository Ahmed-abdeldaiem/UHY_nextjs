import Link from "next/link";
import { motion } from "motion/react";
import { pillarGradients, pillarKeys } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { DirectionalArrow, directionalArrowHoverClass } from "@/components/ui/DirectionalArrow";

/** Official brand gradients — keep in sync with globals.css */
const pillarBackgrounds = {
  dark: "linear-gradient(to bottom, #0b573a, #1e7b51)",
  bright: "linear-gradient(to bottom, #5cb23e, #51a13e)",
  teal: "linear-gradient(to bottom, #009ca4, #23b4ba)",
} as const;

/**
 * Goal, Vision & Mission — three brand-gradient cards below the hero.
 */
export function PillarsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-20 -mt-16 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] px-4">
        {pillarKeys.map((key, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: pillarBackgrounds[pillarGradients[key]] }}
            className="flex flex-col px-8 py-10 md:px-10 md:py-12 min-h-[280px] md:min-h-[320px]"
          >
            <h3 className="font-headline-lg text-headline-md text-surface-white mb-4">
              {t.pillars[key].title}
            </h3>
            <p className="font-body-md text-body-md text-surface-white/90 leading-relaxed flex-1 mb-8">
              {t.pillars[key].description}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-surface-white hover:text-surface-white/80 transition-colors group w-fit"
            >
              {t.pillars.cta}
              <DirectionalArrow className={`text-base ${directionalArrowHoverClass}`} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
