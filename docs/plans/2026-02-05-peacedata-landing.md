# Peacedata Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a progressive, modern landing page for peacedata software studio with 5 switchable theme variations, Liquid Glass design system, and fully responsive layouts — all without images, using only CSS animations and patterns.

**Architecture:** Next.js App Router with React 19 and TypeScript. A ThemeProvider context manages the 5 theme variants (Obsidian Storm, Solar Flare, Arctic Glass, Neon Brutalist, Velvet Dusk). Each theme defines colors, fonts, animations, and layout variations via CSS custom properties and Tailwind config. Sections are shared components that adapt their layout/animation per theme. The portfolio section uses styled mini-browser frames with interactive CSS-only mock sites.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, bun, react-icons, next/font (Google Fonts)

---

## Task 1: Project Initialization & Configuration

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.mjs`
- Create: `.gitignore`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

**Step 1: Initialize Next.js project with bun**

```bash
cd /home/kcnc/code/peacedata_landing2
bun create next-app . --ts --tailwind --app --src-dir --no-eslint --import-alias "@/*"
```

If the directory already has files, we may need to use `--force` or initialize manually. The goal is a working Next.js 15 + Tailwind v4 + TypeScript setup.

**Step 2: Install additional dependencies**

```bash
bun add react-icons framer-motion
```

**Step 3: Verify dev server starts**

```bash
bun run dev
```

Expected: Dev server running on localhost:3000.

**Step 4: Clean up generated boilerplate**

Replace `src/app/page.tsx` with a minimal placeholder:

```tsx
export default function Home() {
  return (
    <main>
      <h1>peacedata</h1>
    </main>
  );
}
```

Clean `src/app/globals.css` to only have Tailwind imports and our CSS custom properties foundation.

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: initialize Next.js 15 project with Tailwind, TypeScript, and dependencies"
```

---

## Task 2: Theme System & Design Tokens

**Files:**
- Create: `src/lib/themes.ts` — Theme type definitions and 5 theme configs
- Create: `src/context/ThemeContext.tsx` — React context for theme switching
- Modify: `src/app/globals.css` — CSS custom properties per theme
- Modify: `src/app/layout.tsx` — Wrap with ThemeProvider, load fonts

**Step 1: Define theme types and configurations in `src/lib/themes.ts`**

Each theme object contains:
- `id`: string identifier
- `name`: display name
- `fonts`: { heading: string, body: string, mono: string }
- `colors`: { bg, surface, text, textMuted, accent, accentAlt, glass, shadow, highlight }
- `layout`: 'diagonal' | 'asymmetric' | 'floating' | 'brutalist' | 'elegant'
- `animationStyle`: 'glitch' | 'smooth' | 'liquid' | 'geometric' | 'fade'

The 5 themes:

