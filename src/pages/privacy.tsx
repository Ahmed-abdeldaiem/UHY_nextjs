import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "motion/react";
import { officialContact } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { fadeInUp } from "@/lib/animations";

const HERO_GRADIENT =
  "linear-gradient(105deg, #3D1A5C 0%, rgba(61,26,92,0.92) 40%, rgba(74,42,112,0.75) 70%, rgba(89,33,148,0.55) 100%)";

/**
 * Privacy Notice — includes Cookies and Disclosure sections (footer anchors).
 */
export default function PrivacyPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const p = t.privacyPage;

  useEffect(() => {
    if (!router.isReady) return;
    const hash = router.asPath.includes("#")
      ? router.asPath.split("#")[1]
      : "";
    if (!hash) return;

    const scrollToHash = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timer = window.setTimeout(scrollToHash, 80);
    return () => window.clearTimeout(timer);
  }, [router.isReady, router.asPath]);

  return (
    <SiteLayout title={p.meta.title} description={p.meta.description} path="/privacy">
      <section className="relative w-full overflow-hidden bg-primary min-h-[380px] md:min-h-[460px] flex items-center">
        <div className="absolute inset-0 z-0" style={{ background: HERO_GRADIENT }} />
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-no-repeat bg-center bg-contain opacity-[0.07]"
          style={{ backgroundImage: "url('/logo-icon-white.png')" }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#2a1040]/60 via-transparent to-transparent" />

        <Container className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="text-secondary-fixed font-label-sm text-sm md:text-base uppercase tracking-[0.25em] mb-4 block">
              {p.hero.eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-surface-white mb-5 leading-tight">
              {p.hero.title}
            </h1>
            <span className="block w-16 h-1 bg-secondary-fixed rounded-full mb-6" />
            <p className="text-base md:text-xl text-surface-white/90 leading-relaxed mb-4">
              {p.hero.subtitle}
            </p>
            <p className="text-sm text-surface-white/65">{p.lastUpdated}</p>
          </motion.div>
        </Container>

        <div
          className="absolute bottom-0 inset-x-0 h-14 md:h-20 bg-background z-[2]"
          style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
        />
      </section>

      <section className="py-section-gap bg-background relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -end-24 h-72 w-72 bg-contain bg-no-repeat opacity-[0.04]"
          style={{ backgroundImage: "url('/B2.png')" }}
        />
        <Container className="relative z-10 max-w-4xl">
          <motion.div {...fadeInUp} className="space-y-10 md:space-y-12">
            {p.sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-3xl bg-surface-white border border-outline-variant p-7 md:p-9 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary shrink-0 font-label-sm text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary pt-1.5">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4 ps-0 md:ps-14">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {"bullets" in section && section.bullets ? (
                    <ul className="space-y-3 pt-1">
                      {section.bullets.map((item) => (
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
                  ) : null}

                  {"closing" in section && section.closing ? (
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-2 border-s-4 border-secondary-fixed ps-4">
                      {section.closing}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-3xl bg-[#3D1A5C] text-surface-white p-8 md:p-10 relative overflow-hidden"
          >
            <div
              className="pointer-events-none absolute -bottom-10 -end-10 w-44 h-44 bg-contain bg-no-repeat opacity-[0.12]"
              style={{ backgroundImage: "url('/logo-icon-white.png')" }}
            />
            <h2 className="relative font-headline-md text-headline-md mb-3">
              {p.contactCta}
            </h2>
            <p className="relative text-surface-white/80 mb-6 max-w-xl leading-relaxed">
              {officialContact.email}
            </p>
            <div className="relative flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${officialContact.email}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary-fixed text-on-secondary-fixed rounded-lg font-label-sm text-label-sm hover:brightness-105 transition-all"
              >
                <MaterialIcon name="mail" className="text-lg" />
                {officialContact.email}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-surface-white/40 text-surface-white rounded-lg font-label-sm text-label-sm hover:bg-surface-white/10 transition-all"
              >
                {t.nav.getInTouch}
                <DirectionalArrow className="text-base" />
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </SiteLayout>
  );
}
