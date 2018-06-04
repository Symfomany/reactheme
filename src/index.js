import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
