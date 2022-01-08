import { CSSProperties } from "../types";
import { CSSObject } from "@emotion/react";
import { UstyledFn } from "./index";
import { responsive, ResponsiveValue } from "./responsive";
import { $color } from "./util";

// prettier-ignore
export interface Border {
  // all
  b: (value: ResponsiveValue<CSSProperties["border"]>) => CSSObject;
  bt: (value: ResponsiveValue<CSSProperties["borderTop"]>) => CSSObject;
  bb: (value: ResponsiveValue<CSSProperties["borderBottom"]>) => CSSObject;
  bl: (value: ResponsiveValue<CSSProperties["borderLeft"]>) => CSSObject;
  br: (value: ResponsiveValue<CSSProperties["borderRight"]>) => CSSObject;
  // width
  bw: (value: ResponsiveValue<CSSProperties["borderWidth"]>) => CSSObject;
  btw: (value: ResponsiveValue<CSSProperties["borderTopWidth"]>) => CSSObject;
  bbw: (value: ResponsiveValue<CSSProperties["borderBottomWidth"]>) => CSSObject;
  blw: (value: ResponsiveValue<CSSProperties["borderLeftWidth"]>) => CSSObject;
  brw: (value: ResponsiveValue<CSSProperties["borderRightWidth"]>) => CSSObject;
  // style
  bs: (value: ResponsiveValue<CSSProperties["borderStyle"]>) => CSSObject;
  bts: (value: ResponsiveValue<CSSProperties["borderTopStyle"]>) => CSSObject;
  bbs: (value: ResponsiveValue<CSSProperties["borderBottomStyle"]>) => CSSObject;
  bls: (value: ResponsiveValue<CSSProperties["borderLeftStyle"]>) => CSSObject;
  brs: (value: ResponsiveValue<CSSProperties["borderRightStyle"]>) => CSSObject;
  // color
  bc: (value: ResponsiveValue<CSSProperties["borderColor"]>, dark?: ResponsiveValue<CSSProperties["borderColor"]>) => CSSObject;
  btc: (value: ResponsiveValue<CSSProperties["borderTopColor"]>, dark?: ResponsiveValue<CSSProperties["borderTopColor"]>) => CSSObject;
  bbc: (value: ResponsiveValue<CSSProperties["borderBottomColor"]>, dark?: ResponsiveValue<CSSProperties["borderBottomColor"]>) => CSSObject;
  blc: (value: ResponsiveValue<CSSProperties["borderLeftColor"]>, dark?: ResponsiveValue<CSSProperties["borderLeftColor"]>) => CSSObject;
  brc: (value: ResponsiveValue<CSSProperties["borderRightColor"]>, dark?: ResponsiveValue<CSSProperties["borderRightColor"]>) => CSSObject;
  // radius
  r: (value: ResponsiveValue<CSSProperties["borderRadius"]>) => CSSObject;
  rtl: (value: ResponsiveValue<CSSProperties["borderTopLeftRadius"]>) => CSSObject;
  rtr: (value: ResponsiveValue<CSSProperties["borderTopRightRadius"]>) => CSSObject;
  rbl: (value: ResponsiveValue<CSSProperties["borderBottomLeftRadius"]>) => CSSObject;
  rbr: (value: ResponsiveValue<CSSProperties["borderBottomRightRadius"]>) => CSSObject;
  rt: (value: ResponsiveValue<CSSProperties["borderRadius"]>) => CSSObject;
  rb: (value: ResponsiveValue<CSSProperties["borderRadius"]>) => CSSObject;
  rl: (value: ResponsiveValue<CSSProperties["borderRadius"]>) => CSSObject;
  rr: (value: ResponsiveValue<CSSProperties["borderRadius"]>) => CSSObject;
  // other
  bx: (value: ResponsiveValue<CSSProperties["border"]>) => CSSObject;
  by: (value: ResponsiveValue<CSSProperties["border"]>) => CSSObject;
}

