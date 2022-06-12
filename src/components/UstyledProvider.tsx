import React, { createContext, useState } from "react";
import { UstyledTheme } from "../types";
import { ColorMode, ctx } from "../ctx";
import { api } from "../api";

// prettier-ignore
// @ts-ignore
export const UstyledContext = createContext<[UstyledTheme, React.Dispatch<React.SetStateAction<UstyledTheme>>]>(null);
export const ColorModeStorageKey = "user-color-mode";

export type UstyledThemeProviderProps = React.PropsWithChildren<{
  theme?: UstyledTheme;
}>;

export const UstyledProvider: React.FC<UstyledThemeProviderProps> = (props) => {
  const [context, setContext] = useState<UstyledTheme>({
    mode:
      (localStorage.getItem(ColorModeStorageKey) as ColorMode) ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
    ctx: props.theme?.ctx ?? ctx,
    api: props.theme?.api ?? api,
  });

  return <UstyledContext.Provider value={[context, setContext]}>{props.children}</UstyledContext.Provider>;
};
