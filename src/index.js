import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  </React.StrictMode>
);
