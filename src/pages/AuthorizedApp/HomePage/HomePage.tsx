import { Container } from "@mui/material";
import React from "react";
import { NavMenuGrid } from "../../../organisms/NavMenuGrid/NavMenuGrid";

export const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 2 }}>
      <NavMenuGrid />
    </Container>
  );
};
