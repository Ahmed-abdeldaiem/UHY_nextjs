import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { insightArticles } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Latest insights / articles grid — shows the two most recent pieces.
 */
export function InsightsSection() {
  const { t } = useLanguage();
  const featured = insightArticles.slice(0, 2);

  return (
    <section className="py-section-gap bg-surface-container">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12 gap-4"
        >
          <h2 className="font-headline-lg text-headline-lg text-primary">
            {t.insights.sectionTitle}
          </h2>
          <Link
            href="/insights"
            className="text-secondary font-label-sm text-label-sm inline-flex items-center gap-1 hover:underline shrink-0"
          >
            {t.insights.viewAll}
            <MaterialIcon name="arrow_forward" className="text-base rtl:rotate-180" />
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
        >
          {featured.map((article) => {
            const content = t.insights.articles[article.id];
            return (
              <motion.div key={article.id} variants={staggerItem}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="bg-surface-white rounded-2xl overflow-hidden flex flex-col md:flex-row group shadow-sm hover:shadow-md transition-shadow h-full"
                >
                  <div className="md:w-2/5 overflow-hidden relative min-h-[200px] md:min-h-0">
                    <Image
                      src={article.image}
                      alt={content.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                  </div>
                  <div className="p-8 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <span className="text-secondary font-label-sm text-[12px] uppercase tracking-widest">
                        {content.category}
                      </span>
                      <h3 className="font-headline-md text-headline-md text-primary mt-2 mb-4 group-hover:text-secondary transition-colors">
                        {content.title}
                      </h3>
                      <p className="text-on-surface-variant line-clamp-3">{content.excerpt}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between gap-3 text-sm text-on-surface-variant/70">
                      <div>
                        <span>{content.readTime}</span>
                        <span className="mx-2">•</span>
                        <span>{content.date}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-secondary font-label-sm">
                        {t.insights.readMore}
                        <DirectionalArrow className="text-sm" />
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
  );
}
