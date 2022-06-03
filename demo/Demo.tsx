import React from "react";
import { useU } from "../src";

const Demo: React.FC = () => {
  const { css, api: s, setMode, mode } = useU();

  return (
    <div>
      <div
        css={css`
          background-color: .c(blue5);
          width: .s(25);
          height: .s(25);
          background: .c(blue8);
          border: .bw(4) solid ${s.c("green5")};
          border-top: .bw(20px) solid .c(yellow5);
          color: #000;

          .up(md) {
            color: .c("red7", "blue7");
          }
        `}
      >
        Text
      </div>
      <div
        css={css({
          backgroundColor: ".c(blue5-7)",
          width: "100px",
          height: "100px",
        })}
      />
      <button onClick={() => setMode()}>{mode}</button>
    </div>
  );
};

export default Demo;
