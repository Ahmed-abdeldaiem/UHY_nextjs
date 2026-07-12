import Image from "next/image";
import { motion } from "motion/react";
import { assets, offices } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Office location cards — Cairo & Alexandria.
 * Alexandria card displays logo_alex.jpg instead of a Material icon.
 */
export function OfficeLocationsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap bg-surface-white" id="offices">
      <Container>
        <SectionHeader
          eyebrow={t.offices.sectionEyebrow}
          title={t.offices.sectionTitle}
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {offices.map((office) => {
            const officeText = t.offices[office.id];
            const isAlexandria = office.id === "alexandria";

            return (
              <motion.article
                key={office.id}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-surface-container p-8 rounded-2xl border border-outline-variant hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-2">
                      {officeText.name}
                    </h3>
                    {/* Alexandria uses branch logo; Cairo shows official company name */}
                    {isAlexandria ? (
                      <Image
                        src={assets.logos.alexandria}
                        alt={officeText.name}
                        width={250}
                        height={250}
                        className="h-10 w-full rounded-lg"
                      />
                    ) : (
                      <p className="text-sm text-on-surface-variant font-medium leading-snug max-w-md">
                        {officeText.company}
                      </p>
                    )}
                  </div>

               
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <MaterialIcon name="map" className="text-secondary text-sm" />
                    <p className="text-on-surface-variant text-sm">{officeText.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <MaterialIcon name="call" className="text-secondary text-sm" />
                    <p className="text-on-surface-variant text-sm">{office.phone}</p>
                  </div>
                  <div className="flex gap-3">
                    <MaterialIcon name="mail" className="text-secondary text-sm" />
                    <p className="text-on-surface-variant text-sm">{office.email}</p>
                  </div>

                  <div className="mt-4 p-4 bg-surface-white rounded-lg border border-outline-variant">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                      {t.offices.contactPartner}
                    </p>
                    <p className="text-sm font-semibold">{office.partner.name}</p>
                    <p className="text-xs text-on-surface-variant">{office.partner.email}</p>
                  </div>
                </div>

                <a
                  href={office.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded-lg font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all"
                >
                  <MaterialIcon name="directions" className="text-sm" />
                  {t.offices.getDirections}
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
