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
export type AtOptions<K extends string = string, V = any> = {
  prop: K | K[];
  rule: (value: NonNullable<V>) => string | ((theme: UstyledTheme) => string | null | undefined) | undefined | null;
};
export type AtFn<V = any> = (value: V) => string;
export type AtGenerator<K extends string = string, V = any> = (theme: UstyledTheme) => Record<K, AtFn<V>>;

export type CSSApi<T extends (...args: any) => any> = ReturnType<T>;
export type CSSVar<T extends Record<string, any>> = {
  [K in keyof T]?: Parameters<T[K]>[0];
};

export type CSSVariablePseudos = { [K in CSS.Pseudos]?: CSSVariables };
export interface CSSVariables extends Responsive<CSSProperties>, CSSVariablePseudos {
  [key: string]: CSSVariables | ResponsiveValue<CSSScalar>;
}

export type CSSInterpolation = null | undefined | boolean | number | string | CSSVariables | Array<CSSInterpolation>;
export interface CSSFunction {
  (...args: Array<CSSInterpolation>): Array<string | CSSObject>;
  (template: TemplateStringsArray, ...args: Array<CSSInterpolation>): Array<string | CSSObject>;
}
export type CreateCSS = (props: {
  theme: UstyledTheme;
  styles: ReturnType<StyleGenerator>;
  ats: ReturnType<AtGenerator>;
}) => CSSFunction;

export type ResponsiveValue<T> = T | [T] | [T, T] | [T, T, T] | [T, T, T, T] | [T, T, T, T, T] | [T, T, T, T, T, T];
export type Responsive<T> = {
  [K in keyof T]: ResponsiveValue<T[K]>;
};

export type UstyledApi = {
  style: StyleGenerator;
  at: AtGenerator;
};
export type UstyledContext = {
  theme: UstyledTheme;
  api: UstyledApi;
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
