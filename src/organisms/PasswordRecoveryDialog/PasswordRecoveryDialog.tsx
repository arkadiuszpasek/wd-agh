import { Button, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { L10n } from "../../models/intl/L10n/L10n";
import { theme } from "../../styles/palette";

interface Props {
  onSubmit(email: string): void;
  onBack(): void;
}

export const PasswordRecoveryDialog = ({ onSubmit, onBack }: Props) => {
  return (
    <form onSubmit={() => onSubmit("email@agh.edu.pl")}>
      <Stack spacing={3}>
        <Typography variant="h5">
          <L10n id="login.recovery" />
        </Typography>
        <TextField
          id="login-email"
          label={<L10n id="login.email" />}
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
          onClick={() => onSubmit("email@agh.edu.pl")}
          size="large"
        >
          <L10n id="login.recovery.btn" />
        </Button>
        <Link
          component="button"
          alignSelf="flex-start"
          onClick={onBack}
          variant="overline"
          color="text.primary"
        >
          <L10n id="back" />
        </Link>
      </Stack>
    </form>
  );
};