export const border: UstyledFn<Border> = (theme) => {
  const color = $color(theme);
  return {
    b: (value) =>
      responsive(theme, value, (unit) => ({
        border: theme.borderWidths(unit),
      })),
    bt: (value) =>
      responsive(theme, value, (unit) => ({
        borderTop: theme.borderWidths(unit),
      })),
    bb: (value) =>
      responsive(theme, value, (unit) => ({
        borderBottom: theme.borderWidths(unit),
      })),
    bl: (value) =>
      responsive(theme, value, (unit) => ({
        borderLeft: theme.borderWidths(unit),
      })),
    br: (value) =>
      responsive(theme, value, (unit) => ({
        borderRight: theme.borderWidths(unit),
      })),
    bw: (value) =>
      responsive(theme, value, (unit) => ({
        borderWidth: theme.borderWidths(unit),
      })),
    btw: (value) =>
      responsive(theme, value, (unit) => ({
        borderTopWidth: theme.borderWidths(unit),
      })),
    bbw: (value) =>
      responsive(theme, value, (unit) => ({
        borderBottomWidth: theme.borderWidths(unit),
      })),
    blw: (value) =>
      responsive(theme, value, (unit) => ({
        borderLeftWidth: theme.borderWidths(unit),
      })),
    brw: (value) =>
      responsive(theme, value, (unit) => ({
        borderRightWidth: theme.borderWidths(unit),
      })),
    bs: (value) =>
      responsive(theme, value, (unit) => ({
        borderStyle: unit,
      })),
    bts: (value) =>
      responsive(theme, value, (unit) => ({
        borderTopStyle: unit,
      })),
    bbs: (value) =>
      responsive(theme, value, (unit) => ({
        borderBottomStyle: unit,
      })),
    bls: (value) =>
      responsive(theme, value, (unit) => ({
        borderLeftStyle: unit,
      })),
    brs: (value) =>
      responsive(theme, value, (unit) => ({
        borderRightStyle: unit,
      })),
    bc: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          borderColor: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          borderColor: color(unit),
        }));
      }
    },
    btc: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          borderTopColor: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          borderTopColor: color(unit),
        }));
      }
    },
    bbc: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          borderBottomColor: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          borderBottomColor: color(unit),
        }));
      }
    },
    blc: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          borderLeftColor: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          borderLeftColor: color(unit),
        }));
      }
    },
    brc: (value, dark) => {
      if (theme.colorMode === "light" || !dark) {
        return responsive(theme, value, (unit) => ({
          borderRightColor: color(unit),
        }));
      } else {
        return responsive(theme, dark, (unit) => ({
          borderRightColor: color(unit),
        }));
      }
    },
    r: (value) =>
      responsive(theme, value, (unit) => ({
        borderRadius: theme.radius(unit),
      })),
    rtl: (value) =>
      responsive(theme, value, (unit) => ({
        borderTopLeftRadius: theme.radius(unit),
      })),
    rtr: (value) =>
      responsive(theme, value, (unit) => ({
        borderTopRightRadius: theme.radius(unit),
      })),
    rbl: (value) =>
      responsive(theme, value, (unit) => ({
        borderBottomLeftRadius: theme.radius(unit),
      })),
    rbr: (value) =>
      responsive(theme, value, (unit) => ({
        borderBottomRightRadius: theme.radius(unit),
      })),
    rt: (value) =>
      responsive(theme, value, (unit) => ({
        borderTopLeftRadius: theme.radius(unit),
        borderTopRightRadius: theme.radius(unit),
      })),
    rb: (value) =>
      responsive(theme, value, (unit) => ({
        borderBottomLeftRadius: theme.radius(unit),
        borderBottomRightRadius: theme.radius(unit),
      })),
    rl: (value) =>
      responsive(theme, value, (unit) => ({
        borderTopLeftRadius: theme.radius(unit),
        borderBottomLeftRadius: theme.radius(unit),
      })),
    rr: (value) =>
      responsive(theme, value, (unit) => ({
        borderTopRightRadius: theme.radius(unit),
        borderBottomRightRadius: theme.radius(unit),
      })),
    bx: (value) =>
      responsive(theme, value, (unit) => ({
        borderLeft: theme.borderWidths(unit),
        borderRight: theme.borderWidths(unit),
      })),
    by: (value) =>
      responsive(theme, value, (unit) => ({
        borderTop: theme.borderWidths(unit),
        borderBottom: theme.borderWidths(unit),
      })),
  };
};
