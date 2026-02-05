"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface BrowserFrameProps {
  title: string;
  url: string;
  children: ReactNode;
  className?: string;
}

export default function BrowserFrame({
  title,
  url,
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <motion.div
      className={`glass-thick rounded-[16px] overflow-hidden cursor-pointer ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      }}
      transition={{
        type: "tween",
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/10">
        {/* Traffic light dots */}
        <div className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#ff5f57" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#febc2e" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#28c840" }}
          />
        </div>

        {/* Title */}
        <span
          className="text-xs font-medium truncate"
          style={{
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          {title}
        </span>
      </div>

      {/* URL bar */}
      <div className="px-3 py-1.5 border-b border-white/5">
        <div
          className="rounded-md px-3 py-1 text-[10px] truncate"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.06)",
            color: "var(--color-text-muted)",
            fontFamily: "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace",
          }}
        >
          {url}
        </div>
      </div>

      {/* Content area */}
      <div
        className="relative overflow-hidden rounded-b-[8px]"
        style={{ aspectRatio: "16 / 10" }}
      >
        {children}
      </div>
    </motion.div>
  );
}
