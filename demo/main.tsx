import React from "react";
import ReactDOM from "react-dom";
import { UstyledProvider } from "../src/components/UstyledProvider";
import Demo from "./Demo";

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <UstyledProvider>
        <Demo />
      </UstyledProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
