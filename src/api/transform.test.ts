import { transform } from "./transform";
import { defaultTheme } from "../theme/default";
import { compose, style } from "./style";
import { color as $color } from "./util";

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

  const css = transform(defaultTheme, compose(color, background, width));
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
