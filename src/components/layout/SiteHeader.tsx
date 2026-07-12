"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { assets, navLinks, servicesNavAfter } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { TopBar } from "@/components/layout/TopBar";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { NavServicesDropdown } from "@/components/layout/NavServicesDropdown";
import { MobileNavMenu } from "@/components/layout/MobileNavMenu";

const linkClass =
  "font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap";

function syncHeaderHeight(element: HTMLElement | null) {
  if (!element) return;
  document.documentElement.style.setProperty("--site-header-height", `${element.offsetHeight}px`);
}

/**
 * Fixed site header — utility top bar + main navigation.
 */
export function SiteHeader() {
  const { t } = useLanguage();
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
          isScrolled ? "py-2" : "py-2.5 md:py-4"
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop gap-3">
          <div className="flex items-center gap-6 md:gap-8 min-w-0">
            <Link href="/" className="flex items-center shrink-0">
              <motion.div
                animate={{ scale: isScrolled ? 0.9 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={assets.logos.navbar}
                  alt="UHY Egypt"
                  width={120}
                  height={48}
                  className="h-8 sm:h-9 md:h-11 w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <span key={link.key} className="contents">
                  <Link href={link.href} className={linkClass}>
                    {t.nav[link.key]}
                  </Link>
                  {link.key === servicesNavAfter && <NavServicesDropdown />}
                </span>
              ))}
              <LanguageSwitch />
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className="md:hidden px-3 py-1.5 text-primary border border-primary/30 rounded-lg font-label-sm text-xs hover:bg-primary hover:text-on-primary transition-all active:scale-95 whitespace-nowrap"
            >
              {t.nav.getInTouch}
            </Link>
            <MobileNavMenu />
            <Link
              href="/contact"
              className="hidden md:inline-flex px-6 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:brightness-110 shadow-sm transition-all active:scale-95"
            >
              {t.nav.getInTouch}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
