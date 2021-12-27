import { Breadcrumbs, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { BreadcrumbLink } from "../../../atoms/BreadcrumbLink/BreadcrumbLink";
import { L10n } from "../../../models/intl/L10n/L10n";
import { useParams } from "react-router-dom";
import { getTGradeSummaries } from "../../../utils/sb/generator";
import { PartialSummaryList } from "../../../organisms/PartialSummaryList/PartialSummaryList";
import { EmptyNotification } from "../../../molecules/EmptyNotification/EmptyNotification";

export const UniversityGradeDetailsPage = () => {
  const { shortName } = useParams();
  const partialSummaries = getTGradeSummaries().find(
    (s) => s.shortName === shortName
  )?.details.partialGrades;

  return partialSummaries ? (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink to="/" text="Home" />
        <BreadcrumbLink to="/university" text={<L10n id="nav.university" />} />
        <BreadcrumbLink
          to="/university/grades"
          text={<L10n id="nav.university.grades" />}
        />
        <Typography color="text.primary">{shortName}</Typography>
      </Breadcrumbs>
      <Divider sx={{ marginBottom: 4, marginTop: 2 }} />
      {!!partialSummaries.length ? (
        <PartialSummaryList summaries={partialSummaries} />
      ) : (
        <EmptyNotification text={<L10n id="grade.partials.empty" />} />
      )}
    </Container>
  ) : (
    <></>
  );
};
