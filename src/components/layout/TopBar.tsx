import { topBarEmails } from "@/data/home";
import { useLanguage } from "@/context/LanguageContext";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

/**
 * Slim utility bar above the main navigation — official emails + brand mark.
 */
export function TopBar() {
  const { t } = useLanguage();

  const labels = {
    cairo: t.topBar.cairoLabel,
    alexandria: t.topBar.alexLabel,
  } as const;

  return (
    <div className="bg-primary text-on-primary border-b border-on-primary/10">
      <div className="flex items-center justify-between gap-2 sm:gap-4 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto min-h-9 md:h-10 py-1 md:py-0">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-6 min-w-0 flex-1 overflow-x-auto scrollbar-none">
          {topBarEmails.map(({ id, email }) => (
            <a
              key={id}
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1 shrink-0 text-[10px] sm:text-[11px] md:text-xs text-on-primary/85 hover:text-surface-white transition-colors"
            >
              <MaterialIcon name="mail" className="text-xs sm:text-sm opacity-80" />
              <span className="hidden md:inline text-on-primary/60">{labels[id]}:</span>
              <span className="font-medium truncate max-w-[9rem] sm:max-w-none">{email}</span>
            </a>
          ))}
        </div>

        <span className="shrink-0 font-label-sm text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] text-on-primary/90">
          {t.topBar.brand}
        </span>
      </div>
    </div>
  );
}
