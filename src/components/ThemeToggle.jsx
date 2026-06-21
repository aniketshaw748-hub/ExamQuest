import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "@phosphor-icons/react";
import { currentTheme, toggleTheme } from "../lib/theme.js";

// Sun in dark mode (tap -> go light), Moon in light mode (tap -> go dark).
// Pass size/spacing via className; the base style is a bordered translucent pill.
export default function ThemeToggle({ className = "h-9 w-9" }) {
  const [theme, setTheme] = useState(currentTheme);
  const dark = theme === "dark";
  return (
    <motion.button
      onClick={() => setTheme(toggleTheme())}
      whileTap={{ scale: 0.9 }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className={"grid shrink-0 place-items-center rounded-full border border-line bg-surface/70 text-muted backdrop-blur-sm transition-colors hover:text-amber " + className}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "sun" : "moon"}
          initial={{ rotate: -45, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 45, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.18 }}
        >
          {dark ? <Sun size={17} weight="fill" /> : <Moon size={17} weight="fill" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
