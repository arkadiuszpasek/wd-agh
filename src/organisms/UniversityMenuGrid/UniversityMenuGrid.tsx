import { School } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { L10n } from "../../models/intl/L10n/L10n";
import { NavMenuItem } from "../../molecules/NavMenuItem/NavMenuItem";

export const UniversityMenuGrid = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} p={2}>
      <Grid item xs={6}>
        <Link to="/university/grades">
          <NavMenuItem
            text={<L10n id="nav.university.grades" />}
            Icon={<School fontSize="large" />}
          />
        </Link>
      </Grid>
    </Grid>
  );
};
