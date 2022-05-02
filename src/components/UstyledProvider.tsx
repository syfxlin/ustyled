import React, { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { UstyledTheme } from "../types";
import { ctx } from "../ctx";
import { api } from "../api";

// prettier-ignore
// @ts-ignore
export const UstyledContext = createContext<[UstyledTheme, React.Dispatch<React.SetStateAction<UstyledTheme>>]>(null);

export type UstyledThemeProviderProps = React.PropsWithChildren<{
  theme?: UstyledTheme;
}>;

export const UstyledProvider: React.FC<UstyledThemeProviderProps> = (props) => {
  const [context, setContext] = useState<UstyledTheme>({
    ctx: props.theme?.ctx ?? ctx,
    api: props.theme?.api ?? api,
  });

  // auto change color mode
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    setContext((prev) => ({
      ...prev,
      ctx: {
        ...prev.ctx,
        mode: isDark ? "dark" : "light",
      },
    }));
  }, [isDark, setContext]);

  return <UstyledContext.Provider value={[context, setContext]}>{props.children}</UstyledContext.Provider>;
};
