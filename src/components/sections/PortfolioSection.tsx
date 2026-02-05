"use client";

import { useTheme } from "@/context/ThemeContext";
import SectionWrapper from "@/components/shared/SectionWrapper";
import BrowserFrame from "@/components/portfolio/BrowserFrame";
import AsusRouterSite from "@/components/portfolio/AsusRouterSite";
import BankAppSite from "@/components/portfolio/BankAppSite";
import JobSearchSite from "@/components/portfolio/JobSearchSite";
import type { ThemeLayout } from "@/lib/themes";

/* --------------------------------------------------------------------------
   Per-theme layout styles for the card grid
   -------------------------------------------------------------------------- */

function getGridClasses(layout: ThemeLayout): string {
  const base =
    "grid gap-8 w-full max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  switch (layout) {
    case "diagonal":
      return base;
    case "asymmetric":
      return base;
    case "floating":
      return base;
    case "brutalist":
      return `${base} lg:gap-0`;
    case "elegant":
      return `${base} lg:gap-12`;
    default:
      return base;
  }
}

function getCardStyle(
  layout: ThemeLayout,
  index: number
): React.CSSProperties {
  switch (layout) {
    case "diagonal":
      // Cards fanned out at slight angles
      return {
        transform: `rotate(${(index - 1) * 2}deg)`,
      };
    case "asymmetric":
      // Staggered sizes, middle card larger
      if (index === 1) {
        return { transform: "scale(1.08)", zIndex: 2 };
      }
      return {
        transform: `translateY(${index === 0 ? "16px" : "24px"})`,
        zIndex: 1,
      };
    case "floating":
      // Even spacing, cards float with slight vertical offsets
      return {
        transform: `translateY(${index === 0 ? "0px" : index === 1 ? "-12px" : "8px"})`,
      };
    case "brutalist":
      // Hard grid, thick borders
      return {
        borderRadius: "0",
        border: "3px solid var(--color-accent)",
      };
    case "elegant":
      // Generous spacing, subtle shadow hierarchy
      return {
        boxShadow: `0 ${4 + index * 4}px ${12 + index * 8}px rgba(0,0,0,${0.06 + index * 0.02})`,
      };
    default:
      return {};
  }
}

function getCardClasses(layout: ThemeLayout, index: number): string {
  if (layout === "asymmetric" && index === 1) {
    return "md:col-span-2 lg:col-span-1";
  }
  return "";
}

/* --------------------------------------------------------------------------
   PortfolioSection
   -------------------------------------------------------------------------- */

const portfolioItems = [
  {
    title: "Router Admin Panel",
    url: "https://router.local/dashboard",
    Component: AsusRouterSite,
  },
  {
    title: "Apex Banking App",
    url: "https://app.apexbank.com/dashboard",
    Component: BankAppSite,
  },
  {
    title: "JobMind AI Platform",
    url: "https://jobmind.ai/search",
    Component: JobSearchSite,
  },
];

export default function PortfolioSection() {
  const { theme } = useTheme();
  const layout = theme.layout;

  return (
    <SectionWrapper
      id="portfolio"
      className="py-24 px-6"
      staggerChildren
    >
      {/* Section heading */}
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-text)",
        }}
      >
        Our Work
      </h2>

      {/* Portfolio grid */}
      <div className={getGridClasses(layout)}>
        {portfolioItems.map((item, index) => (
          <div
            key={item.title}
            className={`transition-transform duration-300 ${getCardClasses(layout, index)}`}
            style={getCardStyle(layout, index)}
          >
            <BrowserFrame title={item.title} url={item.url}>
              <item.Component />
            </BrowserFrame>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
