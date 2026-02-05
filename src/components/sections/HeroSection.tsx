"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import GlassPanel from "@/components/shared/GlassPanel";
import React, { useEffect, useState } from "react";

/* ==========================================================================
   Hero Section
   Full-viewport hero with per-theme layout, animation, and decoration.
   ========================================================================== */

const HEADLINE = "Your Last Agency Was a Joke.";
const SUBHEADLINE =
  "They played chess. We're here to start a war for making your brand a religion.";

// Words in the headline, split for staggered animation
const HEADLINE_WORDS = HEADLINE.split(" ");

/* --------------------------------------------------------------------------
   Scroll indicator — animated chevron at bottom
   -------------------------------------------------------------------------- */
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
      >
        Scroll
      </span>
      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "var(--color-accent)" }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <polyline points="6 9 12 15 18 9" />
      </motion.svg>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Comparison badge — glass pill
   -------------------------------------------------------------------------- */
function ComparisonBadge({ className = "" }: { className?: string }) {
  return (
    <GlassPanel variant="button" hover={false} className={`inline-flex items-center gap-3 px-5 py-2.5 ${className}`}>
      <span
        className="line-through"
        style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)", fontSize: "0.875rem" }}
      >
        Decent results
      </span>
      <span
        className="w-px h-4"
        style={{ background: "var(--color-glass-border)" }}
        aria-hidden
      />
      <span
        className="font-semibold"
        style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)", fontSize: "0.875rem" }}
      >
        [peacedata] quality
      </span>
    </GlassPanel>
  );
}

/* ==========================================================================
   Layout: DIAGONAL (Obsidian Storm)
   ========================================================================== */
function DiagonalLayout() {
  const wordVariants: Variants = {
    hidden: { opacity: 0, x: -80, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Diagonal line decoration crossing the screen */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute top-0 left-0 w-[200%] h-px origin-top-left"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
            transform: "rotate(25deg)",
            opacity: 0.3,
          }}
        />
        <div
          className="absolute bottom-[30%] left-0 w-[200%] h-px origin-top-left"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-accent-alt), transparent)",
            transform: "rotate(-15deg)",
            opacity: 0.2,
          }}
        />
        {/* Triangular gradient decoration */}
        <div
          className="absolute top-[10%] right-[5%] w-[300px] h-[300px] opacity-[0.08]"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: "linear-gradient(180deg, var(--color-accent), transparent)",
          }}
        />
      </div>

      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12"
        style={{ transform: "skewY(-2deg)" }}
      >
        <div style={{ transform: "skewY(2deg)" }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mb-8"
          >
            <ComparisonBadge />
          </motion.div>

          {/* Headline — staggered words */}
          <h1
            className="flex flex-wrap gap-x-[0.3em]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 6vw, 6rem)",
              lineHeight: 1.1,
              color: "var(--color-text)",
              textShadow: "0 0 40px var(--color-accent), 0 0 80px rgba(0, 240, 255, 0.3)",
            }}
          >
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.1 + i * 0.1,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            className="mt-6 max-w-xl"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
              lineHeight: 1.7,
              color: "var(--color-text-muted)",
            }}
          >
            {SUBHEADLINE}
          </motion.p>
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
}

/* ==========================================================================
   Layout: ASYMMETRIC (Solar Flare)
   ========================================================================== */
function AsymmetricLayout() {
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Key words that get the golden underline accent
  const accentWords = new Set(["Agency", "Joke."]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative warm gradient shapes on the right */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Large warm gradient circle */}
        <div
          className="absolute top-[15%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
        />
        {/* Smaller gold circle */}
        <div
          className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, var(--color-accent-alt) 0%, transparent 70%)",
          }}
        />
        {/* Diagonal gradient slash */}
        <div
          className="absolute top-0 right-[30%] w-[2px] h-[140%] opacity-10"
          style={{
            background: "linear-gradient(180deg, transparent, var(--color-accent-alt), transparent)",
            transform: "rotate(20deg)",
            transformOrigin: "top center",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        {/* Left: text content — occupies ~60% */}
        <div className="md:col-span-3">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <ComparisonBadge />
          </motion.div>

          {/* Headline — editorial feel */}
          <h1
            className="flex flex-wrap gap-x-[0.35em]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 5.5vw, 6rem)",
              lineHeight: 1.15,
              color: "var(--color-text)",
            }}
          >
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.15 + i * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="inline-block relative"
              >
                {word}
                {accentWords.has(word) && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[3px]"
                    style={{ background: "var(--color-accent-alt)" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                    aria-hidden
                  />
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            className="mt-8 max-w-lg"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.4vw, 1.5rem)",
              lineHeight: 1.8,
              color: "var(--color-text-muted)",
            }}
          >
            {SUBHEADLINE}
          </motion.p>
        </div>

        {/* Right: decorative space (gradient shapes are positioned absolutely) */}
        <div className="hidden md:block md:col-span-2" aria-hidden />
      </div>

      <ScrollIndicator />
    </div>
  );
}

