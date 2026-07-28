import Image from "next/image";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "motion/react";
import {
  getAllInsightSlugs,
  getInsightBySlug,
  insightArticles,
  type InsightArticleId,
} from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { absoluteAssetUrl, absoluteUrl } from "@/lib/seo";
import { fadeInUp } from "@/lib/animations";

interface InsightArticlePageProps {
  slug: string;
  articleId: InsightArticleId;
  image: string;
  icon: string;
}

/**
 * Individual insight article page.
 */
export default function InsightArticlePage({
  slug,
  articleId,
  image,
  icon,
}: InsightArticlePageProps) {
  const { t, isRtl } = useLanguage();
  const content = t.insights.articles[articleId];
  const siteName = t.meta.siteName;
  const pageTitle = `${content.title} | ${siteName}`;
  const related = insightArticles.filter((a) => a.id !== articleId).slice(0, 2);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.excerpt,
    image: absoluteAssetUrl(image),
    datePublished: content.date,
    author: {
      "@type": "Organization",
      name: siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteAssetUrl("/logo-icon-1.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/insights/${slug}`),
  };

  return (
    <SiteLayout
      title={pageTitle}
      description={content.excerpt}
      path={`/insights/${slug}`}
      ogImage={image}
      jsonLd={articleJsonLd}
    >
      {/* Hero banner */}
      <section className="relative w-full overflow-hidden bg-primary min-h-[360px] md:min-h-[460px] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1040] via-[#3D1A5C]/75 to-[#3D1A5C]/35" />

        <Container className="relative z-10 w-full pb-12 md:pb-16 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-2 text-surface-white/70 text-sm mb-5">
              <Link href="/insights" className="hover:text-secondary-fixed transition-colors">
                {t.insights.backToInsights}
              </Link>
              <MaterialIcon
                name={isRtl ? "chevron_left" : "chevron_right"}
                className="text-base opacity-70"
              />
              <span className="text-surface-white/90 line-clamp-1">{content.category}</span>
            </nav>

            <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-surface-white/15 backdrop-blur-sm border border-surface-white/25 text-surface-white px-3 py-1.5 text-xs font-label-sm uppercase tracking-wide">
              <MaterialIcon name={icon} className="text-sm" />
              {content.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-surface-white mb-5 leading-tight">
              {content.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-surface-white/80 text-sm">
              <span>{content.readTime}</span>
              <span className="opacity-50">•</span>
              <span>{content.date}</span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Article body */}
      <section className="py-section-gap bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <motion.article
              {...fadeInUp}
              className="lg:col-span-8 max-w-none"
            >
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 border-s-4 border-secondary-fixed ps-5">
                {content.excerpt}
              </p>

              <div className="space-y-5">
                {content.body.map((block, index) => {
                  if (block.type === "h3") {
                    return (
                      <h2
                        key={index}
                        className="font-headline-md text-headline-md text-primary pt-4"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul key={index} className="space-y-3 my-2">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <MaterialIcon
                              name="check_circle"
                              className="text-secondary text-xl mt-0.5 shrink-0"
                            />
                            <span className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-outline-variant flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-[#ff9100] transition-all"
                >
                  {t.cta.primary}
                  <DirectionalArrow className="text-base" />
                </Link>
                <Link
                  href="/insights"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-outline text-primary rounded-lg font-label-sm text-label-sm hover:bg-surface-container transition-all"
                >
                  {t.insights.backToInsights}
                </Link>
              </div>
            </motion.article>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="rounded-3xl bg-[#3D1A5C] text-surface-white p-7 relative overflow-hidden">
                  <div
                    className="pointer-events-none absolute -bottom-8 -end-8 w-36 h-36 bg-contain bg-no-repeat opacity-[0.12]"
                    style={{ backgroundImage: "url('/logo-icon-white.png')" }}
                  />
                  <h3 className="relative font-headline-md text-headline-md mb-3">
                    {t.cta.title}
                  </h3>
                  <p className="relative text-surface-white/80 text-sm leading-relaxed mb-6">
                    {t.cta.description}
                  </p>
                  <Link
                    href="/contact"
                    className="relative inline-flex items-center gap-2 px-5 py-3 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm hover:brightness-105 transition-all"
                  >
                    {t.cta.primary}
                    <DirectionalArrow className="text-base" />
                  </Link>
                </div>

                {related.length > 0 && (
                  <div className="rounded-3xl bg-surface-white border border-outline-variant p-6">
                    <h3 className="font-headline-md text-headline-md text-primary mb-5">
                      {t.insights.relatedTitle}
                    </h3>
                    <ul className="space-y-4">
                      {related.map((article) => {
                        const relatedContent = t.insights.articles[article.id];
                        return (
                          <li key={article.id}>
                            <Link
                              href={`/insights/${article.slug}`}
                              className="group block"
                            >
                              <span className="text-xs uppercase tracking-wide text-secondary">
                                {relatedContent.category}
                              </span>
                              <span className="mt-1 block text-sm font-semibold text-primary group-hover:text-secondary transition-colors leading-snug">
                                {relatedContent.title}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllInsightSlugs().map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<InsightArticlePageProps> = async (context) => {
  const slug = context.params?.slug;
  if (typeof slug !== "string") return { notFound: true };

  const article = getInsightBySlug(slug);
  if (!article) return { notFound: true };

  return {
    props: {
      slug: article.slug,
      articleId: article.id,
      image: article.image,
      icon: article.icon,
    },
  };
};
