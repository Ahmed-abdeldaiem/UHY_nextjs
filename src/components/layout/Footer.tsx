import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  assets,
  offices,
  officialContact,
  socialLinks,
  footerQuickServiceLinks,
  footerLegalLinks,
  type SocialLink,
} from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { fadeInUp } from "@/lib/animations";

const DEVELOPER_LINKEDIN = "https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/";
const DEVELOPER_EMAIL = "ahmadabdeldaiem18@gmail.com";

/** Official Gmail glyph (envelope with the red "M" fold). */
function GmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

const socialItemClass =
  "inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-white/10 border border-surface-white/15 text-surface-white/85 transition-all duration-300 hover:bg-[#ff9100] hover:text-white hover:border-transparent hover:-translate-y-0.5";

/**
 * Unified social row (shared across all branches).
 * Icons with an empty `href` render as non-navigating placeholders until URLs are added.
 */
function SocialRow({ links, label }: { links: SocialLink[]; label: string }) {
  return (
    <div className="">
      <p className="text-xs uppercase tracking-widest text-surface-white/50 mb-2.5">{label}</p>
      <div className="flex items-center  flex-wrap gap-2.5">
        {links.map((social) =>
          social.href ? (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className={socialItemClass}
            >
              <BrandIcon platform={social.platform} className="w-4 h-4" />
            </a>
          ) : (
            <span
              key={social.platform}
              aria-label={social.platform}
              className={`${socialItemClass} cursor-default`}
            >
              <BrandIcon platform={social.platform} className="w-4 h-4" />
            </span>
          ),
        )}
      </div>
    </div>
  );
}

interface OfficeColumnProps {
  title: string;
  address: string;
  phone: string;
  delay: number;
}

/** Branch column — address + phone only (email/WhatsApp/social are unified below). */
function OfficeColumn({ title, address, phone, delay }: OfficeColumnProps) {
  return (
    <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay }}>
      <h4 className="font-label-sm text-label-sm text-surface-white uppercase tracking-widest mb-5">
        {title}
      </h4>
      <ul className="space-y-4 text-sm text-surface-white/75">
        <li className="flex items-start gap-3">
          <MaterialIcon name="location_on" className="text-base text-secondary-fixed mt-0.5 shrink-0" />
          <span className="leading-relaxed">{address}</span>
        </li>
        <li className="flex items-center gap-3">
          <MaterialIcon name="call" className="text-base text-secondary-fixed shrink-0" />
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-surface-white transition-colors" dir="ltr">
            {phone}
          </a>
        </li>
      </ul>
    </motion.div>
  );
}

/**
 * Site-wide footer — brand gradient, white logo, offices, unified contact + socials, links.
 */
export function Footer() {
  const { t } = useLanguage();
  const cairoOffice = offices.find((o) => o.id === "cairo")!;
  const alexOffice = offices.find((o) => o.id === "alexandria")!;

  return (
    <footer className="relative w-full overflow-hidden text-surface-white">
      {/* Brand gradient + subtle branded texture */}
      <div className="absolute inset-0 z-0 footer-gradient" />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-20"
        style={{ backgroundImage: `url(${assets.images.footerBackground})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <Container className="relative z-10 pt-section-gap pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-gutter gap-y-12">
          {/* Brand + unified contact */}
          <motion.div {...fadeInUp} className="lg:col-span-4">
            <Image
              src={assets.logos.footer}
              alt={t.meta.siteName}
              width={280}
              height={112}
              className="h-20 sm:h-24 w-auto object-contain mb-6"
            />
            <p className="font-body-md text-body-md text-surface-white/85 leading-relaxed mb-8 max-w-sm">
              {t.footer.tagline}
            </p>

            {/* One email + WhatsApp for all branches */}
            <div className="flex items-center  w-full gap-5 mb-8">
              <a
                href={`mailto:${officialContact.email}`}
                className="inline-flex items-center gap-1 text-sm text-surface-white/80 hover:text-surface-white transition-colors"
              >
                <MaterialIcon name="mail" className="text-base text-secondary-fixed shrink-0" />
                <span className="break-all">{officialContact.email}</span>
              </a>
              <a
                href={officialContact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-surface-white/80 hover:text-surface-white transition-colors"
              >
                <BrandIcon platform="whatsapp" className="w-4 h-4 text-[#25D366] shrink-0" />
                <span dir="ltr">{officialContact.whatsapp.display}</span>
              </a>
            </div>

            <SocialRow links={socialLinks} label={t.footer.followUs} />
          </motion.div>

          {/* Offices (address + phone per branch) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-gutter gap-y-10">
            <OfficeColumn
              title={t.footer.cairoOffice}
              address={t.offices.cairo.address}
              phone={cairoOffice.phone}
              delay={0.1}
            />
            <OfficeColumn
              title={t.footer.alexandriaOffice}
              address={t.offices.alexandria.address}
              phone={alexOffice.phone}
              delay={0.2}
            />
          </div>

          {/* Quick links */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }} className="lg:col-span-3">
            <h4 className="font-label-sm text-label-sm text-surface-white uppercase tracking-widest mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 mb-6">
              {footerQuickServiceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 font-label-sm text-label-sm text-surface-white/75 hover:text-secondary-fixed transition-colors group"
                  >
                    <MaterialIcon
                      name="chevron_right"
                      className="text-base text-secondary-fixed rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                    />
                    {t.serviceItems[link.key]}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-white/10 border border-surface-white/15">
              <span className="w-2 h-2 bg-secondary-fixed rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-wide text-surface-white/85">
                {t.footer.availability}
              </span>
            </div>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 px-6 py-3 bg-surface-white text-primary rounded-lg font-label-sm text-label-sm shadow-lg hover:bg-[#ff9100] hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
            >
              {t.footer.getInTouchCta}
              <MaterialIcon
                name="arrow_forward"
                className="text-base rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-surface-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-sm text-label-sm text-surface-white/60 text-center md:text-start">
            {t.footer.copyright}
          </p>

          <div className="flex gap-6 flex-wrap justify-center">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="font-label-sm text-label-sm text-surface-white/70 hover:text-secondary-fixed transition-colors"
              >
                {t.footer[link.key]}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col  gap-2">
          <div className="flex items-center gap-2 text-xs text-surface-white/50">
            <span>{t.footer.developedBy}</span>
            <a
              href={DEVELOPER_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.developedByLinkedIn}
              className="inline-flex items-center justify-center text-surface-white/60 hover:text-secondary-fixed transition-colors"
            >
              <BrandIcon platform="linkedin" className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${DEVELOPER_EMAIL}`}
              aria-label={t.footer.developedByEmail}
              className="inline-flex items-center justify-center text-surface-white/60 hover:text-[#EA4335] transition-colors"
            >
              <GmailIcon className="w-3 h-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
