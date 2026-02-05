"use client";

import { useTheme } from "@/context/ThemeContext";
import type { ThemeLayout } from "@/lib/themes";
import GlassPanel from "@/components/shared/GlassPanel";
import SectionWrapper from "@/components/shared/SectionWrapper";

/* ==========================================================================
   Feature data
   ========================================================================== */

interface Feature {
  name: string;
  description: string;
  icon: "dollar" | "lightning" | "star";
}

const features: Feature[] = [
  {
    name: "CHEAP",
    description: "Premium quality at startup prices",
    icon: "dollar",
  },
  {
    name: "FAST",
    description: "From brief to launch in record time",
    icon: "lightning",
  },
  {
    name: "AWESOME",
    description: "Work so good, your competitors cry",
    icon: "star",
  },
];

/* ==========================================================================
   CSS-only animated icons (pure CSS shapes, no images)
   ========================================================================== */

function DollarIcon({ layout }: { layout: ThemeLayout }) {
  const size = layout === "brutalist" ? "80px" : "64px";
  const fontSize = layout === "brutalist" ? "36px" : "28px";

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      {/* Outer pulsing circle */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "2px solid var(--color-accent)",
          animation: "feat-dollarPulse 2.5s ease-in-out infinite",
        }}
      />
      {/* Inner glow */}
      <div
        className="absolute inset-[6px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-highlight) 0%, transparent 70%)",
        }}
      />
      {/* $ text */}
      <span
        className="absolute inset-0 flex items-center justify-center font-bold"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize,
          color: "var(--color-accent)",
          animation: "feat-dollarBounce 2.5s ease-in-out infinite",
        }}
      >
        $
      </span>
    </div>
  );
}

function LightningIcon({ layout }: { layout: ThemeLayout }) {
  const size = layout === "brutalist" ? "80px" : "64px";

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      {/* Glow behind bolt */}
      <div
        className="absolute inset-[10%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-shadow) 0%, transparent 60%)",
          animation: "feat-lightningGlow 2s ease-in-out infinite",
        }}
      />
      {/* Lightning bolt — clip-path polygon forms the zig-zag shape */}
      <div
        className="absolute"
        style={{
          width: "40%",
          height: "70%",
          top: "15%",
          left: "30%",
          background:
            "linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-alt) 100%)",
          clipPath:
            "polygon(50% 0%, 20% 48%, 45% 48%, 30% 100%, 80% 42%, 55% 42%, 70% 0%)",
          animation: "feat-lightningFlash 2s ease-in-out infinite",
        }}
      />
    </div>
  );
}

