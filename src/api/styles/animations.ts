import { compose, style, StyleApi } from "../style";
import { keyframes } from "@emotion/react";

export const keyframe = style({
  prop: ["kf", "keyframe"],
  css: () => (value: string) => {
    const map: Record<string, string> = {
      spin: keyframes`
        from {
          transform: rotate(0deg);
        }
    
        to {
          transform: rotate(360deg);
        }
      `,
      ping: keyframes`
        0% {
          transform: scale(1);
          opacity: 1;
        }
    
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      `,
      pulse: keyframes`
        0%, 100% {
          opacity: 1;
        }
    
        50% {
          opacity: .5;
        }
      `,
      bounce: keyframes`
        0%, 100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
    
        50% {
          transform: translateY(0);
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      `,
    };
    return map[value] ?? value;
  },
});

export const property = style({
  prop: ["prop", "property"],
  css: () => (value: string) => {
    const map: Record<string, string[]> = {
      none: ["none"],
      all: ["all"],
      colors: ["background-color", "color", "border-color", "fill", "stroke"],
      opacity: ["opacity"],
      shadow: ["box-shadow"],
      transform: ["transform"],
      default: [
        "background-color",
        "color",
        "border-color",
        "fill",
        "stroke",
        "opacity",
        "box-shadow",
        "transform",
        "filter",
        "backdrop-filter",
      ],
    };
    return map[value]?.join(", ") ?? value;
  },
});

export const timingFn = style({
  prop: ["timing", "timingFn"],
  css: () => (value: string) => {
    const map: Record<string, string> = {
      default: "ease",
      linear: "linear",
      in: "ease-in",
      out: "ease-out",
      "in-out": "ease-in-out",
      spin: "linear",
      ping: "cubic-bezier(0, 0, 0.2, 1)",
      pulse: "cubic-bezier(0.4, 0, 0.6, 1)",
      bounce: "ease",
    };
    return map[value] ?? value;
  },
});

export const duration = style({
  prop: ["dura", "duration"],
  css: () => (value: string | number) => {
    if (typeof value === "number") {
      return `${value}s`;
    }
    return value;
  },
});

export const delay = style({
  prop: ["d", "delay"],
  css: () => (value: string | number) => {
    if (typeof value === "number") {
      return `${value}s`;
    }
    return value;
  },
});

export const animations = compose(keyframe, property, timingFn, duration, delay);

export type AnimationsApi = StyleApi<typeof keyframe> &
  StyleApi<typeof property> &
  StyleApi<typeof timingFn> &
  StyleApi<typeof duration> &
  StyleApi<typeof delay>;
