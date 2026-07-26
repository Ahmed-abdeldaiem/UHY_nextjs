import Image from "next/image";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "motion/react";
import {
  assets,
  getAllServiceSlugs,
  getServiceBySlug,
  type ServicePageKey,
} from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { fadeInUp } from "@/lib/animations";

interface ServiceDetailPageProps {
  slug: string;
  serviceKey: ServicePageKey;
  icon: string;
}

/**
 * Individual service page — brief, highlights and a strong contact CTA.
 */
export default function ServiceDetailPage({ slug, serviceKey, icon }: ServiceDetailPageProps) {
  const { t, isRtl } = useLanguage();
  const s = t.servicesPage;
  const siteName = t.meta.siteName;
  const page = s.pages[serviceKey];

  const title =
    serviceKey === "corporate" ? s.corporate.title : t.serviceItems[serviceKey];
  const summary =
    serviceKey === "corporate" ? s.corporate.description : s.details[serviceKey];
  const pageTitle = `${title} | ${siteName}`;
  const pageDescription = summary;

  return (
    <SiteLayout
      title={pageTitle}
      description={pageDescription}
      path={`/services/${slug}`}
      ogImage={assets.images.servicesHero}
    >
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-primary min-h-[380px] md:min-h-[480px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.images.servicesHero}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className={`absolute inset-0 z-[1] ${isRtl ? "-scale-x-100" : ""}`}
          style={{
            background:
              "linear-gradient(105deg, #3D1A5C 0%, rgba(61,26,92,0.92) 32%, rgba(74,42,112,0.70) 56%, rgba(89,33,148,0.45) 80%, rgba(125,41,181,0.28) 100%)",
          }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1040]/70 via-transparent to-transparent" />

        <Container className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-2 text-surface-white/70 text-sm mb-5">
              <Link href="/services" className="hover:text-secondary-fixed transition-colors">
                {s.detailBreadcrumb}
              </Link>
              <MaterialIcon name={isRtl ? "chevron_left" : "chevron_right"} className="text-base opacity-70" />
              <span className="text-surface-white/90">{title}</span>
            </nav>

            <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-white/15 border border-surface-white/20 text-secondary-fixed backdrop-blur-sm mb-5">
              <MaterialIcon name={icon} className="text-3xl" />
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-surface-white mb-5 leading-tight">
              {title}
            </h1>
            <span className="block w-16 h-1 bg-secondary-fixed rounded-full mb-6" />
            <p className="text-base md:text-xl text-surface-white/90 leading-relaxed max-w-2xl">
              {summary}
            </p>
          </motion.div>
        </Container>

        <div
          className="absolute bottom-0 inset-x-0 h-14 md:h-20 bg-background z-[2]"
          style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
        />
      </section>

      {/* Brief + highlights */}
      <section className="py-section-gap bg-background relative overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-16 -end-16 w-72 h-72 bg-contain bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: "url('/logo-icon.png')" }}
        />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em] mb-4 block">
                {s.offeringsEyebrow}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                {title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
                {page.brief}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {summary}
              </p>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-5 rounded-3xl bg-[#3D1A5C] text-surface-white p-8 md:p-9 relative overflow-hidden shadow-xl"
            >
              <div
                className="pointer-events-none absolute -bottom-8 -end-8 w-40 h-40 bg-contain bg-no-repeat opacity-[0.12]"
                style={{ backgroundImage: "url('/logo-icon-white.png')" }}
              />
              <h3 className="relative font-headline-md text-headline-md mb-6">
                {s.detailHighlightsTitle}
              </h3>
              <ul className="relative space-y-4">
                {page.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <MaterialIcon
                      name="check_circle"
                      className="text-secondary-fixed text-xl mt-0.5 shrink-0"
                    />
                    <span className="font-body-md text-body-md text-surface-white/90 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-section-gap relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 signature-lines text-surface-white pointer-events-none" />
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
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm hover:brightness-105 transition-all shadow-lg active:scale-95"
            >
              {s.detailContactCta}
              <DirectionalArrow className="text-base" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-4 border border-surface-white text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-surface-white/10 transition-all active:scale-95"
            >
              {s.detailBackCta}
            </Link>
          </motion.div>
        </Container>
      </section>
    </SiteLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllServiceSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ServiceDetailPageProps> = async (context) => {
  const slug = context.params?.slug;
  if (typeof slug !== "string") return { notFound: true };

  const service = getServiceBySlug(slug);
  if (!service) return { notFound: true };

  return {
    props: {
      slug: service.slug,
      serviceKey: service.key,
      icon: service.icon,
    },
  };
};
