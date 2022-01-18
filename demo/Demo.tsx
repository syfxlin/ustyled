import React from "react";
import { useCss } from "../src/hooks/useCss";

const Demo: React.FC = () => {
  const css = useCss();
  return (
    <div>
      <div
        css={css`
          background-color: blue5;
          width: 25;
          height: 25;
          bg-color: blue8;
          animation: spin;
          animation-duration: 3;
          border: 4 solid green5;
          border-top: 20px solid yellow5;
          outline: 10 solid red5;
          color: red7;

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
          [{ width: "200px" }, { height: "200px" }]
        )}
      />
      <div
        css={css`
          background-color: blue5;
          width: 25;
          height: 25;
          box-shadow: 4 4 4 green7;
          display: flex;
          justify: center;
          align: center;
          m: 10 20;
        `}
      >
        Text
      </div>
    </div>
  );
};

export default Demo;
