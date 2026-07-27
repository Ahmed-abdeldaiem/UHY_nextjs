"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "motion/react";
import { assets, navLinks, servicesNavAfter } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { TopBar } from "@/components/layout/TopBar";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { NavServicesDropdown } from "@/components/layout/NavServicesDropdown";
import { MobileNavMenu } from "@/components/layout/MobileNavMenu";

const linkBaseClass =
  "font-label-sm text-label-sm px-3 py-1.5 rounded-md transition-colors whitespace-nowrap";
const linkInactiveClass = "text-on-surface-variant hover:text-primary hover:bg-surface-container";
/** Active tab — official brand orange */
const linkActiveClass = "bg-[#ff9100] text-white shadow-sm";

/** Active only for exact, non-hash routes so section anchors (e.g. "/#offices") don't light up */
function isActiveHref(pathname: string, href: string): boolean {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function syncHeaderHeight(element: HTMLElement | null) {
  if (!element) return;
  document.documentElement.style.setProperty("--site-header-height", `${element.offsetHeight}px`);
}

/**
 * Fixed site header — utility top bar + main navigation.
 */
export function SiteHeader() {
  const { t } = useLanguage();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeight = () => syncHeaderHeight(headerRef.current);

    updateHeight();
    window.addEventListener("resize", updateHeight);

    const observer = new ResizeObserver(updateHeight);
    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      window.removeEventListener("resize", updateHeight);
      observer.disconnect();
    };
  }, [isScrolled]);

  return (
    <header ref={headerRef} className="fixed top-0 inset-x-0 z-50">
      <TopBar />

      <nav
        className={`bg-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant transition-all duration-300 ${
          isScrolled ? "py-0.5" : "py-2 md:py-2"
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop gap-3">
          <div className="flex items-center gap-6 lg:gap-8 min-w-0">
            <Link href="/" className="flex items-center shrink-0">
              <motion.div
                animate={{ scale: isScrolled ? 0.9 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={assets.logos.navbar}
                  alt={t.meta.siteName}
                  width={200}
                  height={200}
                  className="h-8 sm:h-9 lg:h-15 w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop nav only from lg — md/tablet widths can't fit all links without overlap */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <span key={link.key} className="contents">
                  <Link
                    href={link.href}
                    aria-current={isActiveHref(router.pathname, link.href) ? "page" : undefined}
                    className={`${linkBaseClass} ${
                      isActiveHref(router.pathname, link.href) ? linkActiveClass : linkInactiveClass
                    }`}
                  >
                    {t.nav[link.key]}
                  </Link>
                  {link.key === servicesNavAfter && (
                    <NavServicesDropdown active={router.pathname.startsWith("/services")} />
                  )}
                </span>
              ))}
              <LanguageSwitch />
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="lg:hidden px-3 py-1.5 text-primary border border-primary/30 rounded-lg font-label-sm text-xs hover:bg-primary hover:text-on-primary transition-all active:scale-95 whitespace-nowrap"
            >
              {t.nav.getInTouch}
            </Link>
            <MobileNavMenu />
            <Link
              href="/contact"
              className="hidden lg:inline-flex px-6 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:brightness-110 shadow-sm transition-all active:scale-95"
            >
              {t.nav.getInTouch}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
