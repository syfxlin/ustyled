import { CSSScalar } from "./base";
import { UstyledCtx } from "./theme";

export type StyleOptions<K extends string, V extends Array<any>> = {
  prop: K | K[];
  css: (ctx: UstyledCtx) => (...value: V) => CSSScalar;
};

export type StyleGenerator<K extends string, V extends Array<any>> = (ctx: UstyledCtx) => {
  [P in K]: (...value: V) => CSSScalar;
};

export type StyleApi<T extends (...args: any) => any> = ReturnType<T>;
