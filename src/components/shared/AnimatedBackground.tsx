"use client";

import { type ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

/* ==========================================================================
   Per-theme CSS-only animated backgrounds
   Each theme gets its own full-screen atmospheric backdrop.
   All animations are CSS-only for performance (GPU-accelerated).
   ========================================================================== */

function ObsidianBackground() {
  return (
    <>
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #0d1117 100%)",
        }}
      />

      {/* Diagonal grid lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(0, 240, 255, 0.3) 60px,
              rgba(0, 240, 255, 0.3) 61px
            )
          `,
        }}
      />

      {/* Drifting cyan orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, transparent 70%)",
          top: "10%",
          left: "5%",
          willChange: "transform",
          animation: "obsidian-drift-1 20s ease-in-out infinite",
        }}
      />

      {/* Drifting violet orb */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          bottom: "10%",
          right: "10%",
          willChange: "transform",
          animation: "obsidian-drift-2 20s ease-in-out infinite",
        }}
      />

      {/* Subtle noise via CSS */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              rgba(255,255,255,0.08) 0% 25%,
              transparent 0% 50%
            )
          `,
          backgroundSize: "4px 4px",
        }}
      />
    </>
  );
}

function SolarBackground() {
  return (
    <>
      {/* Base warm gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #faf5eb 0%, #fff2dd 50%, #faf5eb 100%)",
        }}
      />

      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 50px,
              rgba(212, 168, 83, 0.4) 50px,
              rgba(212, 168, 83, 0.4) 51px
            )
          `,
        }}
      />

      {/* Pulsing orange radial */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(232, 93, 38, 0.35) 0%, transparent 70%)",
          top: "-5%",
          right: "10%",
          willChange: "transform",
          animation: "solar-pulse-1 15s ease-in-out infinite",
        }}
      />

      {/* Pulsing gold radial */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-12"
        style={{
          background:
            "radial-gradient(circle, rgba(212, 168, 83, 0.35) 0%, transparent 70%)",
          bottom: "5%",
          left: "5%",
          willChange: "transform",
          animation: "solar-pulse-2 15s ease-in-out infinite 3s",
        }}
      />

      {/* Warm edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(232, 93, 38, 0.06) 100%)",
        }}
      />
    </>
  );
}

function ArcticBackground() {
  return (
    <>
      {/* Base cool gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, #f0f4f8 0%, #e2ecf5 40%, #dff0f0 100%)",
        }}
      />

      {/* Fine frost pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              60deg,
              transparent,
              transparent 20px,
              rgba(59, 130, 246, 0.3) 20px,
              rgba(59, 130, 246, 0.3) 21px
            ),
            repeating-linear-gradient(
              -60deg,
              transparent,
              transparent 20px,
              rgba(6, 214, 160, 0.2) 20px,
              rgba(6, 214, 160, 0.2) 21px
            )
          `,
        }}
      />

      {/* Floating orb 1 */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          top: "5%",
          left: "15%",
          willChange: "transform",
          animation: "arctic-float-1 25s ease-in-out infinite",
        }}
      />

      {/* Floating orb 2 */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 214, 160, 0.3) 0%, transparent 70%)",
          bottom: "10%",
          right: "10%",
          willChange: "transform",
          animation: "arctic-float-2 25s ease-in-out infinite 5s",
        }}
      />

      {/* Floating orb 3 */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-12"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)",
          top: "40%",
          right: "30%",
          willChange: "transform",
          animation: "arctic-float-3 25s ease-in-out infinite 10s",
        }}
      />

      {/* Floating orb 4 */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 214, 160, 0.25) 0%, transparent 70%)",
          top: "60%",
          left: "5%",
          willChange: "transform",
          animation: "arctic-float-1 25s ease-in-out infinite 15s",
        }}
      />

      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(59, 130, 246, 0.05) 100%)",
        }}
      />
    </>
  );
}

function NeonBackground() {
  return (
    <>
      {/* Pure black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 45, 107, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(181, 255, 45, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          willChange: "transform",
          animation: "neon-grid-shift 20s linear infinite",
        }}
      />

      {/* Diagonal pink gradient bar */}
      <div
        className="absolute w-[200%] h-[300px] opacity-[0.07]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255, 45, 107, 0.6) 30%, rgba(255, 45, 107, 0.6) 70%, transparent 100%)",
          top: "20%",
          left: "-50%",
          transform: "rotate(-15deg)",
          willChange: "transform",
          animation: "neon-bar-shift-1 18s ease-in-out infinite",
        }}
      />

      {/* Diagonal lime gradient bar */}
      <div
        className="absolute w-[200%] h-[200px] opacity-[0.06]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(181, 255, 45, 0.5) 30%, rgba(181, 255, 45, 0.5) 70%, transparent 100%)",
          bottom: "25%",
          left: "-50%",
          transform: "rotate(12deg)",
          willChange: "transform",
          animation: "neon-bar-shift-2 22s ease-in-out infinite",
        }}
      />

      {/* Hard geometric triangle 1 */}
      <div
        className="absolute w-[200px] h-[200px] opacity-[0.05]"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: "rgba(255, 45, 107, 0.6)",
          top: "15%",
          right: "15%",
          willChange: "transform",
          animation: "neon-rotate 30s linear infinite",
        }}
      />

      {/* Hard geometric triangle 2 */}
      <div
        className="absolute w-[150px] h-[150px] opacity-[0.04]"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: "rgba(181, 255, 45, 0.5)",
          bottom: "20%",
          left: "10%",
          willChange: "transform",
          animation: "neon-rotate 25s linear infinite reverse",
        }}
      />
    </>
  );
}

