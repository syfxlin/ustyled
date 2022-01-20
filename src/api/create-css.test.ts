import { createCss } from "./create-css";
import { defaultTheme } from "../theme/default-theme";
import { styles } from "./styles";
import { ats } from "./at";

it("test", () => {
  const css = createCss({
    theme: defaultTheme,
    styles: styles(defaultTheme),
    ats: ats(defaultTheme),
  });
  console.log(css({ color: "blue5" }, { color: "blue9" }));
  console.log(
    css`
      color: blue5;
      ${{ color: "blue9" }}
      background:;
      width: 1;
    `
  );
  console.log(
    css`
      width: ${2};
      color: primary1;

      @media (min-width: md) and (max-width: md) {
        width: 4;
      }

      @media (min-width: 20px) and (max-width: lg) {
        width: 4;
      }

      @up md {
        width: 4;
      }

      @down md {
        width: 4;
      }

      @between sm, lg {
        width: 4;
      }
    `
  );
  console.log(
    css({
      "@up md": {
        width: 4,
      },
      "@down md   ": {
        width: 4,
      },
      "@between sm, lg": {
        width: 4,
        "&:hover": {
          display: ["flex"],
        },
      },
    })
  );
});
