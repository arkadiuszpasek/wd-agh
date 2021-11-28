import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import React from "react";
import { LoginInputs } from "../../molecules/LoginInputs/LoginInputs";
import { L10n } from "../../models/intl/L10n/L10n";
import { Container, Paper, Typography } from "@mui/material";

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
  padding: '5px 25px'
};
export const LoginDialog = () => {
  return (
    <Container maxWidth='sm'>
      <Paper sx={{ padding: "10px "}}>
        <Box display="flex" flexDirection="column">
          <Typography variant="h1"><L10n id="login" /></Typography>
          <Box display="flex">
            <Box sx={{...sxBox, bgcolor: 'primary.main'}}><L10n id="student" /></Box>
            <Box sx={{...sxBox, bgcolor: 'secondary.main'}}><L10n id="teacher" /></Box>
          </Box>
          <LoginInputs />
        </Box>
      </Paper>
    </Container>
  );
};
