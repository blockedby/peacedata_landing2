"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode, Children } from "react";
import { useTheme } from "@/context/ThemeContext";
import type { AnimationStyle } from "@/lib/themes";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  staggerChildren?: boolean;
  delay?: number;
}

/* --------------------------------------------------------------------------
   Animation variants per theme animation style
   -------------------------------------------------------------------------- */

function getVariants(style: AnimationStyle): Variants {
  switch (style) {
    case "glitch":
      return {
        hidden: { opacity: 0, x: -60, rotate: -2 },
        visible: { opacity: 1, x: 0, rotate: 0 },
      };
    case "smooth":
      return {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
    case "liquid":
      return {
        hidden: { opacity: 0, scale: 0.95, filter: "blur(4px)" },
        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
      };
    case "geometric":
      return {
        hidden: { opacity: 0, clipPath: "inset(40% 40% 40% 40%)" },
        visible: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
      };
    case "fade":
    default:
      return {
        hidden: { opacity: 0, scale: 0.98 },
        visible: { opacity: 1, scale: 1 },
      };
  }
}

function getTransition(style: AnimationStyle, delay: number) {
  const base = { delay };

  switch (style) {
    case "glitch":
      return { ...base, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const };
    case "smooth":
      return { ...base, duration: 0.6, ease: "easeOut" as const };
    case "liquid":
      return { ...base, duration: 0.7, ease: [0.4, 0, 0.2, 1] as const };
    case "geometric":
      return { ...base, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const };
    case "fade":
    default:
      return { ...base, duration: 0.6, ease: "easeOut" as const };
  }
}

/* Child variant used when staggerChildren is enabled */
const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  staggerChildren = false,
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();

  const style = theme.animationStyle;
  const variants = getVariants(style);
  const transition = getTransition(style, delay);

  // Reduced motion: skip all animation
  if (shouldReduceMotion) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  // Without stagger: animate the entire section as one block
  if (!staggerChildren) {
    return (
      <motion.section
        ref={ref}
        id={id}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.section>
    );
  }

  // With stagger: wrap each child in a motion.div
  const childArray = Children.toArray(children);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {childArray.map((child, i) => (
        <motion.div
          key={i}
          variants={childVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.section>
  );
}