function StarIcon({ layout }: { layout: ThemeLayout }) {
  const size = layout === "brutalist" ? "80px" : "64px";
  const squareSize = layout === "brutalist" ? "36px" : "28px";

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      {/* First rotating square */}
      <div
        className="absolute"
        style={{
          width: squareSize,
          height: squareSize,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)",
          background:
            "linear-gradient(135deg, var(--color-accent) 0%, transparent 60%)",
          animation: "feat-starSpin1 4s linear infinite",
        }}
      />
      {/* Second rotating square, offset 45deg */}
      <div
        className="absolute"
        style={{
          width: squareSize,
          height: squareSize,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(45deg)",
          background:
            "linear-gradient(135deg, var(--color-accent-alt) 0%, transparent 60%)",
          animation: "feat-starSpin2 4s linear infinite",
        }}
      />
      {/* Center sparkle dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: "8px",
          height: "8px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "var(--color-accent)",
          boxShadow:
            "0 0 12px var(--color-accent), 0 0 24px var(--color-shadow)",
          animation: "feat-sparklePulse 2s ease-in-out infinite",
        }}
      />
    </div>
  );
}

function FeatureIcon({
  icon,
  layout,
}: {
  icon: Feature["icon"];
  layout: ThemeLayout;
}) {
  switch (icon) {
    case "dollar":
      return <DollarIcon layout={layout} />;
    case "lightning":
      return <LightningIcon layout={layout} />;
    case "star":
      return <StarIcon layout={layout} />;
  }
}

/* ==========================================================================
   Keyframe animations — prefixed to avoid collisions
   ========================================================================== */

const keyframes = `
@keyframes feat-dollarPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.12); opacity: 0.7; }
}
@keyframes feat-dollarBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes feat-lightningFlash {
  0%, 100% { opacity: 1; filter: brightness(1); }
  50% { opacity: 0.6; filter: brightness(1.8); }
}
@keyframes feat-lightningGlow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.15); }
}
@keyframes feat-starSpin1 {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
@keyframes feat-starSpin2 {
  0% { transform: translate(-50%, -50%) rotate(45deg); }
  100% { transform: translate(-50%, -50%) rotate(405deg); }
}
@keyframes feat-sparklePulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.6; }
}
@keyframes feat-floatBob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
`;

/* ==========================================================================
   Section decorator shapes (no rectangles — triangles & diagonals only)
   ========================================================================== */

function SectionDecorators({ layout }: { layout: ThemeLayout }) {
  if (layout === "brutalist") {
    return (
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute -left-[10%] -top-[10%] h-[30%] w-[60%]"
          style={{
            background:
              "repeating-linear-gradient(45deg, var(--color-accent) 0px, var(--color-accent) 3px, transparent 3px, transparent 20px)",
            opacity: 0.08,
          }}
        />
        <div
          className="absolute -bottom-[10%] -right-[10%] h-[25%] w-[50%]"
          style={{
            background:
              "repeating-linear-gradient(-45deg, var(--color-accent-alt) 0px, var(--color-accent-alt) 3px, transparent 3px, transparent 20px)",
            opacity: 0.08,
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Top-left gradient triangle */}
      <div
        className="absolute -left-[5%] -top-[5%] h-[40%] w-[40%]"
        style={{
          background:
            "linear-gradient(135deg, var(--color-accent) 0%, transparent 60%)",
          opacity: 0.04,
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />
      {/* Bottom-right diagonal sliver */}
      <div
        className="absolute -bottom-[8%] -right-[5%] h-[35%] w-[35%]"
        style={{
          background:
            "linear-gradient(315deg, var(--color-accent-alt) 0%, transparent 60%)",
          opacity: 0.05,
          clipPath: "polygon(100% 100%, 0 100%, 100% 0)",
        }}
      />
    </div>
  );
}

/* ==========================================================================
   Layout-specific card grids
   ========================================================================== */

/* ---------- Shared card content ----------------------------------------- */

function CardContent({
  feature,
  layout,
  headingClass,
  descClass,
  descStyle,
}: {
  feature: Feature;
  layout: ThemeLayout;
  headingClass?: string;
  descClass?: string;
  descStyle?: React.CSSProperties;
}) {
  return (
    <>
      <FeatureIcon icon={feature.icon} layout={layout} />
      <h3
        className={`mt-6 text-center font-bold ${headingClass ?? "text-2xl"}`}
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-text)",
        }}
      >
        {feature.name}
      </h3>
      <p
        className={`mt-3 text-center ${descClass ?? "text-base"}`}
        style={{
          fontFamily: "var(--font-body)",
          color: "var(--color-text-muted)",
          ...descStyle,
        }}
      >
        {feature.description}
      </p>
    </>
  );
}

/* ---------- Diagonal (Obsidian) ----------------------------------------- */

function DiagonalLayout() {
  // Rotations and vertical offsets per card for the diagonal staircase effect
  const cardStyles: { rotate: string; mdMarginTop: string }[] = [
    { rotate: "-3deg", mdMarginTop: "0px" },
    { rotate: "0deg", mdMarginTop: "28px" },
    { rotate: "3deg", mdMarginTop: "56px" },
  ];

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {features.map((feature, i) => (
          <div
            key={feature.name}
            className="feat-diagonal-card"
            style={
              {
                "--feat-rotate": cardStyles[i].rotate,
                "--feat-md-mt": cardStyles[i].mdMarginTop,
              } as React.CSSProperties
            }
          >
            <GlassPanel className="relative p-8">
              {/* Gradient border overlay (cyan -> violet) */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[16px]"
                style={{
                  padding: "1px",
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-accent-alt))",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                }}
              />
              <CardContent feature={feature} layout="diagonal" />
            </GlassPanel>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Asymmetric (Solar Flare) ------------------------------------ */

function AsymmetricLayout() {
  const gridPlacement = [
    "md:col-span-2 md:row-span-2",
    "md:col-span-1",
    "md:col-span-1",
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
        {features.map((feature, i) => (
          <div key={feature.name} className={`${gridPlacement[i]} flex`}>
            <GlassPanel
              className={`w-full ${i === 0 ? "p-10" : "p-7"}`}
              style={{
                boxShadow:
                  "0 8px 32px var(--color-shadow), 0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <CardContent
                feature={feature}
                layout="asymmetric"
                headingClass={i === 0 ? "text-3xl" : "text-xl"}
                descClass={i === 0 ? "text-lg" : "text-base"}
              />
            </GlassPanel>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Floating (Arctic Glass) ------------------------------------- */

function FloatingLayout() {
  // Different vertical offsets per card; bob animation delay staggered
  const cardData = [
    { mdMarginTop: "8px", delay: "0s" },
    { mdMarginTop: "-8px", delay: "0.5s" },
    { mdMarginTop: "8px", delay: "1s" },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {features.map((feature, i) => (
          <div
            key={feature.name}
            className="feat-floating-card"
            style={
              {
                "--feat-md-mt": cardData[i].mdMarginTop,
                animationName: "feat-floatBob",
                animationDuration: "4s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: cardData[i].delay,
              } as React.CSSProperties
            }
          >
            <GlassPanel className="p-8">
              <CardContent feature={feature} layout="floating" />
            </GlassPanel>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Brutalist (Neon Brutalist) ---------------------------------- */

function BrutalistLayout() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        {features.map((feature, i) => {
          const stripeColor =
            i % 2 === 0 ? "var(--color-accent)" : "var(--color-accent-alt)";

          return (
            <div
              key={feature.name}
              className="relative overflow-hidden p-10 transition-transform duration-200 hover:scale-[1.02]"
              style={{
                border: "3px solid var(--color-accent)",
                borderRadius: 0,
                background: `repeating-linear-gradient(45deg, transparent 0px, transparent 14px, ${stripeColor} 14px, ${stripeColor} 16px)`,
                backgroundColor: "var(--color-bg)",
                backgroundBlendMode: "overlay",
              }}
            >
              {/* Semi-opaque fill behind content so text stays readable */}
              <div
                className="absolute inset-[3px]"
                style={{ background: "var(--color-bg)", opacity: 0.92 }}
              />
              <div className="relative z-10">
                <CardContent
                  feature={feature}
                  layout="brutalist"
                  headingClass="text-4xl md:text-5xl font-black uppercase tracking-wider"
                  descClass="text-lg font-bold uppercase tracking-wide"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Elegant (Velvet Dusk) --------------------------------------- */

function ElegantLayout() {
  // Middle card sits higher (negative top offset)
  const cardData = [
    { mdMarginTop: "20px" },
    { mdMarginTop: "-10px" },
    { mdMarginTop: "20px" },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {features.map((feature, i) => (
          <div
            key={feature.name}
            className="feat-elegant-card"
            style={
              { "--feat-md-mt": cardData[i].mdMarginTop } as React.CSSProperties
            }
          >
            <GlassPanel className="relative p-8">
              {/* Art-deco double-line border via inset box-shadows */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[16px]"
                style={{
                  boxShadow:
                    "inset 0 0 0 1px var(--color-accent), inset 0 0 0 4px transparent, inset 0 0 0 5px var(--color-accent)",
                  opacity: 0.5,
                }}
              />

              {/* Gold corner decorations — L-shaped CSS borders */}
              <div
                className="pointer-events-none absolute left-2 top-2"
                style={{
                  width: "16px",
                  height: "16px",
                  borderTop: "2px solid var(--color-accent)",
                  borderLeft: "2px solid var(--color-accent)",
                  opacity: 0.7,
                }}
              />
              <div
                className="pointer-events-none absolute right-2 top-2"
                style={{
                  width: "16px",
                  height: "16px",
                  borderTop: "2px solid var(--color-accent)",
                  borderRight: "2px solid var(--color-accent)",
                  opacity: 0.7,
                }}
              />
              <div
                className="pointer-events-none absolute bottom-2 left-2"
                style={{
                  width: "16px",
                  height: "16px",
                  borderBottom: "2px solid var(--color-accent)",
                  borderLeft: "2px solid var(--color-accent)",
                  opacity: 0.7,
                }}
              />
              <div
                className="pointer-events-none absolute bottom-2 right-2"
                style={{
                  width: "16px",
                  height: "16px",
                  borderBottom: "2px solid var(--color-accent)",
                  borderRight: "2px solid var(--color-accent)",
                  opacity: 0.7,
                }}
              />

              <CardContent
                feature={feature}
                layout="elegant"
                descStyle={{ fontStyle: "italic" }}
              />
            </GlassPanel>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   Layout router
   ========================================================================== */

function FeatureCards({ layout }: { layout: ThemeLayout }) {
  switch (layout) {
    case "diagonal":
      return <DiagonalLayout />;
    case "asymmetric":
      return <AsymmetricLayout />;
    case "floating":
      return <FloatingLayout />;
    case "brutalist":
      return <BrutalistLayout />;
    case "elegant":
      return <ElegantLayout />;
  }
}

/* ==========================================================================
   Responsive helper styles
   Uses CSS custom properties + media query so no window access is needed.
   Cards that use --feat-md-mt get the margin applied only at md+ breakpoint.
   Cards that use --feat-rotate get rotation at md+ and none on mobile.
   ========================================================================== */

const responsiveStyles = `
/* Diagonal card: rotation only on md+, staircase offset only on md+ */
.feat-diagonal-card {
  transform: rotate(0deg);
  margin-top: 0;
}
@media (min-width: 768px) {
  .feat-diagonal-card {
    transform: rotate(var(--feat-rotate, 0deg));
    margin-top: var(--feat-md-mt, 0px);
  }
}

/* Floating card: vertical offset only on md+ */
.feat-floating-card {
  margin-top: 0;
}
@media (min-width: 768px) {
  .feat-floating-card {
    margin-top: var(--feat-md-mt, 0px);
  }
}

/* Elegant card: stagger offset only on md+ */
.feat-elegant-card {
  margin-top: 0;
}
@media (min-width: 768px) {
  .feat-elegant-card {
    margin-top: var(--feat-md-mt, 0px);
  }
}
`;

/* ==========================================================================
   Main exported component
   ========================================================================== */

export default function FeaturesSection() {
  const { theme } = useTheme();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: keyframes + responsiveStyles }} />

      <SectionWrapper
        id="features"
        className="relative overflow-hidden px-6 py-24"
        staggerChildren
      >
        {/* Decorative background shapes */}
        <SectionDecorators layout={theme.layout} />

        {/* Section heading */}
        <h2
          className={`relative z-10 mb-16 text-center font-bold ${
            theme.layout === "brutalist"
              ? "text-5xl uppercase tracking-widest md:text-7xl"
              : "text-4xl md:text-5xl"
          }`}
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-text)",
          }}
        >
          Why Us?
        </h2>

        {/* Cards grid */}
        <div className="relative z-10">
          <FeatureCards layout={theme.layout} />
        </div>
      </SectionWrapper>
    </>
  );
}
