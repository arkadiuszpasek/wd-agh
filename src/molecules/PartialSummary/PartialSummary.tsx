import { Box, Typography } from "@mui/material";
import React from "react";
import { FormattedDate } from "react-intl";
import { TPartialSummary } from "./TPartialSummary";

export const PartialSummary = ({
  description,
  title,
  grade,
  timestamp,
}: TPartialSummary) => {
  return (
    <Box
      sx={{
        borderColor: grade > 2.5 ? "success.light" : "error.light",
        borderLeftStyle: "solid",
        borderLeftWidth: 4,
        paddingLeft: 2,
      }}
    >
      <Typography>{grade.toFixed(1)}</Typography>
      <Box display="flex" alignItems="center" marginRight={2}>
        <Typography variant="overline">
          <FormattedDate value={timestamp} />
        </Typography>
        <Typography variant="subtitle2">{title}</Typography>
      </Box>
    </Box>
  );
};
