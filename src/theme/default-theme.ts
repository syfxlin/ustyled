import { defaultColors } from "./default-colors";
import { UstyledTheme } from "./";

export const defaultTheme: UstyledTheme = {
  colorMode: "light",
  primaryColor: "blue",
  breakpoints: {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1536,
  },
  animations: {
    keyframes: (unit) => {
      return undefined;
      // const map: Record<string, string> = {
      //   spin: keyframes`
      //   from {
      //     transform: rotate(0deg);
      //   }
      //
      //   to {
      //     transform: rotate(360deg);
      //   }
      // `,
      //   ping: keyframes`
      //   0% {
      //     transform: scale(1);
      //     opacity: 1;
      //   }
      //
      //   75%, 100% {
      //     transform: scale(2);
      //     opacity: 0;
      //   }
      // `,
      //   pulse: keyframes`
      //   0%, 100% {
      //     opacity: 1;
      //   }
      //
      //   50% {
      //     opacity: .5;
      //   }
      // `,
      //   bounce: keyframes`
      //   0%, 100% {
      //     transform: translateY(-25%);
      //     animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      //   }
      //
      //   50% {
      //     transform: translateY(0);
      //     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      //   }
      // `,
      // };
      // return map[unit];
    },
    properties: (unit) => {
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
      return map[unit]?.join(", ");
    },
    timingFns: (unit) => {
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
      return map[unit];
    },
    durations: (unit) => {
      if (typeof unit === "number") {
        return `${unit}s`;
      }
      return undefined;
    },
    delays: (unit) => {
      if (typeof unit === "number") {
        return `${unit}s`;
      }
      return undefined;
    },
  },
  colors: defaultColors,
  shadows: (unit) => {
    const map: Record<string, string> = {
      xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
      sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
      md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
      xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px",
    };
    return map[unit];
  },
  fonts: (unit) => {
    const map: Record<string, string> = {
      sans: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
      serif: `Georgia, Cambria, "Times New Roman", Times, serif`,
    };
    return map[unit];
  },
  fontSizes: (unit) => {
    if (typeof unit === "number") {
      return `${unit}rem`;
    }
    // TODO: h1-h6
    return undefined;
  },
  letterSpacings: (unit) => {
    if (typeof unit === "number") {
      return `${unit * 0.025}rem`;
    }
    return undefined;
  },
  lineHeights: () => {
    return undefined;
  },
  sizes: (unit) => {
    if (typeof unit === "number") {
      return `${unit * 0.25}rem`;
    }
    const map: Record<string, string> = {
      full: "100%",
      min: "min-content",
      max: "max-content",
      vw: "100vw",
      vh: "100vh",
    };
    return map[unit];
  },
  spacings: (unit) => {
    if (typeof unit === "number") {
      return `${unit * 0.25}rem`;
    }
    return undefined;
  },
  radius: (unit) => {
    if (typeof unit === "number") {
      return `${unit * 0.25}rem`;
    }
    const map: Record<string, string> = {
      none: "0px",
      half: "50%",
      full: "9999px",
    };
    return map[unit];
  },
  borderWidths: (unit) => {
    if (typeof unit === "number") {
      return `${unit}px`;
    }
    return undefined;
  },
};
