import { Stack, TextField } from "@mui/material";
import React from "react";
import { L10n } from "../../models/intl/L10n/L10n";

export const LoginInputs = () => {
  return (
    <Stack spacing={1}>
      <TextField
        placeholder="301234"
        id="login-id"
        label={<L10n id="login.id" />}
        variant="outlined"
        onKeyPress={console.log}
      />
      <TextField
        id="login-pwd"
        label={<L10n id="login.password" />}
        variant="outlined"
        type="password"
      />
    </Stack>
  );
};
