import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const LoginInputs = () => {
  return (
    <Box display="flex" flexDirection="column">
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
};
