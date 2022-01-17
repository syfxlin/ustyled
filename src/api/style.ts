import { CSSObject, StyleFn, StyleGenerator, StyleOptions } from "../types";

export const compose = (...generators: StyleGenerator[]): StyleGenerator => {
  return (theme) => generators.map((generator) => generator(theme)).reduce(Object.assign, {});
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
