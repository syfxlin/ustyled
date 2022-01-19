import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";

// animation
export const animation = style<"animation", CSSProperties["animation"]>({
  prop: ["animation"],
  css: (value) => (theme) => {
    value = String(value);
    const kf = theme.animations.keyframes(value);
    if (kf) {
      const duration = theme.animations.durations(value) ?? "1s";
      const timing = theme.animations.timingFns(value) ?? "linear";
      const delay = theme.animations.delays(value) ?? "0s";
      return {
        animation: `${kf} ${duration} ${timing} ${delay} infinite`,
      };
    }
    return {
      animation: value,
    };
  },
});

// animation-timing-function
export const animationTimingFunction = style<"animationTimingFunction", CSSProperties["animationTimingFunction"]>({
  prop: ["animationTimingFunction"],
  css: (value) => (theme) => ({
    animationTimingFunction: theme.animations.timingFns(String(value)) ?? value,
  }),
});

// animation-delay
export const animationDelay = style<"animationDelay", CSSProperties["animationDelay"]>({
  prop: ["animationDelay"],
  css: (value) => (theme) => ({
    animationDelay: theme.animations.delays(value) ?? value,
  }),
});

// animation-duration
export const animationDuration = style<"animationDuration", CSSProperties["animationDuration"]>({
  prop: ["animationDuration"],
  css: (value) => (theme) => ({
    animationDuration: theme.animations.durations(value) ?? value,
  }),
});

// animation-name
export const animationName = style<"animationName", CSSProperties["animationName"]>({
  prop: ["animationName"],
  css: (value) => (theme) => ({
    animationName: theme.animations.keyframes(String(value)) ?? value,
  }),
});

export const animations = compose(animation, animationTimingFunction, animationDelay, animationDuration, animationName);

export type AnimationsApi =
  | CSSApi<typeof animation>
  | CSSApi<typeof animationTimingFunction>
  | CSSApi<typeof animationDelay>
  | CSSApi<typeof animationDuration>
  | CSSApi<typeof animationName>;

export type AnimationsVar = CSSVar<AnimationsApi>;
