import { useEffect } from "react";
import { THEME_KEY, useThemeStore, type Theme } from "@/shared/hooks/useTheme";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const { theme, setTheme } = useThemeStore();
  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY) as Theme;
    if (localTheme) return setTheme(localTheme);
    const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(osTheme);
  }, []);
  if (!theme) return null;
  return <>{children}</>;
};

export default ThemeProvider;
