import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import { FormattedDate } from "react-intl";
import { TPartialSummary } from "../../molecules/PartialSummary/TPartialSummary";

interface Props {
  summaries: TPartialSummary[];
}
export const PartialSummaryList = ({ summaries }: Props) => {
  return (
    <Stepper orientation="vertical">
      {summaries.map((summary, index) => (
        <Step active key={summary.title} index={summary.grade - 1}>
          <StepLabel
            icon={
              <Typography fontWeight={600} fontSize={"1.5rem"}>
                {summary.grade.toFixed(1)}
              </Typography>
            }
            optional={
              <Typography
                variant="caption"
                sx={{
                  borderBottomColor:
                    summary.grade > 2.5 ? "success.light" : "error.light",
                  borderBottomStyle: "solid",
                  borderBottomWidth: 2,
                  marginBottom: 1,
                }}
              >
                <FormattedDate value={summary.timestamp} />
              </Typography>
            }
          ></StepLabel>
          <StepContent>
            <Typography variant="subtitle2">{summary.title}</Typography>
            {summary.description && (
              <Typography>{summary.description}</Typography>
            )}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};
