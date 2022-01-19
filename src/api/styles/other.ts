import { CSSApi, CSSVar, StyleGenerator } from "../../types";
import { UstyledTheme } from "../../theme";
import { compose } from "../style";

export const theme: StyleGenerator<"theme", UstyledTheme> = (theme) => ({
  theme: () => theme,
});

export const other = compose(theme);

export type OtherApi = CSSApi<typeof theme>;

export type OtherVar = CSSVar<OtherApi>;
