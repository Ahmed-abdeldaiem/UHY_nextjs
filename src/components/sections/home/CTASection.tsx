import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { fadeInUp } from "@/lib/animations";

/**
 * Bottom call-to-action band before the footer.
 */
export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10 signature-lines pointer-events-none" />

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
  );
}
