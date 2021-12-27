import {
  Article,
  Dialpad,
  Logout,
  Person,
  School,
  Today,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import React from "react";
import { L10n } from "../../models/intl/L10n/L10n";
import { NavMenuItem } from "../../molecules/NavMenuItem/NavMenuItem";
import { useUser } from "../../models/user";

export const NavMenuGrid = () => {
  const { setUser } = useUser();
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} py={2}>
      <Grid item xs={6}>
        <Link to="/university/grades">
          <NavMenuItem
            text={<L10n id="nav.university" />}
            Icon={<School fontSize="large" />}
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/profile">
          <NavMenuItem
            text={<L10n id="nav.profile" />}
            Icon={<Person fontSize="large" />}
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/calendar">
          <NavMenuItem
            text={<L10n id="nav.calendar" />}
            Icon={<Today fontSize="large" />}
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/news">
          <NavMenuItem
            text={<L10n id="nav.news" />}
            Icon={<Article fontSize="large" />}
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link to="/contact">
          <NavMenuItem
            text={<L10n id="nav.contact" />}
            Icon={<Dialpad fontSize="large" />}
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Box onClick={() => setUser(undefined)}>
          <NavMenuItem
            text={<L10n id="nav.logout" />}
            Icon={<Logout fontSize="large" />}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
