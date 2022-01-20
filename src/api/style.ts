import { AtFn, AtGenerator, AtOptions, CSSObject, StyleFn, StyleGenerator, StyleOptions } from "../types";
import { UstyledTheme } from "../theme";

export const compose = (...generators: any[]): any => {
  return (theme: UstyledTheme) => generators.map((generator) => generator(theme)).reduce(Object.assign, {});
};

export const style = <K extends string = string, V = any>(opts: StyleOptions<K, V>): StyleGenerator<K, V> => {
  return (theme) => {
    const prop = typeof opts.prop === "string" ? [opts.prop] : opts.prop;
    const getter = (value: V): CSSObject => {
      if (value === null || value === undefined) {
        return {};
      }
      // @ts-ignore
      const obj = opts.css(value);
      const css = typeof obj === "function" ? obj(theme) : obj;
      return css ?? {};
    };

    const generators: Record<string, StyleFn<V>> = {};
    for (const key of prop) {
      generators[key] = getter;
    }
    return generators;
  };
};

export const at = <K extends string = string, V = any>(opts: AtOptions<K, V>): AtGenerator<K, V> => {
  return (theme) => {
    const prop = typeof opts.prop === "string" ? [opts.prop] : opts.prop;
    const getter = (value: V): string => {
      if (value === null || value === undefined) {
        return "";
      }
      // @ts-ignore
      const obj = opts.rule(value);
      const rule = typeof obj === "function" ? obj(theme) : obj;
      return rule ?? "";
    };

    const generators: Record<string, AtFn<V>> = {};
    for (const key of prop) {
      generators[key] = getter;
    }
    return generators;
  };
};
