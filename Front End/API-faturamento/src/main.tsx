import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProvidersComponent } from "./context/providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvidersComponent>
        <App />
      </ProvidersComponent>
    </BrowserRouter>
  </React.StrictMode>
);
