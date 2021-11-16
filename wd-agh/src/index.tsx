import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { L10nProvider } from "./components/L10n/L10nProvider";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/palette";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <L10nProvider>
        <App />
      </L10nProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
