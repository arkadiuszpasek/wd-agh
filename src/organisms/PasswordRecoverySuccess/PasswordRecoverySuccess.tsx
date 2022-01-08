import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as DogSvg } from "../../assets/dog.svg";
import { L10n } from "../../models/intl/L10n/L10n";

interface Props {
  onBack(): void;
}

export const PasswordRecoverySuccess = ({ onBack }: Props) => {
  return (
    <Stack spacing={3} alignItems="center" justifyContent="center">
      <Typography>
        <L10n id="login.recovery.success" />
      </Typography>
      <DogSvg width={360} height={360} />

      <Link
        component="button"
        onClick={onBack}
        variant="overline"
        color="text.primary"
      >
        <L10n id="back" />
      </Link>
    </Stack>
  );
};
