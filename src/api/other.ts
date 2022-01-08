import { CSSProperties } from "../types";
import { CSSObject } from "@emotion/react";
import { responsive, ResponsiveValue } from "./responsive";
import { UstyledFn } from "./index";
import { $color } from "./util";

// prettier-ignore
export type Other = {
  animation: (value: ResponsiveValue<string>, options?: {
    infinite?: boolean;
    timingFn?: CSSProperties["animationTimingFunction"];
    duration?: CSSProperties["animationDuration"];
    delay?: CSSProperties["animationDelay"];
  }) => CSSObject;
  appearance: (value: ResponsiveValue<CSSProperties["appearance"]>) => CSSObject;
  visibility: (value: ResponsiveValue<CSSProperties["visibility"]>) => CSSObject;
  userSelect: (value: ResponsiveValue<CSSProperties["userSelect"]>) => CSSObject;
  pointerEvents: (value: ResponsiveValue<CSSProperties["pointerEvents"]>) => CSSObject;
  cursor: (value: ResponsiveValue<CSSProperties["cursor"]>) => CSSObject;
  resize: (value: ResponsiveValue<CSSProperties["resize"]>) => CSSObject;
  objectFit: (value: ResponsiveValue<CSSProperties["objectFit"]>) => CSSObject;
  objectPosition: (value: ResponsiveValue<CSSProperties["objectPosition"]>) => CSSObject;
  float: (value: ResponsiveValue<CSSProperties["float"]>) => CSSObject;
  willChange: (value: ResponsiveValue<CSSProperties["willChange"]>) => CSSObject;
  filter: (value: ResponsiveValue<CSSProperties["filter"]>) => CSSObject;
  outline: (value: ResponsiveValue<CSSProperties["outline"]>) => CSSObject;
  outlineOffset: (value: ResponsiveValue<CSSProperties["outlineOffset"]>) => CSSObject;
  outlineColor: (value: ResponsiveValue<CSSProperties["outlineColor"]>, dark?: ResponsiveValue<CSSProperties["outlineColor"]>) => CSSObject;
  transition: (value: ResponsiveValue<CSSProperties["transition"]>, options?: {
    timingFn?: CSSProperties["transitionTimingFunction"];
    duration?: CSSProperties["transitionDuration"];
    delay?: CSSProperties["transitionDelay"];
  }) => CSSObject;
  transitionProperty: (value: ResponsiveValue<CSSProperties["transitionProperty"]>) => CSSObject;
  transitionTimingFunction: (value: ResponsiveValue<CSSProperties["transitionTimingFunction"]>) => CSSObject;
  transitionDuration: (value: ResponsiveValue<CSSProperties["transitionDuration"]>) => CSSObject;
  transform: (value: ResponsiveValue<CSSProperties["transform"]>) => CSSObject;
  transformOrigin: (value: ResponsiveValue<CSSProperties["transformOrigin"]>) => CSSObject;
}

export const other: UstyledFn<Other> = (theme) => {
  const color = $color(theme);
  return {
    animation: (value, options) =>
      responsive(theme, value, (unit) => {
        const kf = theme.animations.keyframes(unit, null);
        if (kf) {
          const duration = theme.animations.durations(
            options?.duration ?? unit,
            options?.duration ?? "1s"
          );
          const timing = theme.animations.timingFns(
            options?.timingFn ?? unit,
            options?.timingFn ?? "linear"
          );
          const delay = theme.animations.delays(
            options?.delay ?? unit,
            options?.delay ?? "0s"
          );
          // prettier-ignore
          return {
            animation: `${kf} ${duration} ${timing} ${delay} ${options?.infinite ? "infinite" : ""}`,
          };
        }
        return {
          animation: unit,
        };
      }),
    appearance: (value) =>
      responsive(theme, value, (unit) => ({
        appearance: unit,
      })),
    visibility: (value) =>
      responsive(theme, value, (unit) => ({
        visibility: unit,
      })),
    userSelect: (value) =>
      responsive(theme, value, (unit) => ({
        userSelect: unit,
      })),
    pointerEvents: (value) =>
      responsive(theme, value, (unit) => ({
        pointerEvents: unit,
      })),
    cursor: (value) =>
      responsive(theme, value, (unit) => ({
        cursor: unit,
      })),
    resize: (value) =>
      responsive(theme, value, (unit) => ({
        resize: unit,
      })),
    objectFit: (value) =>
      responsive(theme, value, (unit) => ({
        objectFit: unit,
      })),
    objectPosition: (value) =>
      responsive(theme, value, (unit) => ({
        objectPosition: unit,
      })),
    float: (value) =>
      responsive(theme, value, (unit) => ({
        float: unit,
      })),
    willChange: (value) =>
      responsive(theme, value, (unit) => ({
        willChange: unit,
      })),
    filter: (value) =>
      responsive(theme, value, (unit) => ({
        filter: unit,
      })),
    outline: (value) =>
      responsive(theme, value, (unit) => ({
        outline: theme.borderWidths(unit),
      })),
    outlineOffset: (value) =>
      responsive(theme, value, (unit) => ({
        outlineOffset: theme.borderWidths(unit),
      })),
    outlineColor: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          outlineColor: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          outlineColor: color(unit),
        }));
      }
    },
    transition: (value, options) =>
      responsive(theme, value, (unit) => {
        const props = theme.animations.properties(unit, null);
        if (props) {
          const duration = theme.animations.durations(
            options?.duration ?? unit,
            options?.duration ?? "1s"
          );
          const timing = theme.animations.timingFns(
            options?.timingFn ?? unit,
            options?.timingFn ?? "linear"
          );
          const delay = theme.animations.delays(
            options?.delay ?? unit,
            options?.delay ?? "0s"
          );
          return {
            transition: `${props} ${duration} ${timing} ${delay}`,
          };
        }
        return {
          transition: unit,
        };
      }),
    transitionProperty: (value) =>
      responsive(theme, value, (unit) => ({
        transitionProperty: theme.animations.properties(unit),
      })),
    transitionTimingFunction: (value) =>
      responsive(theme, value, (unit) => ({
        transitionTimingFunction: theme.animations.timingFns(unit),
      })),
    transitionDuration: (value) =>
      responsive(theme, value, (unit) => ({
        transitionDuration: theme.animations.durations(unit),
      })),
    transform: (value) =>
      responsive(theme, value, (unit) => ({
        transform: unit,
      })),
    transformOrigin: (value) =>
      responsive(theme, value, (unit) => ({
        transformOrigin: unit,
      })),
  };
};
