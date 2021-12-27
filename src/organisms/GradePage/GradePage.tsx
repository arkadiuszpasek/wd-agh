import { Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { L10n } from "../../models/intl/L10n/L10n";
import { GradeAccordion } from "../GradeAccordion/GradeAccordion";
import { TGradeSummary } from "../GradeAccordion/GradeSummary";

interface Props {
  summaries: TGradeSummary[];
}
export const GradePage = ({ summaries }: Props) => {
  const calculateEcts = () => {
    return summaries.reduce(
      (prev, s) =>
        prev +
        (s.details.grade?.grade && s.details.grade.grade > 2
          ? s.details.ects
          : 0),
      0
    );
  };

  const calculateAvg = () => {
    const gradedSummaries = summaries.filter((s) => s.details.grade);
    const sum = gradedSummaries.reduce(
      (prev, s) => prev + s.details.grade!.grade * s.details.ects,
      0
    );
    const sumEcts = gradedSummaries.reduce(
      (prev, s) => prev + s.details.ects,
      0
    );

    if (sum === 0 || sumEcts === 0) {
      return;
    }

    return sum / sumEcts;
  };

  const avg = calculateAvg();

  return (
    <Container maxWidth="md" sx={{ paddingY: 2 }}>
      <Typography variant="h4">
        <L10n id="gradePage.summary" />
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <Stack>
        <Typography variant="overline">
          <L10n id="gradePage.accumulatedEcts" />: {calculateEcts() || 0}
        </Typography>
        <Typography variant="overline">
          <L10n id="gradePage.avgPerSemester" />: {avg?.toFixed(2) || 0}
        </Typography>
        <Typography variant="overline">
          <L10n id="gradePage.avgPerYear" />: {avg ? (avg + 0.1).toFixed(2) : 0}
        </Typography>
      </Stack>

      <Divider sx={{ marginBottom: 2 }} />
      <Typography variant="h4">
        <L10n id="gradePage.subjects" />
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <Stack spacing={3}>
        {summaries.map((s) => (
          <GradeAccordion key={s.name} {...s} />
        ))}
      </Stack>
    </Container>
  );
};
