import { responsive, ResponsiveValue } from "./responsive";
import { CSSProperties } from "../types";
import { CSSObject } from "@emotion/react";
import { UstyledFn } from "./index";

// prettier-ignore
export type Shadow = {
  shadow: (value: ResponsiveValue<CSSProperties["boxShadow"]>) => CSSObject;
  textShadow: (value: ResponsiveValue<CSSProperties["textShadow"]>) => CSSObject;
}

export const shadow: UstyledFn<Shadow> = (theme) => ({
  shadow: (value) =>
    responsive(theme, value, (unit) => ({
      boxShadow: theme.shadows(unit),
    })),
  textShadow: (value) =>
    responsive(theme, value, (unit) => ({
      textShadow: theme.shadows(unit),
    })),
});
