"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navServices, SERVICES_PAGE_HREF } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { DirectionalArrow } from "@/components/ui/DirectionalArrow";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

/**
 * Desktop services nav — clickable label links to /services, chevron opens dropdown.
 */
export function NavServicesDropdown({ active = false }: { active?: boolean }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const linkClass = `font-label-sm text-label-sm ps-3 pe-1.5 py-1.5 rounded-md transition-colors whitespace-nowrap ${
    active ? "bg-[#ff9100] text-white shadow-sm" : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
  }`;

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={SERVICES_PAGE_HREF}
        aria-current={active ? "page" : undefined}
        className={linkClass}
      >
        {t.nav.services}
      </Link>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t.nav.allServices}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex items-center justify-center w-6 h-6 rounded-md transition-colors ${
          active
            ? "text-[#ff9100]"
            : isOpen
              ? "text-primary bg-surface-container"
              : "text-on-surface-variant hover:text-primary"
        }`}
      >
        <MaterialIcon
          name="expand_more"
          className={`text-lg transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute top-full start-0 pt-3 transition-all duration-200 origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="w-[min(42rem,calc(100vw-2rem))] rounded-xl border border-outline-variant bg-surface-white shadow-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-outline-variant/60 bg-surface-container-low flex items-center justify-between gap-4">
            <p className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant">
              {t.nav.allServices}
            </p>
            <Link
              href={SERVICES_PAGE_HREF}
              onClick={() => setIsOpen(false)}
              className="text-xs font-semibold text-secondary hover:text-primary transition-colors whitespace-nowrap"
            >
              {t.nav.viewAllServices}
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 p-2 max-h-[24rem] overflow-y-auto">
            {navServices.map((service) => (
              <li key={service.key}>
                <Link
                  href={`${SERVICES_PAGE_HREF}/${service.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-start gap-2 rounded-lg px-3 py-2.5 text-sm text-on-surface hover:bg-surface-container hover:text-primary transition-colors"
                >
                  <span className="leading-snug flex-1">{t.serviceItems[service.key]}</span>
                  <DirectionalArrow className="text-base mt-0.5 opacity-0 translate-x-1 rtl:-translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 rtl:group-hover:translate-x-0 transition-all text-secondary shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
