"use client";

import { useTheme } from "@/context/ThemeContext";
import GlassPanel from "@/components/shared/GlassPanel";
import SectionWrapper from "@/components/shared/SectionWrapper";
import type { ThemeLayout } from "@/lib/themes";

/* ==========================================================================
   Service data
   ========================================================================== */

interface Service {
  key: string;
  name: string;
  description: string;
}

const services: Service[] = [
  {
    key: "development",
    name: "DEVELOPMENT",
    description:
      "Full-stack engineering from MVP to scale. React, Node, cloud-native architecture.",
  },
  {
    key: "design",
    name: "DESIGN",
    description:
      "Interfaces that convert. Brand systems that endure. Design that makes people feel.",
  },
  {
    key: "consulting",
    name: "CONSULTING",
    description:
      "Technical strategy that cuts through noise. Architecture reviews. Team augmentation.",
  },
];

/* ==========================================================================
   CSS-animated icons (no images)
   ========================================================================== */

function CodeIcon() {
  return (
    <span className="services-icon services-icon--code" aria-hidden="true">
      <span className="services-icon__bracket services-icon__bracket--left">
        &lt;
      </span>
      <span className="services-icon__slash">/</span>
      <span className="services-icon__bracket services-icon__bracket--right">
        &gt;
      </span>
    </span>
  );
}

function DesignIcon() {
  return (
    <span className="services-icon services-icon--design" aria-hidden="true">
      <span className="services-icon__circle services-icon__circle--a" />
      <span className="services-icon__circle services-icon__circle--b" />
      <span className="services-icon__circle services-icon__circle--c" />
    </span>
  );
}

function ConsultingIcon() {
  return (
    <span
      className="services-icon services-icon--consulting"
      aria-hidden="true"
    >
      <svg viewBox="0 0 60 60" className="services-icon__svg" fill="none">
        {/* connecting lines */}
        <line
          x1="30"
          y1="10"
          x2="10"
          y2="46"
          className="services-icon__line"
        />
        <line
          x1="30"
          y1="10"
          x2="50"
          y2="46"
          className="services-icon__line"
        />
        <line
          x1="10"
          y1="46"
          x2="50"
          y2="46"
          className="services-icon__line"
        />
        {/* dots */}
        <circle cx="30" cy="10" r="5" className="services-icon__dot" />
        <circle cx="10" cy="46" r="5" className="services-icon__dot" />
        <circle cx="50" cy="46" r="5" className="services-icon__dot" />
      </svg>
    </span>
  );
}

const iconMap: Record<string, () => React.JSX.Element> = {
  development: CodeIcon,
  design: DesignIcon,
  consulting: ConsultingIcon,
};

/* ==========================================================================
   Layout-specific card grid classnames & card wrappers
   ========================================================================== */

function getGridClass(layout: ThemeLayout): string {
  switch (layout) {
    case "diagonal":
      return "services-grid services-grid--diagonal";
    case "asymmetric":
      return "services-grid services-grid--asymmetric";
    case "floating":
      return "services-grid services-grid--floating";
    case "brutalist":
      return "services-grid services-grid--brutalist";
    case "elegant":
      return "services-grid services-grid--elegant";
    default:
      return "services-grid";
  }
}

function getCardClass(layout: ThemeLayout, index: number): string {
  const base = "services-card";
  switch (layout) {
    case "diagonal":
      return `${base} services-card--diagonal services-card--diagonal-${index}`;
    case "asymmetric":
      return `${base} services-card--asymmetric services-card--asymmetric-${index}`;
    case "floating":
      return `${base} services-card--floating services-card--floating-${index}`;
    case "brutalist":
      return `${base} services-card--brutalist`;
    case "elegant":
      return `${base} services-card--elegant`;
    default:
      return base;
  }
}

function getGlassPanelVariant(
  layout: ThemeLayout
): "default" | "thick" | "button" {
  if (layout === "floating") return "thick";
  return "default";
}

/* ==========================================================================
   Section heading position helper
   ========================================================================== */

function getHeadingClass(layout: ThemeLayout): string {
  const base =
    "font-[family-name:var(--font-heading)] font-bold text-[color:var(--color-accent)] uppercase tracking-wider";
  switch (layout) {
    case "brutalist":
      return `${base} text-4xl md:text-6xl mb-12 text-left`;
    case "asymmetric":
      return `${base} text-3xl md:text-5xl mb-16 text-left`;
    case "elegant":
      return `${base} text-3xl md:text-4xl mb-16 text-center`;
    case "diagonal":
      return `${base} text-3xl md:text-4xl mb-14 text-center`;
    case "floating":
    default:
      return `${base} text-3xl md:text-4xl mb-14 text-center`;
  }
}

