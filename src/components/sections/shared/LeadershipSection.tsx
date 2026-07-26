import Image from "next/image";
import { motion } from "motion/react";
import { foundingPartners } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { fadeInUp } from "@/lib/animations";

/**
 * Founding partners credentials — reused on About and Expertise pages.
 */
export function LeadershipSection() {
  const { t } = useLanguage();
  const a = t.about.leadership;

  return (
    <section className="relative overflow-hidden py-section-gap text-surface-white bg-[#3D1A5C]">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#3D1A5C] via-[#341550] to-[#2a1040]" />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-no-repeat bg-center bg-contain opacity-[0.07]"
        style={{ backgroundImage: "url('/B1.png')" }}
      />
      <div className="pointer-events-none absolute -top-24 -end-24 h-96 w-96 rounded-full bg-secondary-fixed/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -start-24 h-[28rem] w-[28rem] rounded-full bg-primary-fixed/20 blur-3xl" />

      <Container className="relative z-10">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-secondary-fixed font-label-sm text-label-sm uppercase tracking-[0.25em] mb-4 block">
            {a.eyebrow}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-surface-white mb-4">
            {a.title}
          </h2>
          <p className="font-body-md text-body-md text-surface-white/80 leading-relaxed">
            {a.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {foundingPartners.map((partner, index) => {
            const info = a.partners[partner.key];
            return (
              <motion.div
                key={partner.key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col rounded-3xl bg-surface-white/[0.06] border border-surface-white/15 backdrop-blur-sm p-7 md:p-9 hover:bg-surface-white/[0.1] transition-colors duration-300"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative shrink-0">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-secondary-fixed/40 shadow-lg">
                      <Image
                        src={partner.image}
                        alt={info.name}
                        fill
                        className="object-cover object-top"
                        sizes="96px"
                      />
                    </div>
                    <span className="absolute -bottom-2 -end-2 flex items-center justify-center w-9 h-9 rounded-xl bg-[#2a1040] border border-surface-white/20 text-secondary-fixed">
                      <MaterialIcon name={partner.icon} className="text-lg" />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-headline-md text-headline-md text-surface-white leading-tight">
                      {info.name}
                    </h3>
                    <span className="inline-block mt-2 rounded-full bg-secondary-fixed/20 text-secondary-fixed border border-secondary-fixed/30 px-3 py-1 text-xs font-label-sm uppercase tracking-wide">
                      {info.role}
                    </span>
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-surface-white/15" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-surface-white/50 font-label-sm">
                    {a.credentialsLabel}
                  </span>
                  <span className="h-px flex-1 bg-surface-white/15" />
                </div>

                <ul className="space-y-3">
                  {info.credentials.map((credential) => (
                    <li key={credential} className="flex items-start gap-3">
                      <MaterialIcon
                        name="verified"
                        className="text-secondary-fixed text-lg mt-0.5 shrink-0"
                      />
                      <span className="font-body-md text-body-md text-surface-white/85 leading-relaxed">
                        {credential}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
