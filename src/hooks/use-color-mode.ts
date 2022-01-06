import { useUstyled } from "./use-ustyled";
import { ColorMode } from "../theme";

export const useColorMode = () => {
  const [ctx, setCtx] = useUstyled();

  const setColorMode = (c?: ColorMode) => {
    setCtx((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        colorMode: c ?? (prev.theme.colorMode === "light" ? "dark" : "light"),
      },
    }));
  };

  return [ctx.theme.colorMode, setColorMode] as const;
};
