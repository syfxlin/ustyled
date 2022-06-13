import { keyframes as kf } from "@emotion/react";
import { UstyledTheme } from "../../types";

export const keyframes: UstyledTheme["keyframes"] = {
  spin: kf`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `,
  ping: kf`
    0% {
      transform: scale(1);
      opacity: 1;
    }

    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  `,
  pulse: kf`
    0%, 100% {
      opacity: 1;
    }

    50% {
      opacity: .5;
    }
  `,
  bounce: kf`
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

export const properties: UstyledTheme["properties"] = {
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

export const timingFns: UstyledTheme["timingFns"] = {
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

export const durations: UstyledTheme["timingFns"] = {
  unit: "0.3s",
};

export const delays: UstyledTheme["delays"] = {
  unit: "1s",
};
