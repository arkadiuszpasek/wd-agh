import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import React from "react";
import { L10n } from "../../../models/intl/L10n/L10n";
import { useL10n } from "../../../models/intl/L10n/L10nProvider";
import { NavMenuGrid } from "../../../organisms/NavMenuGrid/NavMenuGrid";
import { Locales } from "../../../types/locales";

export const HomePage = () => {
  const { locale, setLocale } = useL10n();

  return (
    <>
      <Container maxWidth="md" sx={{ paddingY: 4 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Home</Typography>
        </Breadcrumbs>
        <NavMenuGrid />
      </Container>
      <Box position="fixed" bottom={5} right={10}>
        <Link
          component="button"
          alignSelf="flex-start"
          onClick={() =>
            locale === Locales.EN
              ? setLocale(Locales.PL)
              : setLocale(Locales.EN)
          }
          variant="overline"
          color="text.primary"
        >
          <L10n
            id={
              locale === Locales.EN
                ? "intl.switch.polish"
                : "intl.switch.english"
            }
          />
        </Link>
      </Box>
    </>
  );
};
