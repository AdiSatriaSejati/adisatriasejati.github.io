import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from "./context/Context";
import { HashRouter } from "react-router-dom";
import LegendaryCursor from "legendary-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <LangProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LangProvider>
  </HashRouter>
);

reportWebVitals();

window.addEventListener("load", () => {
  LegendaryCursor.init({
    lineSize: 0.15,
    opacityDecrement: 0.55,
    speedExpFactor: 0.8,
    lineExpFactor: 0.6,
    sparklesCount: 65,
    maxOpacity: 0.99,
  });
});
