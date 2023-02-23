import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { KBarWrapper } from "./components/command-bar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <KBarWrapper>
      <App />
    </KBarWrapper>
  </React.StrictMode>
);
