import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import React from "react";
import { LoginInputs } from "../../molecules/LoginInputs/LoginInputs";

const Wrapper = styled('div')(({ theme }) => ({
  background: "pink",
  maxWidth: "90%",
  [theme.breakpoints.up('sm')]: {
    maxWidth: "60%",
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: "30%",
  }
}))
export const LoginDialog = () => {
  return (
    <Wrapper>
      <Box display="flex" flexDirection="column">
        <Box>
          <Box></Box>
          <Box></Box>
        </Box>
        <LoginInputs />
      </Box>
    </Wrapper>
  );
};
