import { motion, type HTMLMotionProps } from "motion/react";
import { fadeInUp } from "@/lib/animations";

interface MotionSectionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

/**
 * Scroll-triggered fade-in-up wrapper for page sections.
 * Drop around any block that should animate on enter.
 */
export function MotionSection({ children, className = "", ...props }: MotionSectionProps) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      transition={fadeInUp.transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
