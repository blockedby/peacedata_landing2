"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  variant?: "default" | "thick" | "button";
  className?: string;
  hover?: boolean;
  as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "nav";
  onClick?: () => void;
  style?: React.CSSProperties;
}

const variantClasses: Record<string, string> = {
  default: "glass rounded-[16px]",
  thick: "glass-thick rounded-[16px]",
  button: "glass-button rounded-[12px]",
};

export default function GlassPanel({
  children,
  variant = "default",
  className = "",
  hover = true,
  as: Tag = "div",
  onClick,
  style,
}: GlassPanelProps) {
  const Component = motion.create(Tag);

  return (
    <Component
      className={`relative overflow-hidden ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      style={style}
      {...(hover
        ? {
            whileHover: {
              scale: 1.02,
              boxShadow: "0 12px 40px var(--color-shadow)",
            },
            whileTap: { scale: 0.98 },
            transition: {
              type: "tween",
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            },
          }
        : {})}
    >
      {/* Specular highlight overlay at top edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[40%] rounded-t-[inherit]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 100%)",
        }}
      />
      {/* Content sits above the highlight */}
      <span className="relative z-[1] block">{children}</span>
    </Component>
  );
}
