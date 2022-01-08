import { space, Space } from "./space";
import { color, Color } from "./color";
import { typography, Typography } from "./typography";
import { layout, Layout } from "./layout";
import { flexbox, Flexbox } from "./flexbox";
import { grid, Grid } from "./grid";
import { util, Util } from "./util";
import { UstyledTheme } from "../theme";
import { background, Background } from "./background";
import { border, Border } from "./border";
import { position, Position } from "./position";
import { shadow, Shadow } from "./shadow";
import { other, Other } from "./other";
import { pseudo, Pseudo } from "./pseudo";

export type UstyledFn<T> = (theme: UstyledTheme) => T;

export interface Api
  extends Util,
    Space,
    Color,
    Typography,
    Layout,
    Flexbox,
    Grid,
    Background,
    Border,
    Position,
    Shadow,
    Other,
    Pseudo {}

export type UstyledApi = UstyledFn<Api>;

export const api: UstyledApi = (theme) => ({
  ...util(theme),
  ...space(theme),
  ...color(theme),
  ...typography(theme),
  ...layout(theme),
  ...flexbox(theme),
  ...grid(theme),
  ...background(theme),
  ...border(theme),
  ...position(theme),
  ...shadow(theme),
  ...other(theme),
  ...pseudo(theme),
});
