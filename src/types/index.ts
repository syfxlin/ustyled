import * as CSS from "csstype";
import { UstyledTheme } from "../theme";

export type CSSProperties = CSS.Properties<string | number>;

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

export type CSSScalar = undefined | string | number;

export interface CSSObject extends CSSProperties, CSSPseudos {
  [key: string]: CSSObject | CSSScalar;
}

export type CSSFromTheme = (theme: UstyledTheme) => CSSObject | null | undefined;

export type StyleOptions<K extends string = string, V = any> = {
  prop: K | K[];
  css: (value: NonNullable<V>) => CSSObject | CSSFromTheme | null | undefined;
};
export type StyleFn<V = any> = (value: V) => CSSObject;
export type StyleGenerator<K extends string = string, V = any> = (theme: UstyledTheme) => Record<K, StyleFn<V>>;

// TODO: responsive 嵌套
export interface CSSVariables extends CSSObject {}
export type CSSInterpolation =
  | null
  | undefined
  | boolean
  | number
  | string
  | Responsive<CSSVariables>
  | Array<CSSInterpolation>;
export interface CSSFunction {
  (...args: Array<CSSInterpolation>): Array<string | CSSObject>;
  (template: TemplateStringsArray, ...args: Array<CSSInterpolation>): Array<string | CSSObject>;
}
export type CSSApi<T extends (...args: any) => any> = ReturnType<T>;
export type CSSVar<T extends Record<string, StyleFn>> = {
  [K in keyof T]?: Parameters<T[K]>[0];
};

export type ResponsiveValue<T> = T | [T] | [T, T] | [T, T, T] | [T, T, T, T] | [T, T, T, T, T] | [T, T, T, T, T, T];
export type Responsive<T> = {
  [K in keyof T]: ResponsiveValue<T[K]>;
};

export type UstyledContext = {
  theme: UstyledTheme;
  generator: StyleGenerator;
};
/**
 * {
 *   m: 1,
 *   mt: 2,
 * }
 *
 * `
 * m: 1;
 * mt: 2;
 * `
 *
 * [u.m(1)]
 */
