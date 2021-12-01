import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { FormattedDate } from "react-intl";
import { L10n } from "../../models/intl/L10n/L10n";
import { TGradeSummaryDetails } from "../../organisms/GradeAccordion/GradeSummary";


export const GradeSummary = (props: TGradeSummaryDetails) => {
  return (
    <Stack
      divider={<Divider />}
      spacing={1}
    >
      <Stack>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="overline"><L10n id="grade.ects" /></Typography>
          <Typography variant="overline">{props.ects}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="overline"><L10n id="grade.type" /></Typography>
          <Typography variant="overline">{props.type}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="overline"><L10n id="grade.finalGrade" /></Typography>
          <Typography variant="overline">{props.grade || <L10n id="grade.finalGrade.empty" />}</Typography>
        </Box>
      </Stack>

      {props.summaries.map(summary => (
        <Stack key={summary.lessonType}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="overline"><L10n id="grade.lessonType" /></Typography>
            <Typography variant="overline">{summary.lessonType}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="overline"><L10n id="grade.length" /></Typography>
            <Typography variant="overline">{summary.lengthHours}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="overline"><L10n id="grade.group" /></Typography>
            <Typography variant="overline">{summary.group}</Typography>
          </Box>
          {summary.grades && !!summary.grades.length && (
            <Box display="flex" justifyContent="space-between" alignItems="flex-start">
              <Typography variant="overline"><L10n id="grade.grade" /></Typography>
              <Stack spacing={0.5} mt={0.5}>
                {summary.grades.map((grade, i) => (
                  <Stack key={grade.timestamp} alignItems="flex-end">
                    <Typography color={i !== 0 ? "text.disabled" : undefined} lineHeight={i !== 0 ? 1.2 : 1.5} variant="overline">{grade.grade.toFixed(1)}</Typography>
                    <Typography color={i !== 0 ? "text.disabled" : undefined} lineHeight={i !== 0 ? 1.2 : 1.5} variant="overline"><FormattedDate value={grade.timestamp} /></Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      ))}
      
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Typography variant="overline"><L10n id="grade.teacher" /></Typography>
        <Stack alignItems="flex-end" mt={0.5}>
          {props.teachers.map(teacher => (
            <Typography key={teacher.displayName} variant="overline" lineHeight={1.5}>{teacher.displayName}</Typography>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};
