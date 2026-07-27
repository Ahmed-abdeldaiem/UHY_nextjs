import Link from "next/link";
import { motion } from "motion/react";
import { offices, officialContact } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ContactPartnerCard } from "@/components/ui/ContactPartnerCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Office location cards — Cairo & Alexandria.
 * Shared contact partner sits centered below both cards.
 */
export function OfficeLocationsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap bg-surface-white" id="offices">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionHeader
            eyebrow={t.offices.sectionEyebrow}
            title={t.offices.sectionTitle}
            align="left"
            className="mb-0"
          />
          <Link
            href="/locations"
            className="shrink-0 px-6 py-3 border border-outline text-primary rounded-lg font-label-sm text-label-sm hover:bg-surface-container transition-all self-start lg:self-auto"
          >
            {t.offices.viewAllLocations}
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {offices.map((office) => {
            const officeText = t.offices[office.id];

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
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <MaterialIcon name="map" className="text-secondary text-sm" />
                    <p className="text-on-surface-variant text-sm">{officeText.address}</p>
                  </div>
                  <div className="flex gap-3">
                    <MaterialIcon name="call" className="text-secondary text-sm" />
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-on-surface-variant/70 mb-0.5">
                        {t.offices.phoneLabel}
                      </p>
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                        dir="ltr"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MaterialIcon name="smartphone" className="text-secondary text-sm" />
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-on-surface-variant/70 mb-0.5">
                        {t.offices.mobileLabel}
                      </p>
                      <a
                        href={officialContact.whatsapp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                        dir="ltr"
                      >
                        {office.mobile}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MaterialIcon name="mail" className="text-secondary text-sm" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-on-surface-variant text-sm hover:text-primary transition-colors"
                    >
                      {office.email}
                    </a>
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

        <ContactPartnerCard className="mt-10" />
      </Container>
    </section>
  );
}
