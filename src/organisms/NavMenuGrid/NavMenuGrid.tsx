import {
  Article,
  Dialpad,
  Logout,
  Person,
  School,
  Today,
} from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import { L10n } from "../../models/intl/L10n/L10n";
import { NavMenuItem } from "../../molecules/NavMenuItem/NavMenuItem";

export const NavMenuGrid = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} p={2}>
      <Grid item xs={6}>
        <NavMenuItem
          text={<L10n id="nav.university" />}
          Icon={<School fontSize="large" />}
        />
      </Grid>
      <Grid item xs={6}>
        <NavMenuItem
          text={<L10n id="nav.profile" />}
          Icon={<Person fontSize="large" />}
        />
      </Grid>
      <Grid item xs={6}>
        <NavMenuItem
          text={<L10n id="nav.calendar" />}
          Icon={<Today fontSize="large" />}
        />
      </Grid>
      <Grid item xs={6}>
        <NavMenuItem
          text={<L10n id="nav.news" />}
          Icon={<Article fontSize="large" />}
        />
      </Grid>
      <Grid item xs={6}>
        <NavMenuItem
          text={<L10n id="nav.contact" />}
          Icon={<Dialpad fontSize="large" />}
        />
      </Grid>
      <Grid item xs={6}>
        <NavMenuItem
          text={<L10n id="nav.logout" />}
          Icon={<Logout fontSize="large" />}
        />
      </Grid>
    </Grid>
  );
};