/* ==========================================================================
   Layout: FLOATING (Arctic Glass)
   ========================================================================== */
function FloatingLayout() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative gradient triangles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-[5%] left-[10%] w-[150px] h-[150px] opacity-[0.1]"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: "linear-gradient(180deg, var(--color-accent), transparent)",
          }}
        />
        <div
          className="absolute bottom-[10%] right-[8%] w-[120px] h-[120px] opacity-[0.08]"
          style={{
            clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
            background: "linear-gradient(90deg, var(--color-accent-alt), transparent)",
          }}
        />
      </div>

      {/* Centered floating glass panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-3xl mx-6"
      >
        <GlassPanel
          variant="thick"
          hover={false}
          className="px-8 py-12 md:px-16 md:py-20 text-center"
          style={{
            boxShadow: "0 8px 60px var(--color-shadow), 0 0 120px var(--color-shadow)",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <ComparisonBadge />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 5vw, 6rem)",
              lineHeight: 1.1,
              color: "var(--color-text)",
            }}
          >
            {HEADLINE}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 mx-auto max-w-md"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 1.3vw, 1.5rem)",
              lineHeight: 1.7,
              color: "var(--color-text-muted)",
            }}
          >
            {SUBHEADLINE}
          </motion.p>
        </GlassPanel>
      </motion.div>

      <ScrollIndicator />
    </div>
  );
}

/* ==========================================================================
   Layout: BRUTALIST (Neon Brutalist)
   ========================================================================== */
function BrutalistLayout() {
  // Each word on its own line, alternating slide direction
  const words = HEADLINE_WORDS;

  // Words to highlight with lime accent
  const limeWords = new Set(["war", "religion."]);
  // Note: "war" and "religion" come from the subheadline — for the headline,
  // we accent "Last" and "Joke." to add visual punch
  const headlineAccentWords = new Set(["Joke."]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Geometric decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Diagonal gradient bars */}
        <div
          className="absolute top-[10%] left-[-10%] w-[60%] h-[3px]"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
            transform: "rotate(-10deg)",
            opacity: 0.4,
          }}
        />
        <div
          className="absolute bottom-[15%] right-[-10%] w-[50%] h-[3px]"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-accent-alt), transparent)",
            transform: "rotate(8deg)",
            opacity: 0.3,
          }}
        />
        {/* Triangle accents */}
        <div
          className="absolute top-[5%] right-[5%] w-[80px] h-[80px] opacity-[0.15]"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background: "var(--color-accent)",
          }}
        />
        <div
          className="absolute bottom-[8%] left-[8%] w-[60px] h-[60px] opacity-[0.12]"
          style={{
            clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
            background: "var(--color-accent-alt)",
          }}
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(40% 40% 40% 40%)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ delay: 0.2, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mb-6"
        >
          <ComparisonBadge />
        </motion.div>

        {/* Massive stacked headline */}
        <div className="flex flex-col items-center">
          {words.map((word, i) => {
            const fromLeft = i % 2 === 0;
            const isAccent = headlineAccentWords.has(word);

            return (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -200 : 200,
                  clipPath: "inset(0% 100% 0% 0%)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  clipPath: "inset(0% 0% 0% 0%)",
                }}
                transition={{
                  delay: 0.3 + i * 0.12,
                  duration: 0.45,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="block font-bold uppercase leading-[0.9] tracking-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(4rem, 10vw, 12vw)",
                  color: isAccent ? "var(--color-accent-alt)" : "var(--color-accent)",
                  textShadow: isAccent
                    ? "0 0 30px var(--color-accent-alt)"
                    : "0 0 20px var(--color-accent)",
                }}
              >
                {word}
              </motion.span>
            );
          })}
        </div>

        {/* Subheadline with accent on key words */}
        <motion.p
          initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ delay: 1.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mt-8 text-center max-w-xl"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
            lineHeight: 1.7,
            color: "var(--color-text-muted)",
          }}
        >
          {SUBHEADLINE.split(" ").map((word, i) => {
            const isHighlight = limeWords.has(word) || limeWords.has(word.replace(/[.,!?]/g, ""));
            return (
              <span key={i}>
                {i > 0 && " "}
                <span style={isHighlight ? { color: "var(--color-accent-alt)", fontWeight: 700 } : undefined}>
                  {word}
                </span>
              </span>
            );
          })}
        </motion.p>
      </div>

      <ScrollIndicator />
    </div>
  );
}

