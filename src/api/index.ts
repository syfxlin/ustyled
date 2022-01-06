import { space, Space } from "./space";
import { UstyledFn } from "../types";
import { color, Color } from "./color";
import { typography, Typography } from "./typography";
import { layout, Layout } from "./layout";
import { flexbox, Flexbox } from "./flexbox";
import { grid, Grid } from "./grid";
import { merge, Merge } from "./merge";

export type Api = Merge & Space & Color & Typography & Layout & Flexbox & Grid;

export const api: UstyledFn<Api> = (theme) => ({
  ...merge,
  ...space(theme),
  ...color(theme),
  ...typography(theme),
  ...layout(theme),
  ...flexbox(theme),
  ...grid(theme),
});
