import { officialContact } from "@/data/home";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BrandIcon } from "@/components/ui/BrandIcon";

/**
 * Slim utility bar above the main navigation — brand mark + official email + WhatsApp.
 * Layout is locked LTR in both locales: logo left, contacts right.
 */
export function TopBar() {
  return (
    <div className="bg-[#3D1A5C] py-1 text-on-primary border-b border-on-primary/10">
      <div
        dir="ltr"
        className="flex items-center justify-between gap-2 sm:gap-4 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto min-h-9 md:h-10 py-1 md:py-0"
      >
        <span className="shrink-0">
          <img src="/bokslogo.png" alt="Brand" className="h-9" />
        </span>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0 overflow-x-auto scrollbar-none">
          {/* Official email */}
          <a
            href={`mailto:${officialContact.email}`}
            className="inline-flex items-center gap-1.5 shrink-0 text-[10px] sm:text-[11px] md:text-xs text-on-primary/85 hover:text-surface-white transition-colors"
          >
            <MaterialIcon name="mail" className="text-xs sm:text-sm text-[#ff9100] opacity-95" />
            <span className="font-medium truncate max-w-[10rem] sm:max-w-none">
              {officialContact.email}
            </span>
          </a>

          {/* Official WhatsApp */}
          <a
            href={officialContact.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex items-center gap-1.5 shrink-0 text-[10px] sm:text-[11px] md:text-xs text-on-primary/85 hover:text-surface-white transition-colors"
          >
            <BrandIcon platform="whatsapp" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#25D366]" />
            <span className="font-medium" dir="ltr">
              {officialContact.whatsapp.display}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
