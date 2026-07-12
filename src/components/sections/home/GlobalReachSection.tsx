import { motion } from "motion/react";
import { globalReachStats } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { DirectionalArrow, directionalArrowHoverClass } from "@/components/ui/DirectionalArrow";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { fadeInUp } from "@/lib/animations";

/**
 * Global network banner — narrative copy + animated stat cards.
 */
export function GlobalReachSection() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap overflow-hidden bg-surface-container-low">
      <Container className="flex flex-col md:flex-row items-center gap-12">
        <motion.div {...fadeInUp} className="flex-1">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            {t.globalReach.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-lg">
            {t.globalReach.description}
          </p>
          <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm hover:underline cursor-pointer group">
            {t.globalReach.cta}
            <DirectionalArrow className={directionalArrowHoverClass} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-1 relative"
        >
          <div className="bg-surface-white p-8 rounded-2xl relative overflow-hidden shadow-sm border border-outline-variant">
            <div className="grid grid-cols-2 gap-4">
              {globalReachStats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className={`bg-surface-container p-6 rounded-xl border border-outline-variant ${
                    index === 1 ? "translate-y-6" : ""
                  }`}
                >
                  <MaterialIcon name={stat.icon} className="text-primary text-4xl mb-2" />
                  <div className="text-headline-md font-bold text-primary">{stat.value}</div>
                  <div className="text-on-surface-variant text-sm">
                    {t.globalReach[stat.key]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
