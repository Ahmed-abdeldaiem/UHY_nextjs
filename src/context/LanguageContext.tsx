import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  translations,
  type Locale,
  type TranslationKeys,
} from "@/data/i18n/translations";

const STORAGE_KEY = "uhy-locale";

interface LanguageContextValue {
  locale: Locale;
  t: TranslationKeys;
  isRtl: boolean;
  toggleLanguage: () => void;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Provides site-wide language state (default: English).
 * Persists choice in localStorage and sets document dir/lang for RTL.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [isReady, setIsReady] = useState(false);

  // Restore saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "ar") {
      setLocaleState(saved);
    }
    setIsReady(true);
  }, []);

  // Sync <html> dir and lang when locale changes
  useEffect(() => {
    if (!isReady) return;
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, isReady]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);

  const toggleLanguage = useCallback(() => {
    setLocaleState((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      t: translations[locale] as TranslationKeys,
      isRtl: locale === "ar",
      toggleLanguage,
      setLocale,
    }),
    [locale, toggleLanguage, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Access translations and language controls from any component */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
