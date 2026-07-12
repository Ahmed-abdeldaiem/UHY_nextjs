import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/data/i18n/translations";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

interface LanguageSwitchProps {
  className?: string;
}

/**
 * Segmented EN / AR toggle — active language is highlighted.
 */
export function LanguageSwitch({ className = "" }: LanguageSwitchProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex rounded-lg border border-outline-variant/60 bg-surface-container-low p-0.5 ${className}`}
    >
      {locales.map(({ code, label }) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            className={`min-w-[2.5rem] px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all duration-200 ${
              isActive
                ? "bg-primary text-on-primary shadow-sm"
                : "text-on-surface-variant hover:text-primary hover:bg-surface-white/60"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