1. **Obsidian Storm** — Dark blacks, electric cyan (#00f0ff) accent, Clash Display + Inter Tight, diagonal layouts, glitch animations
2. **Solar Flare** — Warm cream (#faf5eb) bg, burnt orange (#e85d26) + gold (#d4a853), Instrument Serif + Satoshi, asymmetric grid, smooth scroll reveals
3. **Arctic Glass** — Cool white (#f0f4f8) bg, ice blue (#3b82f6) + mint (#06d6a0), Space Mono + General Sans, floating elements, liquid glass max
4. **Neon Brutalist** — Pure black bg, hot pink (#ff2d6b) + lime (#b5ff2d), Bebas Neue + JetBrains Mono, hard grid, geometric animations
5. **Velvet Dusk** — Deep navy (#0f0a1a) bg, rose gold (#c9937a) + lavender (#9d8ec7), Playfair Display + DM Sans, elegant flow, art-deco accents

**Step 2: Create ThemeContext with provider**

```tsx
// src/context/ThemeContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { themes, Theme } from "@/lib/themes";

interface ThemeContextType {
  theme: Theme;
  themeIndex: number;
  setThemeIndex: (index: number) => void;
}

const ThemeContext = createContext<ThemeContextType>(/* ... */);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex];
  // Apply CSS custom properties to <html> on theme change
  // Apply data-theme attribute for Tailwind
  return <ThemeContext.Provider value={{ theme, themeIndex, setThemeIndex }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
```

**Step 3: Set up CSS custom properties in globals.css**

Define all color/spacing/animation tokens as CSS custom properties that change per `[data-theme="theme-name"]`. Include Liquid Glass utility classes (backdrop-blur, glass surfaces, shadows).

**Step 4: Configure fonts in layout.tsx**

Use `next/font/google` to load all 10 fonts (2 per theme). Apply them via CSS custom properties that change per theme.

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: implement theme system with 5 theme variants and CSS custom properties"
```

---

## Task 3: Liquid Glass Design System Components

**Files:**
- Create: `src/components/shared/GlassPanel.tsx` — Reusable glass surface component
- Create: `src/components/shared/GlassButton.tsx` — Glass-styled button
- Create: `src/components/shared/ThemeSwitcher.tsx` — Floating theme toggle buttons
- Create: `src/components/shared/AnimatedBackground.tsx` — Per-theme CSS animated backgrounds (no images)
- Create: `src/components/shared/SectionWrapper.tsx` — Section container with scroll-triggered animations

**Step 1: Build GlassPanel**

A container component implementing Liquid Glass spec:
- backdrop-filter: blur + saturate
- Multi-layer box shadows (colored, not pure black)
- Specular highlight gradient overlay
- Hover: brightened highlights, subtle elastic flex
- Press: gel-like compression with spring bounce
- Respects prefers-reduced-transparency and prefers-reduced-motion
- Rounded corners (12-24px based on size prop)

**Step 2: Build GlassButton**

Extends GlassPanel behavior for interactive buttons:
- Lighter, more transparent glass (per spec: small controls use lighter glass)
- Hover glow intensification
- Active/press squish with spring physics
- Focus ring with subtle glow

**Step 3: Build ThemeSwitcher**

Floating fixed-position control (bottom-right) with 5 color dots/buttons:
- Each shows the theme's accent color
- Active theme has a ring indicator
- Glass panel background
- Smooth transition between themes (300ms)
- Small, unobtrusive but accessible

**Step 4: Build AnimatedBackground**

Per-theme CSS-only animated backgrounds (NO images):
- Obsidian Storm: Diagonal sweeping gradients with glitch flicker, dark particle grid
- Solar Flare: Warm radial gradients pulsing like heat waves, diagonal lines
- Arctic Glass: Floating translucent orbs with slow drift, frosted noise texture
- Neon Brutalist: Hard geometric shapes rotating, grid lines
- Velvet Dusk: Art-deco geometric patterns, subtle parallax gradient layers

**Step 5: Build SectionWrapper**

Wraps each content section with:
- Intersection Observer for scroll-triggered entrance animations
- Per-theme animation variant (glitch-in, smooth-slide, liquid-materialize, geometric-build, elegant-fade)
- Staggered children reveals using animation-delay

**Step 6: Commit**

```bash
git add -A && git commit -m "feat: build Liquid Glass design system components and theme switcher"
```

---

## Task 4: Hero Section

**Files:**
- Create: `src/components/sections/HeroSection.tsx`

**Step 1: Build hero section**

Content:
- Headline: "Your Last Agency Was a Joke." (large, bold, theme-heading font)
- Subheadline: "They played chess. We're here to start a war for making your brand a religion." (medium, body font)
- Comparison badge: "Decent results / [peacedata] quality" — styled as a glass pill/badge
- NO navigation header — hero takes full viewport

Layout variations per theme:
- Obsidian Storm: Text slashed diagonally across screen, glitch reveal animation
- Solar Flare: Asymmetric text placement with editorial feel, staggered word reveal
- Arctic Glass: Centered floating text with glass panel backdrop, liquid materialize
- Neon Brutalist: Giant stacked text filling viewport, hard geometric entrance
- Velvet Dusk: Elegant centered layout with art-deco frame, typewriter-style reveal

Typography:
- Heading: 4rem-8rem responsive, theme heading font
- Subheadline: 1.25rem-1.75rem, theme body font
- All text must maintain WCAG AA contrast (4.5:1)

Animated background visible behind text.

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: build hero section with per-theme layout variants"
```

---

## Task 5: Features/Benefits Section

**Files:**
- Create: `src/components/sections/FeaturesSection.tsx`

**Step 1: Build features section**

Three items: CHEAP, FAST, AWESOME

Each feature card:
- Large bold keyword
- Supporting micro-copy (2-3 words explaining each)
- CSS-only icon/animation representing each concept
- Glass panel styling

Layout variations per theme:
- Obsidian Storm: Three diagonal slashes, features slide in from different angles
- Solar Flare: Asymmetric overlapping cards with warm shadows
- Arctic Glass: Three floating glass panels with liquid hover effects
- Neon Brutalist: Three massive blocks with hard borders, geometric patterns
- Velvet Dusk: Three elegant cards with art-deco corners, staggered fade-in

Section should use NO rectangles — prefer diagonal clips, triangle decorations, angled dividers, shadow-based shapes.

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: build features section with CHEAP/FAST/AWESOME cards"
```

---

## Task 6: Portfolio Section with Interactive Mini-Sites

**Files:**
- Create: `src/components/sections/PortfolioSection.tsx`
- Create: `src/components/portfolio/BrowserFrame.tsx` — Mini browser chrome
- Create: `src/components/portfolio/AsusRouterSite.tsx` — Mock Asus router interface
- Create: `src/components/portfolio/BankAppSite.tsx` — Mock bank application
- Create: `src/components/portfolio/JobSearchSite.tsx` — Mock AI job search service

**Step 1: Build BrowserFrame**

A styled container resembling a browser window:
- Title bar with traffic light dots (close/minimize/maximize)
- URL bar showing a fake URL
- Content area for the mini-site
- Expandable on hover (scales up smoothly)
- Glass panel styling for the chrome
- Rounded corners, appropriate shadows

**Step 2: Build AsusRouterSite**

CSS-only mock of a router admin interface:
- Dark sidebar with nav items (Dashboard, Network, Security, etc.)
- Main area with fake network stats (bars, numbers)
- WiFi signal indicators (CSS animated)
- Status LEDs (CSS animated dots)
- Interactive hover states on nav items

**Step 3: Build BankAppSite**

CSS-only mock of a banking app:
- Clean layout with account balance display
- Transaction list with colored indicators
- Charts using CSS gradients (bar chart or area)
- Mobile-responsive internal layout
- Interactive hover on transactions

**Step 4: Build JobSearchSite**

CSS-only mock of an AI job search:
- Search bar at top
- Job listing cards below
- AI match percentage badges
- Tag pills for skills
- Interactive hover/focus states

**Step 5: Assemble PortfolioSection**

Three BrowserFrame cards side-by-side (responsive):
- Desktop: 3-column, expand on hover
- Tablet: 2-column + 1
- Mobile: 1-column stack

Section title: "Our Work" or similar
Cards should be interactive — users can hover over elements inside the mini-sites.

Layout adapts per theme (diagonal arrangement, overlapping, grid, etc.).

**Step 6: Commit**

```bash
git add -A && git commit -m "feat: build portfolio section with interactive mini-site browser cards"
```

---

## Task 7: Services Section

**Files:**
- Create: `src/components/sections/ServicesSection.tsx`

**Step 1: Build services section**

Three services: DEVELOPMENT, DESIGN, CONSULTING

Each service:
- Large bold service name
- Brief description (1-2 sentences)
- CSS-only animated icon/pattern representing the service
- Hover interaction revealing more detail

Layout follows theme variant (diagonal, asymmetric, floating, brutalist, elegant).

NO rectangles — use clip-paths, diagonal borders, triangular decorations, shadow shapes.

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: build services section with DEVELOPMENT/DESIGN/CONSULTING"
```

---

## Task 8: Footer

**Files:**
- Create: `src/components/sections/FooterSection.tsx`

**Step 1: Build footer**

Content:
- Navigation links (Home, Services, Portfolio, Contact)
- Social links using react-icons (GitHub, Twitter/X, LinkedIn, Dribbble)
- Copyright: "2026 peacedata. All rights reserved."
- Optional: Email contact link

Styled with glass panel, adapted per theme.
Social icons with hover glow/color effects.

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: build footer with navigation and social links"
```

---

## Task 9: Page Assembly & Full Integration

**Files:**
- Modify: `src/app/page.tsx` — Assemble all sections
- Modify: `src/app/layout.tsx` — Final layout with metadata
- Modify: `src/app/globals.css` — Final polish, section transitions

**Step 1: Assemble page**

Wire all sections into page.tsx in order:
1. HeroSection
2. FeaturesSection
3. PortfolioSection
4. ServicesSection
5. FooterSection

With ThemeSwitcher floating overlay.

**Step 2: Add smooth scrolling and section transitions**

- Smooth scroll behavior
- Section dividers using diagonal/triangular clip-paths (not horizontal lines)
- Consistent spacing between sections

**Step 3: Add metadata**

```tsx
export const metadata = {
  title: "peacedata | Software Studio",
  description: "Cutting-edge software solutions for businesses and organizations",
};
```

**Step 4: Final responsive pass**

Verify all sections work at:
- Mobile (375px)
- Tablet (768px)
- Desktop (1280px)
- Large (1536px)

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: assemble full landing page with all sections and responsive polish"
```

---

## Task 10: Animation & Polish Pass

**Files:**
- Modify: All component files as needed
- Modify: `src/app/globals.css`

**Step 1: Enhance scroll animations**

- Ensure all sections have scroll-triggered entrance animations
- Stagger child element animations within sections
- Verify 60fps performance

**Step 2: Enhance theme transitions**

- Smooth 300ms transition when switching themes
- Background, colors, fonts, layout all transition gracefully
- No flash of unstyled content

**Step 3: Add micro-interactions**

- Button hover/press states with spring physics
- Glass panel hover highlight intensification
- Social icon hover effects
- Text selection styling per theme

**Step 4: Accessibility verification**

- prefers-reduced-motion: disable animations, use simple fades
- prefers-reduced-transparency: increase glass opacity
- prefers-contrast: boost text contrast
- Keyboard navigation and focus states
- WCAG AA contrast on all text

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: animation polish, micro-interactions, and accessibility"
```

---

## Execution Notes

- **No TDD** for this project — it's a purely visual/frontend landing page with no business logic to unit test
- **Visual verification** after each task by checking the dev server
- Each task can be worked on by an independent subagent since they create separate files
- Tasks 1-3 are sequential (foundation), Tasks 4-8 can be parallelized, Task 9-10 are sequential (integration)
- Use `next/font/google` for all typography — no external font CDN links
- All animations must be CSS-only or framer-motion — no external animation libraries
- NO images anywhere — all visuals from CSS gradients, patterns, animations, and SVG
