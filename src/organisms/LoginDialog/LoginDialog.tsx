import { Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { L10n } from "../../models/intl/L10n/L10n";
import { LoginInputs } from "../../molecules/LoginInputs/LoginInputs";
import { theme } from "../../styles/palette";

export const LoginDialog = () => {
  console.log("themeprimar", theme.palette.primary);
  return (
    <Stack spacing={2}>
      <Typography variant="h5">
        <L10n id="login" />
      </Typography>
      <LoginInputs />
      <Button
        variant="contained"
        style={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <L10n id="login.logIn" />
      </Button>
      <Link
        component="button"
        alignSelf="flex-start"
        onClick={() => null}
        variant="overline"
        color="text.primary"
      >
        <L10n id="login.forgot" />
      </Link>
    </Stack>
  );
};
