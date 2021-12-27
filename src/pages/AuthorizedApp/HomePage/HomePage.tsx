import { Breadcrumbs, Container, Typography } from "@mui/material";
import React from "react";
import { NavMenuGrid } from "../../../organisms/NavMenuGrid/NavMenuGrid";

export const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">Home</Typography>
      </Breadcrumbs>
      <NavMenuGrid />
    </Container>
  );
};
