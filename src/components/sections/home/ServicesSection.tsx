import { motion, type Variants } from "motion/react";
import { services, type ServiceConfig } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { staggerContainer, staggerItem } from "@/lib/animations";

const HOVER_EASE = [0.22, 1, 0.36, 1] as const;
const HOVER_DURATION = 0.55;

const COL_SPAN_CLASSES: Record<ServiceConfig["colSpan"], string> = {
  4: "md:col-span-4",
  8: "md:col-span-8",
};

function getSurfaceClasses(service: ServiceConfig): string {
  const base = "h-full p-8 rounded-2xl cursor-pointer flex flex-col relative overflow-hidden";

  switch (service.variant) {
    case "primary":
      return `${base} bg-primary border border-primary-container text-on-primary`;
    case "wide":
      return `${base} bg-surface-white border border-outline-variant justify-between`;
    default:
      return `${base} bg-surface-white border border-outline-variant`;
  }
}

function ServiceCard({ service }: { service: ServiceConfig }) {
  const { t, isRtl } = useLanguage();
  const content = t.services[service.id];
  const isPrimary = service.variant === "primary";
  const isWide = service.variant === "wide";
  const arrowShift = isRtl ? -8 : 8;

  const cardVariants: Variants = {
    rest: {
      y: 0,
      scale: 1,
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
    hover: {
      y: -6,
      scale: 1.02,
      boxShadow: isPrimary
        ? "0 22px 44px rgba(0, 82, 50, 0.28)"
        : "0 22px 44px rgba(15, 23, 42, 0.12)",
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
  };

  const iconVariants: Variants = {
    rest: {
      scale: 1,
      y: 0,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
    hover: {
      scale: 1.08,
      y: -3,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE, delay: 0.05 },
    },
  };

  const ctaGroupVariants: Variants = {
    rest: {
      transition: { staggerChildren: 0, staggerDirection: -1 },
    },
    hover: {
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const ctaTextVariants: Variants = {
    rest: {
      x: 0,
      opacity: 0.92,
      transition: { duration: HOVER_DURATION, ease: HOVER_EASE },
    },
    hover: {
      x: isRtl ? 3 : -3,
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

  const bgIconVariants: Variants = {
    rest: {
      opacity: 0.05,
      scale: 1,
      transition: { duration: 0.65, ease: HOVER_EASE },
    },
    hover: {
      opacity: 0.11,
      scale: 1.04,
      transition: { duration: 0.65, ease: HOVER_EASE },
    },
  };

  return (
    <motion.div variants={staggerItem} className={COL_SPAN_CLASSES[service.colSpan]}>
      <motion.article
        className={getSurfaceClasses(service)}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardVariants}
      >
        <motion.div variants={iconVariants} className={isWide ? "relative z-10" : ""}>
          <MaterialIcon
            name={service.icon}
            className={`text-5xl mb-6 block ${isPrimary ? "text-on-primary-container" : "text-primary"}`}
          />
          <h3 className={`font-headline-md text-headline-md mb-4 ${isPrimary ? "" : "text-primary"}`}>
            {content.title}
          </h3>
          <p
            className={`max-w-md ${isPrimary ? "text-on-primary-container/90 flex-grow" : "text-on-surface-variant"} ${!isWide ? "flex-grow" : ""}`}
          >
            {content.description}
          </p>
        </motion.div>

        <motion.div
          variants={ctaGroupVariants}
          className={`mt-8 flex items-center gap-2.5 font-label-sm ${
            isWide ? "relative z-10" : ""
          } ${isPrimary ? "text-on-primary" : "text-secondary"}`}
        >
          <motion.span variants={ctaTextVariants}>{content.cta}</motion.span>
          <motion.span variants={arrowVariants} className="inline-flex items-center">
            <DirectionalArrow className="text-base" />
          </motion.span>
        </motion.div>

        {service.backgroundIcon && (
          <motion.div
            variants={bgIconVariants}
            className={`absolute pointer-events-none ${
              service.id === "audit" ? "top-0 end-0 w-64 h-64" : "-bottom-10 -end-10 w-48 h-48"
            }`}
          >
            <MaterialIcon name={service.backgroundIcon} className="text-[200px]" />
          </motion.div>
        )}
      </motion.article>
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
