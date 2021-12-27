import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { L10nProvider } from "./models/intl/L10n/L10nProvider";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/palette";
import { UserContextProvider } from "./models/user";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <L10nProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </L10nProvider>
      </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
