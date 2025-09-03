import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeKey = 'default' | 'erdung-hoffnung' | 'klarheit-tiefe' | 'waerme-ermutigung';

interface ThemeContextValue {
  theme: ThemeKey;
  setTheme: (t: ThemeKey) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const THEME_ORDER: ThemeKey[] = ['default', 'erdung-hoffnung', 'klarheit-tiefe', 'waerme-ermutigung'];
const STORAGE_KEY = 'color-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeKey>('default');

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as ThemeKey) || 'default';
    setThemeState(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'default') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (t: ThemeKey) => setThemeState(t);
  const cycleTheme = () => {
    setThemeState(prev => {
      const idx = THEME_ORDER.indexOf(prev);
      const next = THEME_ORDER[(idx + 1) % THEME_ORDER.length];
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};

export const ThemeSwitcher: React.FC = () => {
  const { theme, cycleTheme } = useTheme();
  const labelMap: Record<ThemeKey, string> = {
    'default': 'Standard',
    'erdung-hoffnung': 'Erdung & Hoffnung',
    'klarheit-tiefe': 'Klarheit & Tiefe',
    'waerme-ermutigung': 'Wärme & Ermutigung',
  };
  return (
    <button
      onClick={cycleTheme}
      className="mt-4 text-xs px-3 py-2 rounded border border-current/40 hover:bg-white/10 transition-colors"
      aria-label="Farbschema wechseln"
      title="Farbschema wechseln"
    >
      {labelMap[theme]}
    </button>
  );
};
