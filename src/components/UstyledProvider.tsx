import React, { createContext, useEffect, useMemo, useState } from "react";
import { FullColorMode, UstyledCtx, UstyledTheme } from "../types";
import deepmerge from "deepmerge";
import { theme } from "../theme";

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
    (localStorage.getItem(ColorModeStorageKey) as FullColorMode) || "auto"
  );

  // ctx, theme
  const ctx = useMemo<UstyledCtx>(() => {
    const detect = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    return {
      mode: mode === "auto" ? detect : mode,
      ...deepmerge(theme, props.theme ?? {}),
    };
  }, [mode, props.theme]);

  // store color mode
  useEffect(() => {
    if (mode === "auto") {
      localStorage.removeItem(ColorModeStorageKey);
    } else {
      localStorage.setItem(ColorModeStorageKey, mode);
    }
  }, [mode]);

  return <UstyledContext.Provider value={{ ctx, mode, setMode }}>{props.children}</UstyledContext.Provider>;
};
