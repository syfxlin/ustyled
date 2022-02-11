import { compose, style } from "../style";
import { CSSApi, CSSProperties, CSSVar } from "../../types";

// transition
export const transition = style<"transition", CSSProperties["transition"]>({
  prop: ["transition"],
  css: (value) => (theme) => {
    value = String(value);
    const properties = theme.animations.properties(value);
    if (properties) {
      const duration = theme.animations.durations(value) ?? "1s";
      const timing = theme.animations.timingFns(value) ?? "linear";
      const delay = theme.animations.delays(value) ?? "0s";
      return {
        transition: `${properties} ${duration} ${timing} ${delay}`,
      };
    }
    return {
      transition: value,
    };
  },
});

// transition-property
export const transitionProperty = style<"transitionProperty", CSSProperties["transitionProperty"]>({
  prop: ["transitionProperty"],
  css: (value) => (theme) => ({
    transitionProperty: theme.animations.properties(value) ?? value,
  }),
});

// transition-duration
export const transitionDuration = style<"transitionDuration", CSSProperties["transitionDuration"]>({
  prop: ["transitionDuration"],
  css: (value) => (theme) => ({
    transitionDuration: theme.animations.durations(value) ?? value,
  }),
});

// transition-timing-function
export const transitionTimingFunction = style<"transitionTimingFunction", CSSProperties["transitionTimingFunction"]>({
  prop: ["transitionTimingFunction"],
  css: (value) => (theme) => ({
    transitionTimingFunction: theme.animations.timingFns(value) ?? value,
  }),
});

// transition-delay
export const transitionDelay = style<"transitionDelay", CSSProperties["transitionDelay"]>({
  prop: ["transitionDelay"],
  css: (value) => (theme) => ({
    transitionDelay: theme.animations.delays(value) ?? value,
  }),
});

export const transitions = compose(
  transition,
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay
);

export type TransitionsApi = CSSApi<typeof transition> &
  CSSApi<typeof transitionProperty> &
  CSSApi<typeof transitionDuration> &
  CSSApi<typeof transitionTimingFunction> &
  CSSApi<typeof transitionDelay>;

export type TransitionsVar = CSSVar<TransitionsApi>;
