import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { assets, insightArticles } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const HERO_GRADIENT =
  "linear-gradient(105deg, #3D1A5C 0%, rgba(61,26,92,0.92) 32%, rgba(74,42,112,0.70) 56%, rgba(89,33,148,0.45) 80%, rgba(125,41,181,0.28) 100%)";

/**
 * Insights listing — professional articles on risk, reporting and regulation.
 */
export default function InsightsPage() {
  const { t, isRtl } = useLanguage();
  const page = t.insights.page;

  return (
    <SiteLayout
      title={page.meta.title}
      description={page.meta.description}
      path="/insights"
      ogImage={assets.images.insightsHero}
    >
      <section className="relative w-full overflow-hidden bg-primary min-h-[440px] md:min-h-[560px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.images.insightsHero}
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
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1040]/75 via-transparent to-transparent" />

        <Container className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-secondary-fixed font-label-sm text-sm md:text-base uppercase tracking-[0.25em] mb-4 block">
              {page.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-surface-white mb-5 leading-tight">
              {page.hero.title}
            </h1>
            <span className="block w-16 h-1 bg-secondary-fixed rounded-full mb-6" />
            <p className="text-base md:text-xl text-surface-white/90 leading-relaxed">
              {page.hero.subtitle}
            </p>
          </motion.div>
        </Container>

        <div
          className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-background z-[2]"
          style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
        />
      </section>

      <section className="py-section-gap bg-background relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-20 -end-20 h-80 w-80 bg-contain bg-no-repeat opacity-[0.05]"
          style={{ backgroundImage: "url('/B2.png')" }}
        />
        <Container className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {insightArticles.map((article) => {
              const content = t.insights.articles[article.id];
              return (
                <motion.div key={article.id} variants={staggerItem}>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group flex flex-col h-full rounded-3xl bg-surface-white border border-outline-variant shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={content.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2a1040]/65 via-transparent to-transparent" />
                      <span className="absolute top-4 start-4 inline-flex items-center gap-2 rounded-full bg-surface-white/15 backdrop-blur-sm border border-surface-white/25 text-surface-white px-3 py-1.5 text-xs font-label-sm uppercase tracking-wide">
                        <MaterialIcon name={article.icon} className="text-sm" />
                        {content.category}
                      </span>
                    </div>
                    <div className="flex flex-col flex-grow p-6 md:p-8">
                      <h2 className="font-headline-md text-headline-md text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                        {content.title}
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow line-clamp-3 mb-6">
                        {content.excerpt}
                      </p>
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-sm text-on-surface-variant/70">
                          <span>{content.readTime}</span>
                          <span className="mx-2">•</span>
                          <span>{content.date}</span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-secondary font-label-sm text-label-sm group-hover:gap-3 transition-all">
                          {t.insights.readMore}
                          <DirectionalArrow className="text-base" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

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
          <Link
            href="/contact"
            className="inline-flex px-10 py-4 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm hover:brightness-105 transition-all shadow-lg active:scale-95"
          >
            {t.cta.primary}
          </Link>
        </Container>
      </section>
    </SiteLayout>
  );
}
