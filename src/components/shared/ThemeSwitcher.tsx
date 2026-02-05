"use client";

import { motion } from "framer-motion";
import { themes } from "@/lib/themes";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { themeIndex, setThemeIndex } = useTheme();

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.5 }}
    >
      <div
        className="glass-thick rounded-full px-3 py-2 flex items-center gap-2 sm:flex-row flex-col"
        role="radiogroup"
        aria-label="Select theme"
      >
        {themes.map((t, i) => {
          const isActive = i === themeIndex;
          return (
            <motion.button
              key={t.id}
              role="radio"
              aria-checked={isActive}
              aria-label={t.name}
              onClick={() => setThemeIndex(i)}
              className={`
                relative w-4 h-4 rounded-full cursor-pointer
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white/60
                focus-visible:ring-offset-1
                transition-shadow duration-200
                ${isActive ? "ring-2 ring-offset-1" : ""}
              `}
              style={{
                backgroundColor: t.colors.accent,
                ...(isActive
                  ? {
                      boxShadow: `0 0 0 2px ${t.colors.accent}, 0 0 8px ${t.colors.accent}`,
                    }
                  : {}),
              }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
