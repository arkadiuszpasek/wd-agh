import { ChevronRight, Done, Person } from "@mui/icons-material";
import { Button, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { L10n } from "../../../models/intl/L10n/L10n";

export const CalendarPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Link
        href="https://planzajec.eaiib.agh.edu.pl/"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="outlined" size="large" startIcon={<ChevronRight />}>
          {/* <Typography variant="body1"> */}
          <L10n id="calendar.see" />
          {/* </Typography> */}
        </Button>
      </Link>
    </Container>
  );
};
