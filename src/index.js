import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from "./context/Context";
import { HashRouter } from "react-router-dom";

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