/* ==========================================================================
   Layout: ELEGANT (Velvet Dusk)
   ========================================================================== */
function ElegantLayout() {
  // Typewriter animation — reveal letters one by one
  const [displayedChars, setDisplayedChars] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedChars(HEADLINE.length);
      return;
    }

    let frame: number;
    const start = performance.now();
    const charDuration = 50; // ms per character

    function tick(now: number) {
      const elapsed = now - start;
      const chars = Math.min(Math.floor(elapsed / charDuration), HEADLINE.length);
      setDisplayedChars(chars);
      if (chars < HEADLINE.length) {
        frame = requestAnimationFrame(tick);
      }
    }

    // Small initial delay before typewriter begins
    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, 400);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [shouldReduceMotion]);

  // Words with rose gold accent
  const accentWords = new Set(["Agency", "Joke."]);

  // Build displayed headline with accent coloring
  const headlineContent = HEADLINE_WORDS.map((word, i) => {
    // Calculate start/end indices for this word in the full headline
    let startIdx = 0;
    for (let j = 0; j < i; j++) {
      startIdx += HEADLINE_WORDS[j].length + 1; // +1 for space
    }
    // How many characters of this word are visible
    const visibleChars = Math.max(0, Math.min(displayedChars - startIdx, word.length));
    if (visibleChars <= 0) return null;

    const visiblePart = word.slice(0, visibleChars);
    const isAccent = accentWords.has(word);

    return (
      <span key={i}>
        {i > 0 && startIdx <= displayedChars && " "}
        <span
          style={isAccent ? { color: "var(--color-accent)" } : undefined}
        >
          {visiblePart}
        </span>
      </span>
    );
  });

  // Cursor blink
  const showCursor = displayedChars < HEADLINE.length;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Art-deco decorative borders */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Top-left corner decoration */}
        <div className="absolute top-8 left-8 md:top-16 md:left-16 w-24 h-24 md:w-32 md:h-32">
          <div
            className="absolute top-0 left-0 w-full h-px"
            style={{ background: "var(--color-accent)" }}
          />
          <div
            className="absolute top-0 left-0 h-full w-px"
            style={{ background: "var(--color-accent)" }}
          />
          {/* Inner geometric corner */}
          <div
            className="absolute top-3 left-3 w-3 h-3 md:top-4 md:left-4 md:w-4 md:h-4"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
              background: "var(--color-accent)",
              opacity: 0.4,
            }}
          />
        </div>
        {/* Top-right corner decoration */}
        <div className="absolute top-8 right-8 md:top-16 md:right-16 w-24 h-24 md:w-32 md:h-32">
          <div
            className="absolute top-0 right-0 w-full h-px"
            style={{ background: "var(--color-accent-alt)" }}
          />
          <div
            className="absolute top-0 right-0 h-full w-px"
            style={{ background: "var(--color-accent-alt)" }}
          />
          <div
            className="absolute top-3 right-3 w-3 h-3 md:top-4 md:right-4 md:w-4 md:h-4"
            style={{
              clipPath: "polygon(100% 0%, 100% 100%, 0% 0%)",
              background: "var(--color-accent-alt)",
              opacity: 0.4,
            }}
          />
        </div>
        {/* Bottom-left corner decoration */}
        <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 w-24 h-24 md:w-32 md:h-32">
          <div
            className="absolute bottom-0 left-0 w-full h-px"
            style={{ background: "var(--color-accent-alt)" }}
          />
          <div
            className="absolute bottom-0 left-0 h-full w-px"
            style={{ background: "var(--color-accent-alt)" }}
          />
          <div
            className="absolute bottom-3 left-3 w-3 h-3 md:bottom-4 md:left-4 md:w-4 md:h-4"
            style={{
              clipPath: "polygon(0% 100%, 100% 100%, 0% 0%)",
              background: "var(--color-accent-alt)",
              opacity: 0.4,
            }}
          />
        </div>
        {/* Bottom-right corner decoration */}
        <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 w-24 h-24 md:w-32 md:h-32">
          <div
            className="absolute bottom-0 right-0 w-full h-px"
            style={{ background: "var(--color-accent)" }}
          />
          <div
            className="absolute bottom-0 right-0 h-full w-px"
            style={{ background: "var(--color-accent)" }}
          />
          <div
            className="absolute bottom-3 right-3 w-3 h-3 md:bottom-4 md:right-4 md:w-4 md:h-4"
            style={{
              clipPath: "polygon(100% 100%, 0% 100%, 100% 0%)",
              background: "var(--color-accent)",
              opacity: 0.4,
            }}
          />
        </div>

        {/* Thin diagonal decorative lines */}
        <div
          className="absolute top-[20%] left-[5%] w-[30%] h-px opacity-10"
          style={{
            background: "linear-gradient(90deg, var(--color-accent), transparent)",
            transform: "rotate(-5deg)",
          }}
        />
        <div
          className="absolute bottom-[25%] right-[5%] w-[25%] h-px opacity-10"
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-accent-alt))",
            transform: "rotate(5deg)",
          }}
        />
      </div>

      {/* Content — centered, refined */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mb-10 flex justify-center"
        >
          <ComparisonBadge />
        </motion.div>

        {/* Typewriter headline */}
        <h1
          className="relative"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem, 5vw, 6rem)",
            lineHeight: 1.15,
            color: "var(--color-text)",
            textShadow: "0 2px 20px rgba(201, 147, 122, 0.15)",
          }}
        >
          {headlineContent}
          {showCursor && (
            <motion.span
              className="inline-block w-[3px] ml-0.5 align-middle"
              style={{
                height: "0.85em",
                background: "var(--color-accent)",
              }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              aria-hidden
            />
          )}
        </h1>

        {/* Subheadline — fades in after typewriter completes */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: displayedChars >= HEADLINE.length ? 1 : 0,
            y: displayedChars >= HEADLINE.length ? 0 : 15,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-8 mx-auto max-w-lg"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.3vw, 1.5rem)",
            lineHeight: 1.8,
            color: "var(--color-text-muted)",
            letterSpacing: "0.02em",
          }}
        >
          {SUBHEADLINE}
        </motion.p>
      </div>

      <ScrollIndicator />
    </div>
  );
}