function VelvetBackground() {
  return (
    <>
      {/* Deep navy gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0f0a1a 0%, #1a1030 50%, #140e22 100%)",
        }}
      />

      {/* Art-deco geometric pattern (gold lines) */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 80px,
              rgba(201, 147, 122, 0.5) 80px,
              rgba(201, 147, 122, 0.5) 81px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 80px,
              rgba(201, 147, 122, 0.5) 80px,
              rgba(201, 147, 122, 0.5) 81px
            ),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 113px,
              rgba(157, 142, 199, 0.3) 113px,
              rgba(157, 142, 199, 0.3) 114px
            )
          `,
        }}
      />

      {/* Rose gradient orb */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(201, 147, 122, 0.35) 0%, transparent 70%)",
          top: "10%",
          right: "15%",
          willChange: "transform",
          animation: "velvet-drift-1 22s ease-in-out infinite",
        }}
      />

      {/* Lavender gradient orb */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full opacity-12"
        style={{
          background:
            "radial-gradient(circle, rgba(157, 142, 199, 0.3) 0%, transparent 70%)",
          bottom: "15%",
          left: "10%",
          willChange: "transform",
          animation: "velvet-drift-2 22s ease-in-out infinite 5s",
        }}
      />

      {/* Star-like sparkle dots */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, rgba(201, 147, 122, 0.6) 50%, transparent 50%),
            radial-gradient(1px 1px at 30% 65%, rgba(157, 142, 199, 0.5) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 55% 15%, rgba(201, 147, 122, 0.5) 50%, transparent 50%),
            radial-gradient(1px 1px at 70% 80%, rgba(157, 142, 199, 0.6) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 85% 40%, rgba(201, 147, 122, 0.4) 50%, transparent 50%),
            radial-gradient(1px 1px at 20% 90%, rgba(157, 142, 199, 0.5) 50%, transparent 50%),
            radial-gradient(1px 1px at 45% 45%, rgba(201, 147, 122, 0.5) 50%, transparent 50%),
            radial-gradient(1.5px 1.5px at 90% 10%, rgba(157, 142, 199, 0.4) 50%, transparent 50%),
            radial-gradient(1px 1px at 65% 55%, rgba(201, 147, 122, 0.5) 50%, transparent 50%),
            radial-gradient(1px 1px at 5% 50%, rgba(157, 142, 199, 0.6) 50%, transparent 50%)
          `,
          animation: "velvet-twinkle 4s ease-in-out infinite",
        }}
      />
    </>
  );
}

const backgroundMap: Record<string, () => ReactNode> = {
  obsidian: ObsidianBackground,
  solar: SolarBackground,
  arctic: ArcticBackground,
  neon: NeonBackground,
  velvet: VelvetBackground,
};

export default function AnimatedBackground() {
  const { theme } = useTheme();
  const Background = backgroundMap[theme.id] ?? ObsidianBackground;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      <Background />

      {/* Inline keyframes for all theme backgrounds */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Obsidian Storm */
        @keyframes obsidian-drift-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(60px, 40px) scale(1.05);
          }
          66% {
            transform: translate(-30px, -20px) scale(0.97);
          }
        }
        @keyframes obsidian-drift-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-50px, 30px) scale(1.03);
          }
          66% {
            transform: translate(40px, -40px) scale(0.98);
          }
        }

        /* Solar Flare */
        @keyframes solar-pulse-1 {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.15;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.22;
          }
        }
        @keyframes solar-pulse-2 {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.12;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.18;
          }
        }

        /* Arctic Glass */
        @keyframes arctic-float-1 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30px, -20px);
          }
          50% {
            transform: translate(-20px, 30px);
          }
          75% {
            transform: translate(40px, 10px);
          }
        }
        @keyframes arctic-float-2 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-40px, 15px);
          }
          50% {
            transform: translate(25px, -35px);
          }
          75% {
            transform: translate(-15px, 25px);
          }
        }
        @keyframes arctic-float-3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(20px, 20px);
          }
          66% {
            transform: translate(-30px, -10px);
          }
        }

        /* Neon Brutalist */
        @keyframes neon-grid-shift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }
        @keyframes neon-bar-shift-1 {
          0%,
          100% {
            transform: rotate(-15deg) translateX(0);
          }
          50% {
            transform: rotate(-15deg) translateX(80px);
          }
        }
        @keyframes neon-bar-shift-2 {
          0%,
          100% {
            transform: rotate(12deg) translateX(0);
          }
          50% {
            transform: rotate(12deg) translateX(-80px);
          }
        }
        @keyframes neon-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Velvet Dusk */
        @keyframes velvet-drift-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, -30px) scale(1.04);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.98);
          }
        }
        @keyframes velvet-drift-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-35px, 25px) scale(1.03);
          }
          66% {
            transform: translate(25px, -15px) scale(0.97);
          }
        }
        @keyframes velvet-twinkle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
      ` }} />
    </div>
  );
}
