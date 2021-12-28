import {
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { BreadcrumbLink } from "../../../atoms/BreadcrumbLink/BreadcrumbLink";
import { L10n } from "../../../models/intl/L10n/L10n";

export const CalendarPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink to="/" text="Home" />
        <Typography color="text.primary">
          <L10n id="nav.calendar" />
        </Typography>
      </Breadcrumbs>
      <Divider sx={{ marginBottom: 4, marginTop: 2 }} />
      <a
        href="https://planzajec.eaiib.agh.edu.pl/"
        target="_blank"
        rel="noreferrer"
      >
        <Button>
          <L10n id="calendar.see" />
        </Button>
      </a>
    </Container>
  );
};
