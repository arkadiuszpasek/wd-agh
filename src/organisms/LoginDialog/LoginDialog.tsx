import { ChevronRight } from "@mui/icons-material";
import { Button, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { L10n } from "../../models/intl/L10n/L10n";
import { LoginInputs } from "../../molecules/LoginInputs/LoginInputs";
import { theme } from "../../styles/palette";

interface Props {
  onLogIn(id: string, password: string): void;
}

export const LoginDialog = ({ onLogIn }: Props) => {
  return (
    <form onSubmit={() => onLogIn("3", "3")}>
      <Stack spacing={3}>
        <Typography variant="h5">
          <L10n id="login" />
        </Typography>
        <LoginInputs />
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
          onClick={() => onLogIn("304214", "aghaghagh")}
        >
          <Stack direction="row">
            <L10n id="login.logIn" />
            <ChevronRight />
          </Stack>
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
    </form>
  );
};
