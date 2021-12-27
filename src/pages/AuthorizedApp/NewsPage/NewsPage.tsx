import { Done } from "@mui/icons-material";
import { Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { L10n } from "../../../models/intl/L10n/L10n";

export const NewsPage = () => {
  return (
    <Container maxWidth="md">
      <Stack spacing={2} alignItems="center">
        <Done sx={{ width: 240, height: 240 }} />
        <Typography variant="h5">
          <L10n id="news.noNeews" />
        </Typography>
        <a
          href="https://www.agh.edu.pl/aktualnosci/"
          target="_blank"
          rel="noreferrer"
        >
          <Link component="button" variant="overline" color="text.primary">
            <L10n id="seeMore" />
          </Link>
        </a>
      </Stack>
    </Container>
  );
};
