import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import { Dropdown, type DropdownMenuItemKey } from "./dropdown";

type Theme = "light" | "dark" | "system";

function getThemePreference(key?: string): Theme {
  if (key && typeof window !== "undefined") {
    return (window.localStorage.getItem("theme") ?? "system") as Theme;
  }

  return "system";
}

export interface ThemeSelectorProps {
  cookie?: string;
  cookieMaxAge?: number;
  localStorageKey?: string;
}

function ThemeSelector({
  cookie,
  cookieMaxAge = 31536000,
  localStorageKey,
}: ThemeSelectorProps) {
  const [theme, setTheme] = useState<Theme>(
    getThemePreference(localStorageKey),
  );
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
    if (typeof window !== "undefined") {
      const isDark =
        theme === "dark" ||
        (theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }
  }, [theme]);

  return (
    <Dropdown>
      <Dropdown.Button size="icon" aria-label="Select theme">
        {theme === "light" && (
          <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        )}
        {theme === "dark" && (
          <MoonIcon className="h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
