import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NewsProvider } from "./components/Main/NewsContext/NewsContext";
ReactDOM.render(
  <NewsProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </NewsProvider>,

  document.getElementById("root")
);
