import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface DirectionalArrowProps {
  className?: string;
}

/** Forward arrow — rotates in RTL so it follows reading direction. */
export function DirectionalArrow({ className = "" }: DirectionalArrowProps) {
  return (
    <MaterialIcon
      name="arrow_forward"
      className={`rtl:rotate-180 ${className}`}
    />
  );
}

/** Hover nudge that matches arrow direction in LTR and RTL. */
export const directionalArrowHoverClass =
  "transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1";
