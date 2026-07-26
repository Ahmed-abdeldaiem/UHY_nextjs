import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { assets, offices, officialContact, socialLinks } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ContactForm } from "@/components/sections/contact/ContactForm";

/** Purple duotone shared with the About hero */
const HERO_GRADIENT =
  "linear-gradient(105deg, #3D1A5C 0%, rgba(61,26,92,0.92) 32%, rgba(74,42,112,0.70) 56%, rgba(89,33,148,0.45) 80%, rgba(125,41,181,0.28) 100%)";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
  const { t, isRtl } = useLanguage();
  const c = t.contact;

  return (
    <SiteLayout
      title={c.meta.title}
      description={c.meta.description}
      path="/contact"
      ogImage={assets.images.contactHero}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full overflow-hidden bg-primary min-h-[45vh] md:min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.images.contactHero}
            alt=""
            fill
            priority
            className={`object-cover object-center ${isRtl ? "-scale-x-100" : ""}`}
            sizes="100vw"
          />
        </div>
        <div
          className={`absolute inset-0 z-[1] ${isRtl ? "-scale-x-100" : ""}`}
          style={{ background: HERO_GRADIENT }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1040]/70 via-transparent to-transparent" />

        <Container className="relative z-10 w-full py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-2xl"
          >
            <span className="mb-4 block font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary-fixed">
              {c.hero.eyebrow}
            </span>
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-surface-white">
              {c.hero.title}
            </h1>
            <span className="mb-6 block h-1 w-16 rounded-full bg-secondary-fixed" />
            <p className="max-w-xl text-sm leading-relaxed text-surface-white/90 md:text-lg">
              {c.hero.subtitle}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Split card — info panel + form                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative bg-background pb-section-gap">
        <Container className="relative z-10 -mt-16 md:-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="grid grid-cols-1 overflow-hidden rounded-3xl border border-outline-variant bg-surface-white shadow-2xl lg:grid-cols-5"
          >
            {/* Info panel */}
            <div className="relative overflow-hidden p-8 text-surface-white footer-gradient md:p-10 lg:col-span-2">
              {/* Brand watermark */}
              <div
                className="pointer-events-none absolute -bottom-10 -end-10 z-0 h-56 w-56 bg-contain bg-no-repeat opacity-[0.07]"
                style={{ backgroundImage: "url('/B1.png')" }}
              />

              <div className="relative z-10">
                <Image
                  src={assets.logos.iconWhite}
                  alt="BOKS International Egypt"
                  width={56}
                  height={56}
                  className="mb-6 h-12 w-auto object-contain"
                />
                <h2 className="font-headline-md text-headline-md">{c.info.title}</h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-surface-white/75">
                  {c.info.description}
                </p>

                {/* Direct channels */}
                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${officialContact.email}`}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-white/10 border border-surface-white/15 transition-colors group-hover:bg-secondary-fixed group-hover:border-transparent">
                      <MaterialIcon name="mail" className="text-xl" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-surface-white/50">
                        {c.info.emailLabel}
                      </span>
                      <span className="block truncate text-sm font-medium text-surface-white group-hover:text-secondary-fixed transition-colors">
                        {officialContact.email}
                      </span>
                    </span>
                  </a>

                  <a
                    href={officialContact.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface-white/10 border border-surface-white/15 transition-colors group-hover:bg-[#25D366] group-hover:border-transparent">
                      <BrandIcon platform="whatsapp" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-surface-white/50">
                        {c.info.whatsappLabel}
                      </span>
                      <span className="block text-sm font-medium text-surface-white" dir="ltr">
                        {officialContact.whatsapp.display}
                      </span>
                    </span>
                  </a>
                </div>

                {/* Offices */}
                <div className="mt-8 border-t border-surface-white/15 pt-6">
                  <p className="mb-4 text-xs uppercase tracking-widest text-surface-white/50">
                    {c.info.officesTitle}
                  </p>
                  <div className="space-y-5">
                    {offices.map((office) => (
                      <div key={office.id} className="flex items-start gap-3">
                        <MaterialIcon
                          name="location_on"
                          className="mt-0.5 shrink-0 text-base text-secondary-fixed"
                        />
                        <div className="text-sm">
                          <p className="font-semibold text-surface-white">
                            {t.offices[office.id].name}
                          </p>
                          <p className="mt-0.5 leading-relaxed text-surface-white/70">
                            {t.offices[office.id].address}
                          </p>
                          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1">
                            <a
                              href={`tel:${office.phone.replace(/\s/g, "")}`}
                              className="inline-flex items-center gap-1.5 text-surface-white/80 hover:text-secondary-fixed transition-colors"
                              dir="ltr"
                            >
                              <MaterialIcon name="call" className="text-sm" />
                              {office.phone}
                            </a>
                            <a
                              href={office.directionsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-surface-white/80 hover:text-secondary-fixed transition-colors"
                            >
                              <MaterialIcon name="near_me" className="text-sm" />
                              {t.offices.getDirections}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8 border-t border-surface-white/15 pt-6">
                  <p className="mb-3 text-xs uppercase tracking-widest text-surface-white/50">
                    {c.info.followTitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {socialLinks.map((social) => {
                      const cls =
                        "inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface-white/10 border border-surface-white/15 text-surface-white/85 transition-all duration-300 hover:bg-secondary-fixed hover:text-on-secondary-fixed hover:border-transparent hover:-translate-y-0.5";
                      return social.href ? (
                        <a
                          key={social.platform}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.platform}
                          className={cls}
                        >
                          <BrandIcon platform={social.platform} className="h-4 w-4" />
                        </a>
                      ) : (
                        <span
                          key={social.platform}
                          aria-label={social.platform}
                          className={`${cls} cursor-default`}
                        >
                          <BrandIcon platform={social.platform} className="h-4 w-4" />
                        </span>
                      );
                    })}
                  </div>
                </div>

                <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-surface-white/10 px-3 py-1.5 text-xs text-surface-white/85">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-fixed" />
                  {c.info.responseNote}
                </p>
              </div>
            </div>

            {/* Form panel */}
            <div className="p-8 md:p-10 lg:col-span-3">
              <ContactForm />
            </div>
          </motion.div>
        </Container>
      </section>
    </SiteLayout>
  );
}
