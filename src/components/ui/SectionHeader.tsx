interface SectionHeaderProps {
  /** Small uppercase label above the heading (e.g. "Our Expertise") */
  eyebrow?: string;
  title: string;
  /** Center-align for grid sections; left-align for split layouts */
  align?: "center" | "left";
  className?: string;
}

/**
 * Reusable section title block — eyebrow + headline pairing.
 */
export function SectionHeader({
  eyebrow,
  title,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-secondary font-label-sm text-label-sm uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-headline-lg text-headline-lg text-primary mt-4">{title}</h2>
    </div>
  );
}
