import { UstyledApi } from "../api";
import { UstyledTheme } from "../theme";
import { Properties } from "csstype";

export type CSSProperties = Required<Properties<number | string>>;

export interface UstyledContext {
  theme: UstyledTheme;
  api: UstyledApi;
}
