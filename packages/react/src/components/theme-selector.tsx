import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import { Dropdown, type DropdownMenuItemKey } from "./dropdown";

function getThemePreference() {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeSelector() {
  const [theme, setTheme] = useState(getThemePreference());
  const onChangeTheme = (theme: DropdownMenuItemKey) => {
    setTheme(theme.toString());
  };

  useEffect(() => {
    const isDark = theme === "dark";

    document.documentElement.classList[isDark ? "add" : "remove"]("dark");

    if (typeof localStorage !== "undefined" && "MutationObserver" in window) {
      const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains("dark");

        localStorage.setItem("theme", isDark ? "dark" : "light");
        setTheme(isDark ? "dark" : "light");
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    }
  }, [theme]);

  return (
    <Dropdown>
      <Dropdown.Button size="icon" aria-label="Select theme">
        {theme === "dark" ? (
          <MoonIcon className="h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        ) : (
          <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        )}
      </Dropdown.Button>
      <Dropdown.Menu onAction={onChangeTheme}>
        <Dropdown.MenuItem id="light">Light</Dropdown.MenuItem>
        <Dropdown.MenuItem id="dark">Dark</Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

ThemeSelector.displayName = "ThemeSelector";

export { ThemeSelector };
