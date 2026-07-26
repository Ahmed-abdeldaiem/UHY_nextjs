import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { assets, SERVICES_PAGE_HREF, services, type ServiceConfig } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { staggerContainer, staggerItem } from "@/lib/animations";

const HOVER_EASE = [0.22, 1, 0.36, 1] as const;
const HOVER_DURATION = 0.5;

const COL_SPAN_CLASSES: Record<ServiceConfig["colSpan"], string> = {
  4: "md:col-span-4",
  8: "md:col-span-8",
};

function getSurfaceClasses(service: ServiceConfig): string {
  const base =
    "h-full p-8 rounded-2xl cursor-pointer flex flex-col relative overflow-hidden transition-colors duration-500";

  switch (service.variant) {
    case "primary":
      return `${base} bg-primary border border-primary-container text-on-primary`;
    case "wide":
      return `${base} bg-surface-white border border-outline-variant justify-between group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary`;
    default:
      return `${base} bg-surface-white border border-outline-variant group-hover:bg-primary group-hover:border-primary group-hover:text-on-primary`;
  }
}

function ServiceCard({ service }: { service: ServiceConfig }) {
  const { t, isRtl } = useLanguage();
  const content = t.services[service.id];
  const isPrimary = service.variant === "primary";
  const isWide = service.variant === "wide";
  const arrowShift = isRtl ? -10 : 10;
  const cardVariants: Variants = {
    rest: {
      y: 0,
      scale: 1,
      boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
    hover: {
      y: -10,
      scale: 1.015,
      boxShadow: "0 28px 56px rgba(61, 26, 92, 0.28)",
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
  };

  const iconBadgeVariants: Variants = {
    rest: {
      scale: 1,
      y: 0,
      rotate: 0,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
    hover: {
      scale: 1.12,
      y: -4,
      rotate: isRtl ? -4 : 4,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
  };

  const contentVariants: Variants = {
    rest: {
      y: 0,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
    hover: {
      y: -2,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE, delay: 0.04 },
    },
  };

  const ctaGroupVariants: Variants = {
    rest: {
      transition: { staggerChildren: 0, staggerDirection: -1 },
    },
    hover: {
      transition: { staggerChildren: 0.07, delayChildren: 0.05 },
    },
  };

  const ctaTextVariants: Variants = {
    rest: {
      x: 0,
      opacity: 0.92,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
    hover: {
      x: isRtl ? 4 : -4,
      opacity: 1,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
  };

  const arrowVariants: Variants = {
    rest: {
      x: 0,
      opacity: 0.7,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
    hover: {
      x: arrowShift,
      opacity: 1,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
  };

  const logoVariants: Variants = {
    rest: {
      opacity: isPrimary ? 0.08 : 0,
      scale: 0.88,
      rotate: -6,
      transition: { duration: 0.45, ease: HOVER_EASE },
    },
    hover: {
      opacity: isPrimary ? 0.22 : 0.16,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.55, ease: HOVER_EASE },
    },
  };

  const glowVariants: Variants = {
    rest: {
      opacity: 0,
      transition: { duration: 0.4, ease: HOVER_EASE },
    },
    hover: {
      opacity: 1,
      transition: { duration: 0.5, ease: HOVER_EASE },
    },
  };

  const accentBarVariants: Variants = {
    rest: {
      scaleX: 0,
      transition: { duration: 0.35, ease: HOVER_EASE },
    },
    hover: {
      scaleX: 1,
      transition: { duration: 0.5, ease: HOVER_EASE, delay: 0.05 },
    },
  };

  return (
    <motion.div variants={staggerItem} className={COL_SPAN_CLASSES[service.colSpan]}>
      <Link href={SERVICES_PAGE_HREF} className="group block h-full">
        <motion.article
          className={getSurfaceClasses(service)}
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={cardVariants}
        >
          {isPrimary && (
            <>
              <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${assets.images.footerBackground})` }}
              />
              <div className="absolute inset-0 z-0 bg-primary/85" />
            </>
          )}

          {/* Warm glow wash on hover */}
          <motion.div
            variants={glowVariants}
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-secondary-fixed/20 via-transparent to-transparent"
          />

          {/* Official brand mark — fades in / strengthens on hover */}
          <motion.div
            variants={logoVariants}
            className="pointer-events-none absolute -bottom-4 -end-4 z-[1] w-36 h-36 md:w-44 md:h-44"
            aria-hidden="true"
          >
            <Image
              src={assets.logos.iconWhite}
              alt=""
              fill
              className="object-contain object-right-bottom"
              sizes="176px"
            />
          </motion.div>

          <motion.div
            variants={contentVariants}
            className={`relative z-10 ${isWide || isPrimary ? "" : ""}`}
          >
            <motion.span
              variants={iconBadgeVariants}
              className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors duration-500 ${
                isPrimary
                  ? "bg-surface-white/10 text-secondary-fixed"
                  : "bg-primary/5 text-primary group-hover:bg-secondary-fixed group-hover:text-on-secondary-fixed"
              }`}
            >
              <MaterialIcon name={service.icon} className="text-3xl" />
            </motion.span>

            <h3
              className={`font-headline-md text-headline-md mb-4 transition-colors duration-500 ${
                isPrimary ? "" : "text-primary group-hover:text-surface-white"
              }`}
            >
              {content.title}
            </h3>
            <motion.div
              variants={accentBarVariants}
              className="origin-start h-0.5 w-12 bg-secondary-fixed rounded-full mb-4"
            />
            <p
              className={`max-w-md transition-colors duration-500 ${
                isPrimary
                  ? "text-on-primary-container/90 flex-grow"
                  : `text-on-surface-variant group-hover:text-surface-white/85 ${!isWide ? "flex-grow" : ""}`
              }`}
            >
              {content.description}
            </p>
          </motion.div>

          <motion.div
            variants={ctaGroupVariants}
            className={`mt-8 flex items-center gap-2.5 font-label-sm relative z-10 transition-colors duration-500 ${
              isPrimary
                ? "text-on-primary"
                : "text-secondary group-hover:text-secondary-fixed"
            }`}
          >
            <motion.span variants={ctaTextVariants}>{content.cta}</motion.span>
            <motion.span variants={arrowVariants} className="inline-flex items-center">
              <DirectionalArrow className="text-base" />
            </motion.span>
          </motion.div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

/**
 * Bento-style service grid — Audit, Tax, Advisory, Corporate Finance.
 */
export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap bg-surface-container-low">
      <Container>
        <SectionHeader
          eyebrow={t.services.sectionEyebrow}
          title={t.services.sectionTitle}
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
