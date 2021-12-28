import {
  Box,
  Divider,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import React from "react";
import { FormattedDate } from "react-intl";
import { Link } from "react-router-dom";
import { L10n } from "../../models/intl/L10n/L10n";
import {
  TGradeSummary,
  TGradeSummaryDetails,
  TTimedGrade,
} from "../../organisms/GradeAccordion/GradeSummary";

export const SummaryLabelTypography = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return (
    <Typography
      variant="body2"
      sx={{ textTransform: "uppercase", marginBottom: 1 }}
    >
      {children}
    </Typography>
  );
};
export const SummaryContentTypography = ({
  children,
}: React.PropsWithChildren<{}>) => {
  return (
    <Typography variant="body2" sx={{ marginBottom: 1 }}>
      {children}
    </Typography>
  );
};

export const GradeSummary = ({ name, shortName, details }: TGradeSummary) => {
  const getTypeText = () => {
    switch (details.type) {
      case "E":
        return <L10n id="grade.type.e" />;
      case "R":
        return <L10n id="grade.type.r" />;
      case "D":
        return <L10n id="grade.type.d" />;
      case "PP":
        return <L10n id="grade.type.pp" />;
      case "I":
        return <L10n id="grade.type.i" />;
      default:
        return <L10n id="grade.type.p" />;
    }
  };
  const getLessonTypeText = (
    lessonType: TGradeSummaryDetails["summaries"][0]["lessonType"]
  ) => {
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
  };
  const renderTimedGrade = (timedGrade: TTimedGrade, isFirst: boolean) => {
    return (
      <Stack key={timedGrade.timestamp} alignItems="flex-end">
        <Typography
          color={isFirst ? undefined : "text.disabled"}
          lineHeight={isFirst ? 1.5 : 1.2}
          variant="body2"
        >
          {timedGrade.grade.toFixed(1)}
        </Typography>
        <Typography
          color={isFirst ? undefined : "text.disabled"}
          lineHeight={isFirst ? 1.5 : 1.2}
          variant="body2"
        >
          <FormattedDate value={timedGrade.timestamp} />
        </Typography>
      </Stack>
    );
  };
  const renderSummary = () => (
    <Stack divider={<Divider />} spacing={1}>
      <Link to={`/university/grades/${shortName}`}>
        <MuiLink
          component="button"
          alignSelf="flex-start"
          onClick={() => null}
          variant="overline"
          color="primary.main"
        >
          <L10n id="grade.seePartials" />
        </MuiLink>
      </Link>
      <Stack>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <SummaryLabelTypography>
            <L10n id="grade.ects" />
          </SummaryLabelTypography>
          <SummaryContentTypography>{details.ects}</SummaryContentTypography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <SummaryLabelTypography>
            <L10n id="grade.type" />
          </SummaryLabelTypography>
          <SummaryContentTypography>{getTypeText()}</SummaryContentTypography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <SummaryLabelTypography>
            <L10n id="grade.finalGrade" />
          </SummaryLabelTypography>
          <SummaryContentTypography>
            {details.grade ? (
              renderTimedGrade(details.grade, true)
            ) : (
              <L10n id="grade.finalGrade.empty" />
            )}
          </SummaryContentTypography>
        </Box>
      </Stack>

      {details.summaries.map((summary) => (
        <Stack key={summary.lessonType}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <SummaryLabelTypography>
              <L10n id="grade.lessonType" />
            </SummaryLabelTypography>
            <SummaryContentTypography>
              {getLessonTypeText(summary.lessonType)}
            </SummaryContentTypography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <SummaryLabelTypography>
              <L10n id="grade.length" />
            </SummaryLabelTypography>
            <SummaryContentTypography>
              {summary.lengthHours}
            </SummaryContentTypography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <SummaryLabelTypography>
              <L10n id="grade.group" />
            </SummaryLabelTypography>
            <SummaryContentTypography>{summary.group}</SummaryContentTypography>
          </Box>
          {summary.grades && !!summary.grades.length && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="grade.grade" />
              </SummaryLabelTypography>
              <Stack spacing={0.5} mt={0.5}>
                {summary.grades.map((grade, i) =>
                  renderTimedGrade(grade, i === 0)
                )}
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
        <SummaryLabelTypography>
          <L10n id="grade.teacher" />
        </SummaryLabelTypography>
        <Stack alignItems="flex-end" mt={0.5}>
          {details.teachers.map((teacher) => (
            <SummaryContentTypography
              key={teacher.displayName}
              // variant="overline"
              // lineHeight={1.5}
            >
              {teacher.displayName}
            </SummaryContentTypography>
          ))}
        </Stack>
      </Box>
    </Stack>
  );

  return renderSummary();
};
