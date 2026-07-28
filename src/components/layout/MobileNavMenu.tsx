"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "motion/react";
import { navLinks, navServices, SERVICES_PAGE_HREF, servicesNavAfter } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

/** Active only for exact, non-hash routes so section anchors (e.g. "/#offices") don't light up */
function isActiveHref(pathname: string, href: string): boolean {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MobileServicesSection({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const isServicesActive = router.pathname.startsWith("/services");

  return (
    <div className="pt-1">
      <div
        className={`flex items-center rounded-lg transition-colors ${
          isServicesActive ? "bg-[#ff9100]" : "hover:bg-surface-container"
        }`}
      >
        <Link
          href={SERVICES_PAGE_HREF}
          onClick={onClose}
          aria-current={isServicesActive ? "page" : undefined}
          className={`flex-1 px-3 py-3 font-label-sm text-label-sm transition-colors ${
            isServicesActive ? "text-white" : "text-on-surface hover:text-primary"
          }`}
        >
          {t.nav.services}
        </Link>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className={`inline-flex items-center justify-center w-10 h-10 transition-colors ${
            isServicesActive ? "text-white" : "text-on-surface-variant hover:text-primary"
          }`}
          aria-expanded={isExpanded}
          aria-label={t.nav.allServices}
        >
          <MaterialIcon
            name="expand_more"
            className={`text-xl transition-transform duration-300 ease-out ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden mt-1 ms-2 border-s-2 border-secondary/30 ps-3 space-y-0.5"
          >
            {navServices.map((service) => (
              <li key={service.key}>
                <Link
                  href={`${SERVICES_PAGE_HREF}/${service.slug}`}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors leading-snug"
                >
                  {t.serviceItems[service.key]}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Mobile slide-over navigation with expandable services list.
 */
export function MobileNavMenu() {
  const { t, isRtl } = useLanguage();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Switch to desktop nav at lg — close the drawer if the viewport crosses that line
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = () => setIsOpen(false);
  const slideOffset = isRtl ? "-100%" : "100%";

  const drawer = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label={t.nav.closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-inverse-surface/50 backdrop-blur-[2px] xl:hidden"
            onClick={close}
          />

          <motion.aside
            initial={{ x: slideOffset }}
            animate={{ x: 0 }}
            exit={{ x: slideOffset }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 end-0 z-[101] w-[min(20rem,85vw)] max-w-full bg-surface-white shadow-2xl flex flex-col xl:hidden"
            style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant shrink-0 gap-3">
              <div className="min-w-0 pe-1">
                <span className="block font-semibold text-sm text-primary leading-tight tracking-wide">
                  {t.topBar.brandPrimary}
                </span>
                <span className="block mt-0.5 text-[11px] text-on-surface-variant leading-snug">
                  {t.topBar.brandSecondary}
                </span>
              </div>
              <button
                type="button"
                onClick={close}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-surface-container transition-colors shrink-0"
                aria-label={t.nav.closeMenu}
              >
                <MaterialIcon name="close" className="text-xl" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const active = isActiveHref(router.pathname, link.href);
                return (
                  <div key={link.key}>
                    <Link
                      href={link.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-3 py-3 font-label-sm text-label-sm transition-colors ${
                        active
                          ? "bg-[#ff9100] text-white"
                          : "text-on-surface hover:bg-surface-container hover:text-primary"
                      }`}
                    >
                      {t.nav[link.key]}
                    </Link>
                    {link.key === servicesNavAfter && <MobileServicesSection onClose={close} />}
                  </div>
                );
              })}
            </nav>

            <div className="px-5 py-5 border-t border-outline-variant space-y-4 shrink-0">
              <div className="flex justify-center">
                <LanguageSwitch />
              </div>
              <Link
                href="/contact"
                onClick={close}
                className="block w-full text-center px-6 py-3 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:brightness-110 transition-all active:scale-[0.98]"
              >
                {t.nav.getInTouch}
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-outline-variant/60 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors active:scale-95"
        aria-label={t.nav.openMenu}
        aria-expanded={isOpen}
      >
        <MaterialIcon name="menu" className="text-2xl" />
      </button>

      {mounted && createPortal(drawer, document.body)}
    </>
  );
}
