import { UstyledCtx } from "../ctx";
import { UstyledApi } from "../api";

export type CSSScalar = undefined | null | string | number;

export type UstyledTheme = {
  ctx: UstyledCtx;
  api: (ctx: UstyledCtx) => UstyledApi;
};
