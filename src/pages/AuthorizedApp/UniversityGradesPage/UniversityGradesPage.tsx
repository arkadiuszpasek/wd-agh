import {
  Box,
  Breadcrumbs,
  Container,
  Divider,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BreadcrumbLink } from "../../../atoms/BreadcrumbLink/BreadcrumbLink";
import { L10n } from "../../../models/intl/L10n/L10n";
import { GradePage } from "../../../organisms/GradePage/GradePage";
import { getTGradeSummaries } from "../../../utils/sb/generator";

export const UniversityGradesPage = () => {
  const [page, setPage] = useState<number>(7);
  const handleChange = (event: unknown, value: number) => {
    setPage(value);
  };
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink to="/" text="Home" />
        <BreadcrumbLink to="/university" text={<L10n id="nav.university" />} />
        <Typography color="text.primary">
          <L10n id="nav.university.grades" />
        </Typography>
      </Breadcrumbs>
      <Divider sx={{ marginBottom: 4, marginTop: 2 }} />
      <GradePage summaries={getTGradeSummaries()} />
      <Box display="flex" width="100%" justifyContent="center" my={4}>
        <Pagination
          size="large"
          count={7}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Container>
  );
};
