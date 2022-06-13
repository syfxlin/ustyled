import { style } from "../style";
import { multiply } from "../../utils/multiply";

export const keyframe = style({
  prop: ["kf", "keyframe"],
  css: (ctx) => (value: string) => {
    return ctx.keyframes[value] ?? value;
  },
});

export const property = style({
  prop: ["pr", "property"],
  css: (ctx) => (value: string) => {
    const prop = ctx.properties[value];
    if (typeof prop === "string" && prop) {
      return prop;
    }
    if (prop instanceof Array && prop.length) {
      return prop.join(", ");
    }
    return value;
  },
});

export const timingFn = style({
  prop: ["tf", "timingFn"],
  css: (ctx) => (value: string) => {
    return ctx.timingFns[value] ?? value;
  },
});

export const duration = style({
  prop: ["du", "duration"],
  css: (ctx) => (value: string | number) => {
    if (ctx.durations[value]) {
      return ctx.durations[value];
    }
    if (typeof value === "number" && ctx.durations.unit) {
      return multiply(value, ctx.durations.unit);
    }
    return value;
  },
});

export const delay = style({
  prop: ["de", "delay"],
  css: (ctx) => (value: string | number) => {
    if (ctx.delays[value]) {
      return ctx.delays[value];
    }
    if (typeof value === "number" && ctx.delays.unit) {
      return multiply(value, ctx.delays.unit);
    }
    return value;
  },
});
