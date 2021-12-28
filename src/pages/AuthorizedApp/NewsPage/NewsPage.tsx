import {
  Breadcrumbs,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { BreadcrumbLink } from "../../../atoms/BreadcrumbLink/BreadcrumbLink";
import { L10n } from "../../../models/intl/L10n/L10n";
import { EmptyNotification } from "../../../molecules/EmptyNotification/EmptyNotification";

export const NewsPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink to="/" text="Home" />
        <Typography color="text.primary">
          <L10n id="nav.news" />
        </Typography>
      </Breadcrumbs>
      <Divider sx={{ marginBottom: 4, marginTop: 2 }} />
      <Stack spacing={2} alignItems="center">
        <EmptyNotification text={<L10n id="news.noNeews" />} />
        <a
          href="https://www.agh.edu.pl/aktualnosci/"
          target="_blank"
          rel="noreferrer"
        >
          <Link component="button" variant="overline" color="text.primary">
            <L10n id="see.news" />
          </Link>
        </a>
      </Stack>
    </Container>
  );
};
