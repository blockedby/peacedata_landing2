"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { SiDribbble } from "react-icons/si";
import GlassPanel from "@/components/shared/GlassPanel";
import { useTheme } from "@/context/ThemeContext";
import type { ThemeLayout } from "@/lib/themes";

/* --------------------------------------------------------------------------
   Navigation links
   -------------------------------------------------------------------------- */

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "mailto:hello@peacedata.com" },
] as const;

/* --------------------------------------------------------------------------
   Social links
   -------------------------------------------------------------------------- */

const socialLinks = [
  { label: "GitHub", href: "https://github.com/peacedata", icon: FiGithub },
  { label: "Twitter", href: "https://x.com/peacedata", icon: FiTwitter },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/peacedata",
    icon: FiLinkedin,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/peacedata",
    icon: SiDribbble,
  },
] as const;

/* --------------------------------------------------------------------------
   Theme-specific layout helpers
   -------------------------------------------------------------------------- */

function getLayoutConfig(layout: ThemeLayout) {
  switch (layout) {
    case "diagonal":
      return {
        panelClass: "rounded-none sm:rounded-[16px]",
        clipPath: "polygon(0 24px, 100% 0, 100% 100%, 0 100%)",
        borderClass: "",
        sectionSpacing: "py-16",
        dividerOpacity: 0.15,
        fontWeight: 400,
      };
    case "brutalist":
      return {
        panelClass: "rounded-none",
        clipPath: undefined,
        borderClass: "border-2",
        sectionSpacing: "py-16",
        dividerOpacity: 0.3,
        fontWeight: 700,
      };
    case "elegant":
      return {
        panelClass: "rounded-[16px]",
        clipPath: undefined,
        borderClass: "",
        sectionSpacing: "py-20",
        dividerOpacity: 0.12,
        fontWeight: 400,
      };
    default:
      return {
        panelClass: "rounded-[16px]",
        clipPath: undefined,
        borderClass: "",
        sectionSpacing: "py-16",
        dividerOpacity: 0.15,
        fontWeight: 400,
      };
  }
}

/* --------------------------------------------------------------------------
   Social icon button (framer-motion hover)
   -------------------------------------------------------------------------- */

function SocialIconButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative flex items-center justify-center w-10 h-10 cursor-pointer glass-button rounded-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        scale: 1.15,
        boxShadow:
          "0 0 20px var(--color-shadow), 0 0 40px var(--color-shadow)",
      }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Specular highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[50%] rounded-t-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
        }}
      />
      <span
        className="relative z-[1] flex items-center justify-center"
        style={{
          color: hovered ? "var(--color-accent)" : "var(--color-text-muted)",
          transition: "color 0.3s ease",
        }}
      >
        <Icon size={18} />
      </span>
    </motion.a>
  );
}

/* --------------------------------------------------------------------------
   Navigation link with underline animation (CSS transitions)
   -------------------------------------------------------------------------- */

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  const isMailto = href.startsWith("mailto:");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMailto) return;
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-block text-sm"
      style={{
        color: hovered ? "var(--color-accent)" : "var(--color-text-muted)",
        fontFamily: "var(--font-body)",
        transition: "color 0.3s ease",
      }}
    >
      {label}
      <span
        className="absolute left-0 bottom-[-2px] h-[1.5px]"
        style={{
          width: hovered ? "100%" : "0%",
          backgroundColor: "var(--color-accent)",
          transition: "width 0.3s ease",
        }}
      />
    </a>
  );
}

/* --------------------------------------------------------------------------
   FooterSection
   -------------------------------------------------------------------------- */

export default function FooterSection() {
  const { theme } = useTheme();
  const config = getLayoutConfig(theme.layout);

  return (
    <footer
      id="footer"
      className={`w-full ${config.sectionSpacing} px-6`}
    >
      <div className="max-w-6xl mx-auto">
        <GlassPanel
          as="div"
          variant="thick"
          hover={false}
          className={`${config.panelClass} ${config.borderClass} p-8 sm:p-12`}
          style={
            config.clipPath ? { clipPath: config.clipPath } : undefined
          }
        >
          {/* --- Three-column grid --- */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-8">
            {/* Left: Brand */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 shrink-0">
              <span
                className="text-2xl sm:text-3xl tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-text)",
                  fontWeight: config.fontWeight >= 700 ? 700 : 500,
                }}
              >
                peacedata
              </span>
              <span
                className="text-sm"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-text-muted)",
                }}
              >
                Cutting-edge software solutions
              </span>
            </div>

            {/* Center: Navigation */}
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </nav>

            {/* Right: Social icons */}
            <div className="flex items-center gap-3 shrink-0">
              {socialLinks.map((link) => (
                <SocialIconButton
                  key={link.label}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          {/* --- Divider --- */}
          <div
            className="mt-10 mb-6 h-px w-full"
            style={{
              backgroundColor: "var(--color-accent)",
              opacity: config.dividerOpacity,
            }}
          />

          {/* --- Copyright --- */}
          <p
            className="text-center text-xs sm:text-sm"
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--color-text-muted)",
              fontWeight: config.fontWeight,
            }}
          >
            &copy; 2026 peacedata. All rights reserved.
          </p>
        </GlassPanel>
      </div>
    </footer>
  );
}
