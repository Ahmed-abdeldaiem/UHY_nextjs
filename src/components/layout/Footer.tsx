import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  assets,
  offices,
  officeSocials,
  footerExpertiseLinks,
  footerLegalLinks,
  type SocialLink,
} from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/ui/Container";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { fadeInUp } from "@/lib/animations";

function SocialRow({ links, label }: { links: SocialLink[]; label: string }) {
  return (
    <div className="mt-5">
      <p className="text-xs uppercase tracking-widest text-surface-white/50 mb-2.5">{label}</p>
      <div className="flex items-center gap-2.5">
        {links.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-surface-white/10 border border-surface-white/15 text-surface-white/85 hover:bg-secondary-fixed hover:text-on-secondary-fixed hover:border-transparent hover:-translate-y-0.5 transition-all duration-300"
          >
            <BrandIcon platform={social.platform} className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

interface OfficeColumnProps {
  branch: "cairo" | "alexandria";
  title: string;
  address: string;
  phone: string;
  email: string;
  followLabel: string;
  delay: number;
}

function OfficeColumn({ branch, title, address, phone, email, followLabel, delay }: OfficeColumnProps) {
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
        <li className="flex items-center gap-3">
          <MaterialIcon name="mail" className="text-base text-secondary-fixed shrink-0" />
          <a href={`mailto:${email}`} className="hover:text-surface-white transition-colors break-all">
            {email}
          </a>
        </li>
      </ul>

      <SocialRow links={officeSocials[branch]} label={followLabel} />
    </motion.div>
  );
}

/**
 * Site-wide footer — brand gradient, white logo, offices with socials, and links.
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
          {/* Brand + CTA */}
          <motion.div {...fadeInUp} className="lg:col-span-4">
            <Image
              src={assets.logos.footer}
              alt="UHY Egypt"
              width={200}
              height={80}
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="font-body-md text-body-md text-surface-white/85 leading-relaxed mb-8 max-w-sm">
              {t.footer.tagline}
            </p>

            <p className="font-label-sm text-label-sm uppercase tracking-widest text-surface-white/70 mb-3">
              {t.footer.getInTouchTitle}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-surface-white text-primary rounded-lg font-label-sm text-label-sm shadow-lg hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
            >
              {t.footer.getInTouchCta}
              <MaterialIcon
                name="arrow_forward"
                className="text-base rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Offices with branch socials */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-gutter gap-y-10">
            <OfficeColumn
              branch="cairo"
              title={t.footer.cairoOffice}
              address={t.offices.cairo.address}
              phone={cairoOffice.phone}
              email={cairoOffice.email}
              followLabel={t.footer.followUs}
              delay={0.1}
            />
            <OfficeColumn
              branch="alexandria"
              title={t.footer.alexandriaOffice}
              address={t.offices.alexandria.address}
              phone={alexOffice.phone}
              email={alexOffice.email}
              followLabel={t.footer.followUs}
              delay={0.2}
            />
          </div>

          {/* Quick links */}
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }} className="lg:col-span-3">
            <h4 className="font-label-sm text-label-sm text-surface-white uppercase tracking-widest mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3 mb-6">
              {footerExpertiseLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 font-label-sm text-label-sm text-surface-white/75 hover:text-secondary-fixed transition-colors group"
                  >
                    <MaterialIcon
                      name="chevron_right"
                      className="text-base text-secondary-fixed rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                    />
                    {t.footer[link.key]}
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
      </Container>
    </footer>
  );
}
