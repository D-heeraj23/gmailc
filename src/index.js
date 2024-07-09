import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import UiContextProvider from "./context/UiContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UiContextProvider>
  </React.StrictMode>
);
