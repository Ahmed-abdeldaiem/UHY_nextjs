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

/** Renamed after rebrand so old Arabic prefs under `boks-locale` do not override English default */
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
 * Site-wide language state.
 * Default is always English on first visit; Arabic only after the user switches.
 * Choice is persisted for later visits.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [isReady, setIsReady] = useState(false);

  // Restore saved language on mount — English unless the user previously chose Arabic
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ar") {
        setLocaleState("ar");
      } else {
        setLocaleState("en");
        localStorage.setItem(STORAGE_KEY, "en");
      }
    } catch {
      setLocaleState("en");
    }
    setIsReady(true);
  }, []);

  // Sync <html> dir/lang and persist after the user (or restore) sets a locale
  useEffect(() => {
    if (!isReady) return;
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore storage errors */
    }
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
