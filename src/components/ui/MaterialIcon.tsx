interface MaterialIconProps {
  /** Material Symbols icon name — see https://fonts.google.com/icons */
  name: string;
  className?: string;
}

/**
 * Thin wrapper around Google Material Symbols Outlined.
 * Usage: <MaterialIcon name="location_on" className="text-primary" />
 */
export function MaterialIcon({ name, className = "" }: MaterialIconProps) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
