import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SERVICES_PAGE_HREF, sectors } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Industry sector cards with hover-reveal descriptions.
 */
export function SectorFocusSection() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap bg-surface-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
              {t.sectors.sectionEyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-4">
              {t.sectors.sectionTitle}
            </h2>
          </div>
          <Link
            href={`${SERVICES_PAGE_HREF}#sectors`}
            className="px-6 py-3 border border-outline text-primary rounded-lg font-label-sm text-label-sm hover:bg-surface-container transition-all"
          >
            {t.sectors.allSectors}
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sectors.map((sector) => {
            const content = t.sectors[sector.id];
            return (
              <motion.article
                key={sector.id}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={sector.image.src}
                  alt={content.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 start-0 p-8">
                  <h4 className="text-surface-white font-headline-md text-headline-md mb-2">
                    {content.title}
                  </h4>
                  <p className="text-surface-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {content.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
