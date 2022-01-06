import { Api } from "../api";
import { UstyledTheme } from "../theme";
import { Properties } from "csstype";

export type CSSProperties = Required<Properties<number | string>>;

export type ThRecord<T> = Record<number | string, T>;
export type ThFn<T> = (unit: number | string) => T;

export type UstyledFn<T> = (theme: UstyledTheme) => T;

export type UstyledApi = UstyledFn<Api>;

export type UstyledContext = {
  theme: UstyledTheme;
  api: UstyledApi;
};
