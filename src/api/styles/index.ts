import { compose } from "../style";
import { Animations, animations, AnimationsVar } from "./animations";
import { Backgrounds, backgrounds, BackgroundsVar } from "./backgrounds";
import { Borders, borders, BordersVar } from "./borders";

export const styles = compose(animations, backgrounds, borders);

export type Styles = Animations & Backgrounds & Borders;
export type StylesVar = AnimationsVar & BackgroundsVar & BordersVar;

declare module "../../types" {
  // @ts-ignore
  interface CSSVariables extends StylesVar {}
}