/* ==========================================================================
   Decorative divider between heading and cards
   ========================================================================== */

function HeadingDecorator({ layout }: { layout: ThemeLayout }) {
  if (layout === "brutalist") {
    return (
      <div
        className="mb-12 h-[3px] w-24"
        style={{ background: "var(--color-accent)" }}
      />
    );
  }
  if (layout === "elegant") {
    return (
      <div className="mx-auto mb-16 flex items-center justify-center gap-3">
        <span
          className="block h-px w-12"
          style={{ background: "var(--color-accent-alt)" }}
        />
        <span
          className="block h-1.5 w-1.5 rotate-45"
          style={{ background: "var(--color-accent)" }}
        />
        <span
          className="block h-px w-12"
          style={{ background: "var(--color-accent-alt)" }}
        />
      </div>
    );
  }
  if (layout === "asymmetric") {
    return (
      <div
        className="mb-14 h-0.5 w-20"
        style={{
          background:
            "linear-gradient(to right, var(--color-accent), transparent)",
        }}
      />
    );
  }
  return null;
}

/* ==========================================================================
   Service card content
   ========================================================================== */

function ServiceCardContent({
  service,
  layout,
}: {
  service: Service;
  layout: ThemeLayout;
}) {
  const Icon = iconMap[service.key];

  const nameSize =
    layout === "brutalist"
      ? "text-[clamp(2.5rem,6vw,5rem)]"
      : "text-2xl md:text-3xl";

  const descFont =
    layout === "brutalist"
      ? "font-[family-name:var(--font-body)] text-sm md:text-base"
      : "font-[family-name:var(--font-body)] text-base md:text-lg";

  return (
    <div className="services-card__inner">
      <Icon />
      <h3
        className={`font-[family-name:var(--font-heading)] font-bold leading-tight ${nameSize}`}
        style={{ color: "var(--color-accent)" }}
      >
        {service.name}
      </h3>
      <p
        className={`${descFont} mt-3 max-w-md leading-relaxed`}
        style={{ color: "var(--color-text-muted)" }}
      >
        {service.description}
      </p>
    </div>
  );
}

/* ==========================================================================
   Main component
   ========================================================================== */

