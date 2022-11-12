import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./Context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/membersAdmin">
    <DataContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataContext>
  </BrowserRouter>
);
