import { Box } from "@mui/system";
import React from "react";
import { LoginInputs } from "../../molecules/LoginInputs/LoginInputs";

export const LoginDialog = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
      <LoginInputs />
    </Box>
  );
};
