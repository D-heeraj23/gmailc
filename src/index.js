import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import UiContextProvider from "./context/UiContextProvider";
import { Provider } from "react-redux";
import store from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UiContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UiContextProvider>
    </Provider>
  </React.StrictMode>
);