/* ==========================================================================
   Reduced-motion fallback — static layout
   ========================================================================== */
function StaticLayout() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center">
          <ComparisonBadge />
        </div>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3rem, 5vw, 6rem)",
            lineHeight: 1.1,
            color: "var(--color-text)",
          }}
        >
          {HEADLINE}
        </h1>
        <p
          className="mt-6 mx-auto max-w-lg"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 1.3vw, 1.5rem)",
            lineHeight: 1.7,
            color: "var(--color-text-muted)",
          }}
        >
          {SUBHEADLINE}
        </p>
      </div>
      <ScrollIndicator />
    </div>
  );
}

/* ==========================================================================
   Main HeroSection export
   ========================================================================== */
export default function HeroSection() {
  const { theme } = useTheme();
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <section className="relative min-h-screen" id="hero">
        <StaticLayout />
      </section>
    );
  }

  const layoutMap: Record<string, React.FC> = {
    diagonal: DiagonalLayout,
    asymmetric: AsymmetricLayout,
    floating: FloatingLayout,
    brutalist: BrutalistLayout,
    elegant: ElegantLayout,
  };

  const Layout = layoutMap[theme.layout] ?? FloatingLayout;

  return (
    <section className="relative min-h-screen" id="hero">
      <Layout />
    </section>
  );
}