export default function ServicesSection() {
  const { theme } = useTheme();
  const layout = theme.layout;

  /* For brutalist, we skip GlassPanel and use raw divs with thick borders */
  const isBrutalist = layout === "brutalist";

  return (
    <SectionWrapper
      id="services"
      className={`services-section services-section--${layout} relative py-24 px-6 md:px-12 lg:px-20`}
      staggerChildren
    >
      {/* ---- Section heading ---- */}
      <div>
        <h2 className={getHeadingClass(layout)}>What We Do</h2>
        <HeadingDecorator layout={layout} />
      </div>

      {/* ---- Card grid ---- */}
      <div className={getGridClass(layout)}>
        {services.map((service, i) => {
          const cardCls = getCardClass(layout, i);

          if (isBrutalist) {
            return (
              <div key={service.key} className={cardCls}>
                <ServiceCardContent service={service} layout={layout} />
              </div>
            );
          }

          return (
            <GlassPanel
              key={service.key}
              variant={getGlassPanelVariant(layout)}
              className={cardCls}
              hover
              as="article"
            >
              <ServiceCardContent service={service} layout={layout} />
            </GlassPanel>
          );
        })}
      </div>

      {/* ---- Inline styles (scoped via BEM class names) ---- */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ==================================================================
           Base icon styles
           ================================================================== */

        .services-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          margin-bottom: 1.25rem;
          position: relative;
        }

        /* -- Code icon < /> ------------------------------------------------ */

        .services-icon--code {
          font-family: var(--font-body);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-accent);
          gap: 2px;
        }

        .services-icon__bracket,
        .services-icon__slash {
          display: inline-block;
          animation: code-pulse 2.4s ease-in-out infinite;
          text-shadow: 0 0 12px var(--color-accent);
        }

        .services-icon__bracket--left {
          animation-delay: 0s;
        }

        .services-icon__slash {
          animation-delay: 0.3s;
          opacity: 0.8;
        }

        .services-icon__bracket--right {
          animation-delay: 0.6s;
        }

        @keyframes code-pulse {
          0%,
          100% {
            opacity: 0.6;
            text-shadow: 0 0 8px var(--color-accent);
            transform: scale(1);
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 20px var(--color-accent),
              0 0 40px var(--color-accent);
            transform: scale(1.1);
          }
        }

        /* -- Design icon (morphing circles) -------------------------------- */

        .services-icon--design {
          position: relative;
        }

        .services-icon__circle {
          position: absolute;
          width: 28px;
          height: 28px;
          border: 2px solid var(--color-accent);
          border-radius: 50%;
          opacity: 0.7;
        }

        .services-icon__circle--a {
          top: 6px;
          left: 18px;
          animation: morph-a 4s ease-in-out infinite;
        }

        .services-icon__circle--b {
          bottom: 8px;
          left: 8px;
          border-color: var(--color-accent-alt);
          animation: morph-b 4s ease-in-out infinite;
        }

        .services-icon__circle--c {
          bottom: 8px;
          right: 8px;
          animation: morph-c 4s ease-in-out infinite;
        }

        @keyframes morph-a {
          0%,
          100% {
            border-radius: 50%;
            transform: translate(0, 0) scale(1);
          }
          33% {
            border-radius: 40% 60% 55% 45%;
            transform: translate(-3px, 4px) scale(1.08);
          }
          66% {
            border-radius: 55% 45% 40% 60%;
            transform: translate(3px, -2px) scale(0.95);
          }
        }

        @keyframes morph-b {
          0%,
          100% {
            border-radius: 50%;
            transform: translate(0, 0) scale(1);
          }
          33% {
            border-radius: 60% 40% 45% 55%;
            transform: translate(4px, -3px) scale(0.93);
          }
          66% {
            border-radius: 45% 55% 60% 40%;
            transform: translate(-2px, 3px) scale(1.05);
          }
        }

        @keyframes morph-c {
          0%,
          100% {
            border-radius: 50%;
            transform: translate(0, 0) scale(1);
          }
          33% {
            border-radius: 45% 55% 60% 40%;
            transform: translate(-4px, 2px) scale(1.06);
          }
          66% {
            border-radius: 60% 40% 45% 55%;
            transform: translate(2px, -4px) scale(0.94);
          }
        }

        /* -- Consulting icon (connected nodes) ----------------------------- */

        .services-icon--consulting {
          position: relative;
        }

        .services-icon__svg {
          width: 56px;
          height: 56px;
        }

        .services-icon__line {
          stroke: var(--color-accent-alt);
          stroke-width: 1.5;
          opacity: 0.5;
        }

        .services-icon__dot {
          fill: var(--color-accent);
          animation: dot-pulse 2s ease-in-out infinite;
        }

        .services-icon__dot:nth-child(4) {
          animation-delay: 0s;
        }
        .services-icon__dot:nth-child(5) {
          animation-delay: 0.35s;
        }
        .services-icon__dot:nth-child(6) {
          animation-delay: 0.7s;
        }

        @keyframes dot-pulse {
          0%,
          100% {
            opacity: 0.6;
            r: 4;
            filter: drop-shadow(0 0 2px var(--color-accent));
          }
          50% {
            opacity: 1;
            r: 6;
            filter: drop-shadow(0 0 8px var(--color-accent));
          }
        }

        /* -- Hover: intensify icons ---------------------------------------- */

        .services-card:hover .services-icon__bracket,
        .services-card:hover .services-icon__slash {
          animation-duration: 1s;
        }

        .services-card:hover .services-icon__circle {
          animation-duration: 2s;
          opacity: 1;
        }

        .services-card:hover .services-icon__dot {
          animation-duration: 0.8s;
        }

        /* ==================================================================
           Card inner padding
           ================================================================== */

        .services-card__inner {
          padding: 2rem;
        }

        /* ==================================================================
           Section diagonal clip-path dividers (top & bottom)
           ================================================================== */

        .services-section::before,
        .services-section::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 60px;
          background: var(--color-bg);
          pointer-events: none;
          z-index: 2;
        }

        .services-section::before {
          top: -1px;
          clip-path: polygon(0 0, 100% 0, 100% 30%, 0 100%);
        }

        .services-section::after {
          bottom: -1px;
          clip-path: polygon(0 0, 100% 70%, 100% 100%, 0 100%);
        }

        /* ==================================================================
           DIAGONAL layout (Obsidian)
           ================================================================== */

        .services-grid--diagonal {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .services-grid--diagonal {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
        }

        .services-card--diagonal {
          position: relative;
          clip-path: polygon(0 0, 100% 4%, 100% 100%, 0 96%);
          transition: transform 0.3s ease;
        }

        .services-card--diagonal::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 40%,
            var(--color-accent) 100%
          );
          opacity: 0.05;
          pointer-events: none;
          z-index: 0;
        }

        @media (min-width: 768px) {
          .services-card--diagonal-0 {
            transform: translateY(0);
          }
          .services-card--diagonal-1 {
            transform: translateY(2rem);
          }
          .services-card--diagonal-2 {
            transform: translateY(4rem);
          }
        }

        /* ==================================================================
           ASYMMETRIC layout (Solar Flare)
           ================================================================== */

        .services-grid--asymmetric {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .services-grid--asymmetric {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        .services-card--asymmetric {
          position: relative;
          border-bottom: 3px solid transparent;
          border-image: linear-gradient(
              to right,
              var(--color-accent),
              var(--color-accent-alt)
            )
            1;
        }

        @media (min-width: 768px) {
          .services-card--asymmetric-0 {
            grid-column: 1 / -1;
          }

          .services-card--asymmetric-0 .services-card__inner {
            padding: 3rem;
          }
        }

        /* ==================================================================
           FLOATING layout (Arctic Glass)
           ================================================================== */

        .services-grid--floating {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .services-grid--floating {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
          }
        }

        .services-card--floating {
          animation: float-card 5s ease-in-out infinite;
          position: relative;
        }

        .services-card--floating-0 {
          animation-delay: 0s;
        }
        .services-card--floating-1 {
          animation-delay: 1.2s;
        }
        .services-card--floating-2 {
          animation-delay: 2.4s;
        }

        @keyframes float-card {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Dashed connecting lines between floating cards */
        @media (min-width: 768px) {
          .services-grid--floating::before,
          .services-grid--floating::after {
            content: "";
            position: absolute;
            top: 50%;
            height: 1px;
            border-top: 1px dashed var(--color-glass-border);
            pointer-events: none;
            z-index: 0;
          }

          .services-grid--floating::before {
            left: calc(33.333% - 0.5rem);
            width: calc(3rem + 1rem);
          }

          .services-grid--floating::after {
            left: calc(66.666% - 0.5rem);
            width: calc(3rem + 1rem);
          }
        }

        /* ==================================================================
           BRUTALIST layout (Neon Brutalist)
           ================================================================== */

        .services-grid--brutalist {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .services-card--brutalist {
          border: 3px solid var(--color-accent);
          background: var(--color-surface);
          padding: 0;
          transition: background 0.2s ease;
        }

        .services-card--brutalist:nth-child(even) {
          border-color: var(--color-accent-alt);
        }

        .services-card--brutalist:hover {
          background: var(--color-glass);
        }

        .services-card--brutalist .services-card__inner {
          padding: 2.5rem 2rem;
        }

        .services-card--brutalist + .services-card--brutalist {
          border-top: none;
        }

        /* ==================================================================
           ELEGANT layout (Velvet Dusk)
           ================================================================== */

        .services-grid--elegant {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .services-grid--elegant {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }
        }

        .services-card--elegant {
          position: relative;
          border: 1px solid var(--color-glass-border);
          outline: 1px solid var(--color-glass-border);
          outline-offset: 4px;
        }

        /* Art-deco ornamental corners */
        .services-card--elegant::before,
        .services-card--elegant::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          pointer-events: none;
          z-index: 3;
        }

        /* Top-left corner */
        .services-card--elegant::before {
          top: -6px;
          left: -6px;
          border-top: 2px solid var(--color-accent);
          border-left: 2px solid var(--color-accent);
        }

        /* Bottom-right corner */
        .services-card--elegant::after {
          bottom: -6px;
          right: -6px;
          border-bottom: 2px solid var(--color-accent);
          border-right: 2px solid var(--color-accent);
        }

        /* Additional corners via inner pseudo-elements */
        .services-card--elegant .services-card__inner::before,
        .services-card--elegant .services-card__inner::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          pointer-events: none;
          z-index: 3;
        }

        /* Top-right corner */
        .services-card--elegant .services-card__inner::before {
          top: -6px;
          right: -6px;
          border-top: 2px solid var(--color-accent-alt);
          border-right: 2px solid var(--color-accent-alt);
        }

        /* Bottom-left corner */
        .services-card--elegant .services-card__inner::after {
          bottom: -6px;
          left: -6px;
          border-bottom: 2px solid var(--color-accent-alt);
          border-left: 2px solid var(--color-accent-alt);
        }

        .services-card--elegant .services-card__inner {
          position: relative;
          padding: 2.5rem 2rem;
        }

        /* ==================================================================
           Responsive adjustments
           ================================================================== */

        @media (max-width: 767px) {
          .services-card--diagonal {
            clip-path: none;
          }

          .services-card--diagonal-0,
          .services-card--diagonal-1,
          .services-card--diagonal-2 {
            transform: none;
          }

          .services-card--floating {
            animation: none;
          }
        }
      ` }} />
    </SectionWrapper>
  );
}
