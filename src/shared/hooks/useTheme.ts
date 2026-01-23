import { create } from "zustand";

export const THEME_KEY = "theme-app";

export type Theme = "light" | "dark" | undefined;

interface IThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<IThemeStore>((set) => ({
  theme: undefined,
  setTheme: (theme: Theme) => {
    document.documentElement.classList.remove("dark", "light");
    if (theme) localStorage.setItem(THEME_KEY, theme);
    if (theme) document.documentElement.classList.add(theme);
    return set({ theme });
  },
}));
