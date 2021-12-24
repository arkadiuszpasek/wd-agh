import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import React from "react";
import { LoginInputs } from "../../molecules/LoginInputs/LoginInputs";
import { L10n } from "../../models/intl/L10n/L10n";
import {
  Button,
  Container,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: "90%",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "60%",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "30%",
  },
}));
const sxBox: React.CSSProperties = {
  // clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)',
  padding: "5px 25px",
};
export const LoginDialog = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">
        <L10n id="login" />
      </Typography>
      <LoginInputs />
      <Button variant="contained" sx={{ backgroundColor: "primary.main" }}>
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
