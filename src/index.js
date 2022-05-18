import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import { initialState } from "./context/initialState";
import { StateProvider } from "./context/StateProvider";
import App from "./App";
import reducer from "./context/reducer";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>
);
