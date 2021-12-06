import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { FormattedDate } from "react-intl";
import { L10n } from "../../models/intl/L10n/L10n";
import { TGradeSummaryDetails, TTimedGrade } from "../../organisms/GradeAccordion/GradeSummary";

export const GradeSummary = (props: TGradeSummaryDetails) => {
  const getTypeText = () => {
    switch (props.type) {
      case "E":
        return <L10n id="grade.type.e" />;
      case "R":
        return <L10n id="grade.type.r" />;
      default:
        return <L10n id="grade.type.p" />;
    }
  }
  const getLessonTypeText = (lessonType: TGradeSummaryDetails["summaries"][0]["lessonType"]) => {
    switch (lessonType) {
      case "A":
        return <L10n id="grade.lessonType.aud" />;
      case "L":
        return <L10n id="grade.lessonType.labs" />;
        case "P":
          return <L10n id="grade.lessonType.proj" />;
      default:
        return <L10n id="grade.lessonType.lectures" />;
    }
  }
  const renderTimedGrade = (timedGrade: TTimedGrade, isFirst: boolean) => {
    return (
<Stack key={timedGrade.timestamp} alignItems="flex-end">
                    <Typography
                      color={isFirst ? undefined : "text.disabled"}
                      lineHeight={isFirst ? 1.5 : 1.2}
                      variant="overline"
                    >
                      {timedGrade.grade.toFixed(1)}
                    </Typography>
                    <Typography
                      color={isFirst ? undefined : "text.disabled"}
                      lineHeight={isFirst ? 1.5 : 1.2}
                      variant="overline"
                    >
                      <FormattedDate value={timedGrade.timestamp} />
                    </Typography>
                  </Stack>
    )
  }
  return (
    <Stack divider={<Divider />} spacing={1}>
      <Typography variant="overline" color="text.primary">
        <L10n id="grade.seePartials" />
      </Typography>
      <Stack>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography variant="overline">
            <L10n id="grade.ects" />
          </Typography>
          <Typography variant="overline">{props.ects}</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography variant="overline">
            <L10n id="grade.type" />
          </Typography>
          <Typography variant="overline">{getTypeText()}</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography variant="overline">
            <L10n id="grade.finalGrade" />
          </Typography>
          <Typography variant="overline">
            {props.grade ? renderTimedGrade(props.grade, true) : <L10n id="grade.finalGrade.empty" />}
          </Typography>
        </Box>
      </Stack>

      {props.summaries.map((summary) => (
        <Stack key={summary.lessonType}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography variant="overline">
              <L10n id="grade.lessonType" />
            </Typography>
            <Typography variant="overline">{getLessonTypeText(summary.lessonType)}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography variant="overline">
              <L10n id="grade.length" />
            </Typography>
            <Typography variant="overline">{summary.lengthHours}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography variant="overline">
              <L10n id="grade.group" />
            </Typography>
            <Typography variant="overline">{summary.group}</Typography>
          </Box>
          {summary.grades && !!summary.grades.length && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Typography variant="overline">
                <L10n id="grade.grade" />
              </Typography>
              <Stack spacing={0.5} mt={0.5}>
                {summary.grades.map((grade, i) => (
                  renderTimedGrade(grade, i === 0)
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      ))}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Typography variant="overline">
          <L10n id="grade.teacher" />
        </Typography>
        <Stack alignItems="flex-end" mt={0.5}>
          {props.teachers.map((teacher) => (
            <Typography
              key={teacher.displayName}
              variant="overline"
              lineHeight={1.5}
            >
              {teacher.displayName}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};
