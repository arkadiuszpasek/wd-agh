import { Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { L10n } from "../L10n/L10n";

export const Bar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="p" sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-start" }}>
            <L10n id="virtual-university" />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
