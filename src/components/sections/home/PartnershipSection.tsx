import Image from "next/image";
import { motion } from "motion/react";
import { partnershipImage, partnershipStats } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { fadeInUp, slideInFromSide } from "@/lib/animations";

/**
 * UHY International partnership — bilingual copy, team image, and global stats.
 */
export function PartnershipSection() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-section-gap bg-surface-container-low relative overflow-hidden">
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div className="lg:w-1/2" {...slideInFromSide(isRtl)}>
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4 block">
              {t.partnership.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              {t.partnership.title}
            </h2>
            <div className="space-y-4 text-on-surface-variant font-body-md leading-relaxed">
              <p>{t.partnership.paragraph1}</p>
              <p>{t.partnership.paragraph2}</p>
            </div>

            <div className="mt-8 pt-8 border-t border-outline-variant flex gap-8">
              {partnershipStats.map((stat, index) => (
                <div
                  key={stat.key}
                  className={index > 0 ? "border-s border-outline-variant ps-8" : ""}
                >
                  <div className="text-headline-md font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-on-surface-variant">
                    {t.partnership[stat.key]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="aspect-square bg-primary rounded-2xl rotate-3 absolute inset-0 opacity-5" />
            <div className="bg-surface-white p-2 rounded-2xl shadow-2xl relative">
              <Image
                src={partnershipImage.src}
                alt={t.partnership.imageAlt}
                width={600}
                height={600}
                className="rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="absolute -bottom-6 -end-6 bg-secondary-fixed text-on-secondary-fixed p-6 rounded-xl shadow-lg max-w-[200px]"
            >
              <p className="font-label-sm text-sm font-bold uppercase mb-1">
                {t.partnership.badgeTitle}
              </p>
              <p className="text-xs leading-tight">{t.partnership.badgeDescription}</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <div className="absolute top-0 end-0 w-1/4 h-1/2 signature-lines opacity-10 pointer-events-none" />
    </section>
  );
}
