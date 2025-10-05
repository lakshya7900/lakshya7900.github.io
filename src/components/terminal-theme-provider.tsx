"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type TerminalTheme = "dark" | "light";

interface TerminalThemeContextType {
  theme: TerminalTheme;
  toggleTheme: () => void;
  setTheme: (theme: TerminalTheme) => void;
}

const TerminalThemeContext = createContext<TerminalThemeContextType | undefined>(undefined);

export function TerminalThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<TerminalTheme>("dark");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("terminal-theme") as TerminalTheme;
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      setThemeState(savedTheme);
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("terminal-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => prev === "dark" ? "light" : "dark");
  };

  const setTheme = (newTheme: TerminalTheme) => {
    setThemeState(newTheme);
  };

  return (
    <TerminalThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </TerminalThemeContext.Provider>
  );
}

export function useTerminalTheme() {
  const context = useContext(TerminalThemeContext);
  if (context === undefined) {
    throw new Error("useTerminalTheme must be used within a TerminalThemeProvider");
  }
  return context;
}
