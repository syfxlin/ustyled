import { defaultTheme } from "../theme/default-theme";
import { responsive } from "./responsive";

it("responsive", () => {
  expect(
    responsive(defaultTheme, [1, 2, 3], (unit) => ({
      margin: unit,
    }))
  ).toStrictEqual({
    margin: 1,
    "@media (min-width: 640px)": { margin: 2 },
    "@media (min-width: 768px)": { margin: 3 },
  });

  expect(
    responsive(defaultTheme, 1, (unit) => ({
      margin: unit,
    }))
  ).toStrictEqual({
    margin: 1,
  });
});
