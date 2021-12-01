import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { L10n } from "../../../models/intl/L10n/L10n";
import { GradeAccordion } from "../../../organisms/GradeAccordion/GradeAccordion";
import { TGradeSummary } from "../../../organisms/GradeAccordion/GradeSummary";

interface Props {
  summaries: TGradeSummary[];
}
export const GradePage = ({ summaries }: Props) => {
  const calculateEcts = () => {
    return summaries.reduce((prev, s) => prev + (s.grade && s.grade > 2 ? s.details.ects : 0), 0);
  }
  const calculateAvg = () => {
    const gradedSummaries = summaries.filter(s => s.grade);
    const sum = gradedSummaries.reduce((prev, s) => prev + s.grade! * s.details.ects, 0);
    const sumEcts = gradedSummaries.reduce((prev, s) => prev + s.details.ects, 0);

    if (sum === 0 || sumEcts === 0) {
      return;
    }

    return sum / sumEcts;
  }
  const avg = calculateAvg();

  return (
    <Box>
      <Stack>
        <Typography variant="overline"><L10n id="gradePage.accumulatedEcts" />: {calculateEcts() || 0}</Typography>
        <Typography variant="overline"><L10n id="gradePage.avgPerSemester" />: {avg || 0}</Typography>
        <Typography variant="overline"><L10n id="gradePage.avgPerYear" />: {avg ? avg + 0.1 : 0}</Typography>
      </Stack>

      <Divider sx={{ marginBottom: 2 }} />
      <Stack spacing={3}>
        {summaries.map(s => (
          <GradeAccordion key={s.name} {...s} />
        ))}
      </Stack>
    </Box>
  );
};
