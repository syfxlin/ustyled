import { createCss } from "./create-css";
import { defaultTheme } from "../theme/default-theme";
import { compose, style } from "./style";
import { $color } from "./util";

it("test", () => {
  const color = style({
    prop: ["color"],
    css: (value) => (theme) => ({
      color: $color(value, theme),
    }),
  });
  const background = style({
    prop: ["background"],
    css: (value) => (theme) => ({
      background: $color(value, theme),
    }),
  });
  const width = style({
    prop: ["width"],
    css: (value) => (theme) => ({
      width: theme.sizes(value),
    }),
  });

  const css = createCss(defaultTheme, compose(color, background, width));
  console.log(css({ color: "blue5" }, { color: "blue9" }));
  console.log(
    css`
      color: blue5;
      ${{ color: "blue9" }}
      background:;
      width: 1;
    `
  );
});
