import { responsive, ResponsiveValue } from "./responsive";
import { CSSProperties } from "../types";
import { CSSObject } from "@emotion/react";
import { UstyledFn } from "./index";

export type Position = {
  pos: (value: ResponsiveValue<CSSProperties["position"]>) => CSSObject;
  zIndex: (value: ResponsiveValue<CSSProperties["zIndex"]>) => CSSObject;
  top: (value: ResponsiveValue<CSSProperties["top"]>) => CSSObject;
  bottom: (value: ResponsiveValue<CSSProperties["bottom"]>) => CSSObject;
  left: (value: ResponsiveValue<CSSProperties["left"]>) => CSSObject;
  right: (value: ResponsiveValue<CSSProperties["right"]>) => CSSObject;
  inset: (value: ResponsiveValue<CSSProperties["left"]>) => CSSObject;
  insetX: (value: ResponsiveValue<CSSProperties["left"]>) => CSSObject;
  insetY: (value: ResponsiveValue<CSSProperties["left"]>) => CSSObject;
};

export const position: UstyledFn<Position> = (theme) => ({
  pos: (value) =>
    responsive(theme, value, (unit) => ({
      position: unit,
    })),
  zIndex: (value) =>
    responsive(theme, value, (unit) => ({
      zIndex: unit,
    })),
  top: (value) =>
    responsive(theme, value, (unit) => ({
      top: theme.spacings(unit),
    })),
  bottom: (value) =>
    responsive(theme, value, (unit) => ({
      bottom: theme.spacings(unit),
    })),
  left: (value) =>
    responsive(theme, value, (unit) => ({
      left: theme.spacings(unit),
    })),
  right: (value) =>
    responsive(theme, value, (unit) => ({
      right: theme.spacings(unit),
    })),
  inset: (value) =>
    responsive(theme, value, (unit) => ({
      left: theme.spacings(unit),
      right: theme.spacings(unit),
      top: theme.spacings(unit),
      bottom: theme.spacings(unit),
    })),
  insetX: (value) =>
    responsive(theme, value, (unit) => ({
      left: theme.spacings(unit),
      right: theme.spacings(unit),
    })),
  insetY: (value) =>
    responsive(theme, value, (unit) => ({
      top: theme.spacings(unit),
      bottom: theme.spacings(unit),
    })),
});
