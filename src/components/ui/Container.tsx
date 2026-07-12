import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  /** Restrict content to the standard max-width column */
  className?: string;
}

/**
 * Standard page-width wrapper used by every section.
 * Keeps horizontal padding and max-width consistent site-wide.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop ${className}`}>
      {children}
    </div>
  );
}
