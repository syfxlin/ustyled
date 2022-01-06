import React, { createContext, useEffect, useState } from "react";
import { UstyledApi, UstyledContext } from "../types";
import { useMediaQuery } from "../hooks/use-media-query";
import { api } from "../api";
import { defaultTheme, UstyledTheme } from "../theme";

// prettier-ignore
// @ts-ignore
export const UstyledCtx = createContext<[UstyledContext, React.Dispatch<React.SetStateAction<UstyledContext>>]>(null);

export type UstyledThemeProviderProps = {
  theme?: UstyledTheme;
  api?: UstyledApi;
};

export const UstyledProvider: React.FC<UstyledThemeProviderProps> = (props) => {
  const [ctx, setCtx] = useState<UstyledContext>({
    theme: props.theme ?? defaultTheme,
    api: props.api ?? api,
  });

  // auto change color mode
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  useEffect(() => {
    setCtx((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        colorMode: isDark ? "dark" : "light",
      },
    }));
  }, [isDark, setCtx]);

  return (
    <UstyledCtx.Provider value={[ctx, setCtx]}>
      {props.children}
    </UstyledCtx.Provider>
  );
};
