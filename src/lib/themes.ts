export type ThemeLayout =
  | "diagonal"
  | "asymmetric"
  | "floating"
  | "brutalist"
  | "elegant";

export type AnimationStyle =
  | "glitch"
  | "smooth"
  | "liquid"
  | "geometric"
  | "fade";

export interface ThemeColors {
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  accent: string;
  accentAlt: string;
  glass: string;
  glassBorder: string;
  shadow: string;
  highlight: string;
}

export interface ThemeFonts {
  heading: string;
  body: string;
}

export interface Theme {
  id: string;
  name: string;
  fonts: ThemeFonts;
  colors: ThemeColors;
  layout: ThemeLayout;
  animationStyle: AnimationStyle;
}

// ---------------------------------------------------------------------------
// 1. Obsidian Storm
// ---------------------------------------------------------------------------
export const obsidianTheme: Theme = {
  id: "obsidian",
  name: "Obsidian Storm",
  fonts: {
    heading: "var(--font-syne)",
    body: "var(--font-inter-tight)",
  },
  colors: {
    bg: "#0a0a0a",
    surface: "#141414",
    text: "#f0f0f0",
    textMuted: "#888888",
    accent: "#00f0ff",
    accentAlt: "#8b5cf6",
    glass: "rgba(255, 255, 255, 0.05)",
    glassBorder: "rgba(255, 255, 255, 0.10)",
    shadow: "rgba(0, 240, 255, 0.15)",
    highlight: "rgba(139, 92, 246, 0.20)",
  },
  layout: "diagonal",
  animationStyle: "glitch",
};

// ---------------------------------------------------------------------------
// 2. Solar Flare
// ---------------------------------------------------------------------------
export const solarTheme: Theme = {
  id: "solar",
  name: "Solar Flare",
  fonts: {
    heading: "var(--font-instrument-serif)",
    body: "var(--font-plus-jakarta-sans)",
  },
  colors: {
    bg: "#faf5eb",
    surface: "#fff8ee",
    text: "#1a1206",
    textMuted: "#7a6e5d",
    accent: "#e85d26",
    accentAlt: "#d4a853",
    glass: "rgba(255, 255, 255, 0.45)",
    glassBorder: "rgba(212, 168, 83, 0.25)",
    shadow: "rgba(232, 93, 38, 0.12)",
    highlight: "rgba(212, 168, 83, 0.18)",
  },
  layout: "asymmetric",
  animationStyle: "smooth",
};

// ---------------------------------------------------------------------------
// 3. Arctic Glass
// ---------------------------------------------------------------------------
export const arcticTheme: Theme = {
  id: "arctic",
  name: "Arctic Glass",
  fonts: {
    heading: "var(--font-space-mono)",
    body: "var(--font-outfit)",
  },
  colors: {
    bg: "#f0f4f8",
    surface: "#f8fafc",
    text: "#0f172a",
    textMuted: "#64748b",
    accent: "#3b82f6",
    accentAlt: "#06d6a0",
    glass: "rgba(255, 255, 255, 0.55)",
    glassBorder: "rgba(59, 130, 246, 0.18)",
    shadow: "rgba(59, 130, 246, 0.10)",
    highlight: "rgba(6, 214, 160, 0.15)",
  },
  layout: "floating",
  animationStyle: "liquid",
};

// ---------------------------------------------------------------------------
// 4. Neon Brutalist
// ---------------------------------------------------------------------------
export const neonTheme: Theme = {
  id: "neon",
  name: "Neon Brutalist",
  fonts: {
    heading: "var(--font-bebas-neue)",
    body: "var(--font-jetbrains-mono)",
  },
  colors: {
    bg: "#000000",
    surface: "#111111",
    text: "#ffffff",
    textMuted: "#999999",
    accent: "#ff2d6b",
    accentAlt: "#b5ff2d",
    glass: "rgba(255, 255, 255, 0.04)",
    glassBorder: "rgba(255, 45, 107, 0.30)",
    shadow: "rgba(255, 45, 107, 0.20)",
    highlight: "rgba(181, 255, 45, 0.18)",
  },
  layout: "brutalist",
  animationStyle: "geometric",
};

// ---------------------------------------------------------------------------
// 5. Velvet Dusk
// ---------------------------------------------------------------------------
export const velvetTheme: Theme = {
  id: "velvet",
  name: "Velvet Dusk",
  fonts: {
    heading: "var(--font-playfair-display)",
    body: "var(--font-dm-sans)",
  },
  colors: {
    bg: "#0f0a1a",
    surface: "#1a1328",
    text: "#ede8f5",
    textMuted: "#8a7fa0",
    accent: "#c9937a",
    accentAlt: "#9d8ec7",
    glass: "rgba(255, 255, 255, 0.06)",
    glassBorder: "rgba(157, 142, 199, 0.18)",
    shadow: "rgba(201, 147, 122, 0.15)",
    highlight: "rgba(157, 142, 199, 0.20)",
  },
  layout: "elegant",
  animationStyle: "fade",
};

// ---------------------------------------------------------------------------
// Themes collection
// ---------------------------------------------------------------------------
export const themes: Theme[] = [
  obsidianTheme,
  solarTheme,
  arcticTheme,
  neonTheme,
  velvetTheme,
];
