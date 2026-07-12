import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { insightArticles } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { staggerContainer, staggerItem } from "@/lib/animations";

/**
 * Latest insights / articles grid.
 */
export function InsightsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-section-gap bg-surface-container">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <h2 className="font-headline-lg text-headline-lg text-primary">
            {t.insights.sectionTitle}
          </h2>
          <Link
            href="/insights"
            className="text-secondary font-label-sm text-label-sm flex items-center hover:underline"
          >
            {t.insights.viewAll}
            <MaterialIcon name="open_in_new" className="ms-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
        >
          {insightArticles.map((article) => {
            const content = t.insights[article.id];
            return (
              <motion.article
                key={article.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="bg-surface-white rounded-2xl overflow-hidden flex flex-col md:flex-row group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="md:w-2/5 overflow-hidden relative min-h-[200px] md:min-h-0">
                  <Image
                    src={article.image.src}
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
                  <div className="mt-6 flex items-center text-sm text-on-surface-variant/70">
                    <span>{content.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{content.date}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
