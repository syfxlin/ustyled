import { StyleGenerator, StyleOptions } from "../types";

export const style = <K extends string = string, V extends Array<any> = any>(
  opts: StyleOptions<K, V>
): StyleGenerator<K, V> => {
  return (ctx) => {
    const prop = typeof opts.prop === "string" ? [opts.prop] : opts.prop;
    return prop.reduce((a, i) => Object.assign(a, { [i]: opts.css(ctx) }), {}) as any;
  };
};
