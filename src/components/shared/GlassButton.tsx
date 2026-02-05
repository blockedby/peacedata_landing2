"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "accent";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

const sizeClasses: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export default function GlassButton({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "md",
  disabled,
  type = "button",
  "aria-label": ariaLabel,
}: GlassButtonProps) {
  const isAccent = variant === "accent";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        relative overflow-hidden cursor-pointer
        glass-button rounded-[12px]
        font-medium
        ${sizeClasses[size]}
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--color-accent)]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[var(--color-bg)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isAccent ? "bg-[var(--color-accent)]/15" : ""}
        ${className}
      `}
      style={{
        fontFamily: "var(--font-body)",
        color: "var(--color-text)",
      }}
      whileHover={
        disabled
          ? undefined
          : {
              boxShadow: isAccent
                ? "0 0 24px var(--color-shadow), 0 0 48px var(--color-shadow)"
                : "0 4px 16px var(--color-shadow)",
            }
      }
      whileTap={
        disabled
          ? undefined
          : {
              scaleX: 0.97,
              scaleY: 0.95,
            }
      }
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
    >
      {/* Specular highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[50%] rounded-t-[inherit]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
        }}
      />
      <span className="relative z-[1]">{children}</span>
    </motion.button>
  );
}
