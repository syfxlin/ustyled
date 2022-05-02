import { CSSScalar } from "../types";
import { UstyledCtx } from "../ctx";

export type StyleOptions<K extends string, V extends Array<any>> = {
  prop: K | K[];
  css: (ctx: UstyledCtx) => (...value: V) => CSSScalar;
};

export type StyleGenerator<K extends string, V extends Array<any>> = (theme: UstyledCtx) => {
  [P in K]: (...value: V) => CSSScalar;
};

export type StyleApi<T extends (...args: any) => any> = ReturnType<T>;

export const style = <K extends string = string, V extends Array<any> = any>(
  opts: StyleOptions<K, V>
): StyleGenerator<K, V> => {
  return (ctx) => {
    const prop = typeof opts.prop === "string" ? [opts.prop] : opts.prop;
    return prop.reduce((a, i) => Object.assign(a, { [i]: opts.css(ctx) }), {}) as any;
  };
};

export const compose = (...generators: any[]): any => {
  return (ctx: UstyledCtx) => generators.map((generator) => generator(ctx)).reduce(Object.assign, {});
};
