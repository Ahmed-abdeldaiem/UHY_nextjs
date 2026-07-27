import Image from "next/image";
import { motion } from "motion/react";
import { assets, contactPartner, officialContact } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BrandIcon } from "@/components/ui/BrandIcon";

type ContactPartnerCardProps = {
  className?: string;
};

/**
 * Shared Contact Partner CTA — branded footer backdrop, white logo,
 * and a smooth WhatsApp hover interaction for both office cards.
 */
export function ContactPartnerCard({ className = "" }: ContactPartnerCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`flex justify-center ${className}`}
    >
      <a
        href={contactPartner.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.offices.contactPartner}: ${contactPartner.name}`}
        className="group relative isolate w-full max-w-2xl overflow-hidden rounded-3xl border border-surface-white/15 shadow-[0_16px_40px_-22px_rgba(61,26,92,0.45)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(61,26,92,0.58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed focus-visible:ring-offset-2"
      >
        {/* Footer background */}
        <span className="absolute inset-0 -z-20">
          <Image
            src={assets.images.footerBackground}
            alt=""
            fill
            className="object-cover scale-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </span>

        {/* Brand gradient wash */}
        <span className="absolute inset-0 -z-10 footer-gradient opacity-90 mix-blend-multiply transition-opacity duration-700 ease-out group-hover:opacity-95" />
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2a1040]/92 via-[#3D1A5C]/78 to-[#2a1040]/55" />

        {/* Soft light sweep on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -z-[5] bg-gradient-to-r from-transparent via-surface-white/15 to-transparent skew-x-[-18deg] opacity-0 transition-[left,opacity] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-[120%] group-hover:opacity-100"
        />

        {/* Accent glow */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -end-8 h-36 w-36 rounded-full bg-secondary-fixed/20 blur-3xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-secondary-fixed/35 group-hover:scale-110"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -start-6 h-28 w-28 rounded-full bg-[#25D366]/12 blur-3xl transition-opacity duration-700 ease-out opacity-50 group-hover:opacity-90"
        />

        <span className="relative flex flex-col sm:flex-row items-center gap-5 sm:gap-6 px-6 sm:px-8 py-6 sm:py-7">
          {/* Logo mark */}
          <span className="relative shrink-0 flex items-center justify-center w-[4.5rem] h-[4.5rem] sm:w-20 sm:h-20 rounded-2xl bg-surface-white/10 border border-surface-white/20 backdrop-blur-md shadow-inner transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:border-secondary-fixed/40">
            <Image
              src={assets.logos.iconWhite}
              alt={t.meta.siteName}
              width={64}
              height={64}
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain drop-shadow-sm transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </span>

          {/* Copy */}
          <span className="min-w-0 flex-1 text-center sm:text-start text-surface-white">
            <span className="inline-flex items-center gap-2 mb-2">
              <span className="h-px w-5 bg-secondary-fixed/80 hidden sm:block" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-secondary-fixed font-label-sm">
                {t.offices.contactPartner}
              </span>
            </span>
            <span className="block text-xl sm:text-2xl font-semibold leading-tight tracking-tight">
              {contactPartner.name}
            </span>
            <span className="mt-1.5 block text-xs sm:text-sm text-surface-white/70" dir="ltr">
              {officialContact.whatsapp.display}
            </span>
          </span>

          {/* WhatsApp action chip */}
          <span className="shrink-0 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] text-[#053b1c] pl-3.5 pr-4 py-2.5 shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)] transition-[transform,background-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#2fe374] group-hover:shadow-[0_10px_26px_-6px_rgba(37,211,102,0.75)] group-hover:scale-[1.02]">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/25">
              <BrandIcon platform="whatsapp" className="w-4 h-4 text-[#053b1c]" />
            </span>
            <span className="text-sm font-semibold tracking-wide">
              {t.offices.contactPartnerHint}
            </span>
            <MaterialIcon
              name="arrow_forward"
              className="text-base rtl:rotate-180 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
            />
          </span>
        </span>

        {/* Bottom accent line */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-secondary-fixed to-transparent opacity-60 transition-opacity duration-700 ease-out group-hover:opacity-100"
        />
      </a>
    </motion.div>
  );
}
