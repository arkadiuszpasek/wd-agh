import { Breadcrumbs, Container, Typography } from "@mui/material";
import React from "react";
import { BreadcrumbLink } from "../../../atoms/BreadcrumbLink/BreadcrumbLink";
import { L10n } from "../../../models/intl/L10n/L10n";
import { UniversityMenuGrid } from "../../../organisms/UniversityMenuGrid/UniversityMenuGrid";

export const UniversityMenuPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink to="/" text="Home" />
        <Typography color="text.primary">
          <L10n id="nav.university" />
        </Typography>
      </Breadcrumbs>
      <UniversityMenuGrid />
    </Container>
  );
};
