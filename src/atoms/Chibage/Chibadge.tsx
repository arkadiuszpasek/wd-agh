import { Box, styled } from "@mui/material";
import React from "react";


interface Props {
  label: React.ReactNode;
  size?: number;
}

export const Chibage = ({ label, size = 40 }: Props) => {
  return (
    <Box sx={{
      width: size, height: size,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {label}
    </Box>
  )
}