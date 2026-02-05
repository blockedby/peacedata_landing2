"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { themes, type Theme } from "@/lib/themes";

interface ThemeContextValue {
  theme: Theme;
  themeIndex: number;
  setThemeIndex: (index: number) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  // Colors
  root.style.setProperty("--color-bg", theme.colors.bg);
  root.style.setProperty("--color-surface", theme.colors.surface);
  root.style.setProperty("--color-text", theme.colors.text);
  root.style.setProperty("--color-text-muted", theme.colors.textMuted);
  root.style.setProperty("--color-accent", theme.colors.accent);
  root.style.setProperty("--color-accent-alt", theme.colors.accentAlt);
  root.style.setProperty("--color-glass", theme.colors.glass);
  root.style.setProperty("--color-glass-border", theme.colors.glassBorder);
  root.style.setProperty("--color-shadow", theme.colors.shadow);
  root.style.setProperty("--color-highlight", theme.colors.highlight);

  // Fonts
  root.style.setProperty("--font-heading", theme.fonts.heading);
  root.style.setProperty("--font-body", theme.fonts.body);

  // Data attribute for CSS selectors
  root.setAttribute("data-theme", theme.id);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex] ?? themes[0];

  // Apply theme on mount and when themeIndex changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeIndex, setThemeIndex }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
