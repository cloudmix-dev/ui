import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import { Dropdown, type DropdownMenuItemKey } from "./dropdown";

export type Theme = "light" | "dark" | "system";

function getThemePreference(localStorageKey?: string): Theme {
  if (typeof window !== "undefined") {
    if (localStorageKey) {
      const localStorageTheme = window.localStorage.getItem(localStorageKey);

      if (localStorageTheme) {
        return localStorageTheme as Theme;
      }
    }

    if (document.cookie) {
      const cookieTheme = document.cookie
        .split("; ")
        .find((row) => row.startsWith("theme="));

      if (cookieTheme) {
        return cookieTheme.split("=")[1] as Theme;
      }
    }

    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      return "dark";
    }

    const isLight = document.documentElement.classList.contains("light");

    if (isLight) {
      return "light";
    }

    return "system";
  }

  return "system";
}

export interface ThemeSelectorProps {
  cookie?: string;
  cookieMaxAge?: number;
  defaultTheme?: Theme;
  localStorageKey?: string;
}

function ThemeSelector({
  cookie,
  cookieMaxAge = 31536000,
  defaultTheme = "system",
  localStorageKey,
}: ThemeSelectorProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const onChangeTheme = (theme: DropdownMenuItemKey) => {
    setTheme(theme.toString() as Theme);

    if (localStorageKey) {
      window.localStorage.setItem(localStorageKey, theme.toString());
    }

    if (cookie) {
      document.cookie = `${cookie}=${theme.toString()};path=/;max-age=${cookieMaxAge};`;
    }
  };

  useEffect(() => {
    setTheme(getThemePreference(localStorageKey));
  }, [localStorageKey]);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Dropdown>
      <Dropdown.Button size="icon" aria-label="Select theme">
        {theme === "light" && (
          <SunIcon
            className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            aria-hidden="true"
          />
        )}
        {theme === "dark" && (
          <MoonIcon
            className="h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            aria-hidden="true"
          />
        )}
        {theme === "system" && <ComputerDesktopIcon className="h-6 w-6" />}
      </Dropdown.Button>
      <Dropdown.Menu onAction={onChangeTheme}>
        <Dropdown.MenuItem id="light">Light</Dropdown.MenuItem>
        <Dropdown.MenuItem id="dark">Dark</Dropdown.MenuItem>
        <Dropdown.Seperator />
        <Dropdown.MenuItem id="system">System</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

ThemeSelector.displayName = "ThemeSelector";

export { ThemeSelector };
