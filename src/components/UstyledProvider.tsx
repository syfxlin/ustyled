import React, { createContext, useEffect, useMemo, useState } from "react";
import { FullColorMode, UstyledCtx, UstyledTheme } from "../types";
import deepmerge from "deepmerge";
import { theme } from "../theme";
import { ssr } from "../utils/ssr";

// prettier-ignore
// @ts-ignore
export const UstyledContext = createContext<{ ctx: UstyledCtx, mode: FullColorMode, setMode: React.Dispatch<React.SetStateAction<FullColorMode>> }>(null);
export const ColorModeStorageKey = "user-color-mode";

export type UstyledThemeProviderProps = React.PropsWithChildren<{
  theme?: Partial<UstyledTheme>;
}>;

export const UstyledProvider: React.FC<UstyledThemeProviderProps> = (props) => {
  // color mode
  const [mode, setMode] = useState<FullColorMode>(
    ssr(() => localStorage.getItem(ColorModeStorageKey) as FullColorMode) || "auto"
  );

  // ctx, theme
  const ctx = useMemo<UstyledCtx>(() => {
    const detect = ssr(() => window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    return {
      mode: mode === "auto" ? detect : mode,
      ...deepmerge(theme, props.theme ?? {}),
    };
  }, [mode, props.theme]);

  // store color mode
  useEffect(() => {
    if (mode === "auto") {
      ssr(() => localStorage.removeItem(ColorModeStorageKey));
    } else {
      ssr(() => localStorage.setItem(ColorModeStorageKey, mode));
    }
  }, [mode]);

  return <UstyledContext.Provider value={{ ctx, mode, setMode }}>{props.children}</UstyledContext.Provider>;
};
