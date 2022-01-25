import React from "react";
import { useU } from "../src";

const Demo: React.FC = () => {
  const { css, styles: s } = useU();

  return (
    <div>
      <div
        css={css`
          background-color: blue5;
          width: 25;
          height: 25;
          bg-color: blue8;
          border: 4 solid green5;
          border-top: 20px solid yellow5;
          outline: 10 solid red5;
          color: red7;

          @media (min-width: md) and (max-width: md) {
            color: #000;
          }

          ${{ height: "200px" }}

          ${css`
            width: 200px;
          `}
        `}
      >
        Text
      </div>
      <div
        css={css(
          {
            bgColor: "blue5",
            width: "100px",
            height: "100px",
          },
          [{ width: "200px" }, { height: "200px" }],
          {
            "&:hover": {
              bgColor: ["blue7", "green7"],
            },
          }
        )}
      />
      <div css={[s.bgColor("blue5"), s.w("100px"), s.h("100px")]} />
    </div>
  );
};

export default Demo;
