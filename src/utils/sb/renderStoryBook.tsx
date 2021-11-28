import { ThemeProvider } from "@mui/material";
import React from "react";
import { L10nProvider } from "../../models/intl/L10n/L10nProvider";
import { theme } from "../../styles/palette";

export const renderStoryBook = (component: React.ComponentElement<any, any>) => {
  return (
    <ThemeProvider theme={theme}>
      <L10nProvider>
        {component}
      </L10nProvider>
    </ThemeProvider>
  );
}