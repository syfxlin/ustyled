import React, { createContext, useEffect, useState } from "react";
import { StyleGenerator, UstyledContext } from "../types";
import { useMediaQuery } from "../hooks/use-media-query";
import { UstyledTheme } from "../theme";
import { defaultTheme } from "../theme/default";
import { styles } from "../api/styles";

// prettier-ignore
// @ts-ignore
export const UstyledCtx = createContext<[UstyledContext, React.Dispatch<React.SetStateAction<UstyledContext>>]>(null);

export type UstyledThemeProviderProps = {
  theme?: UstyledTheme;
  generator?: StyleGenerator;
};

export const UstyledProvider: React.FC<UstyledThemeProviderProps> = (props) => {
  const [ctx, setCtx] = useState<UstyledContext>({
    theme: props.theme ?? defaultTheme,
    generator: props.generator ?? styles,
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

  return <UstyledCtx.Provider value={[ctx, setCtx]}>{props.children}</UstyledCtx.Provider>;
};
