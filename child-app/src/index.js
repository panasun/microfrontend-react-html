import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootContainer = document.getElementById("root")
const root = ReactDOM.createRoot(rootContainer);
root.render(
  <React.StrictMode>
    <App
      packageId={rootContainer.getAttribute("packageId")}
      cartId={rootContainer.getAttribute("cartId")}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();