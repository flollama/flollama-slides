"use client";

import { useTheme } from "@/utils/ThemeProvider";
import { SunIcon, MoonIcon } from "@/lib/Icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        fixed bottom-8 left-8
        w-12 h-12
        rounded-full
        bg-bg
        border-2 border-border
        text-text fill-current
        cursor-pointer
        flex items-center justify-center
        text-[1.2rem]
        transition-all duration-300 ease-in-out
        z-[1000]
        shadow-soft
        hover:scale-110 hover:border-accent hover:shadow-glow
      "
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
