import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { GradeSummary } from "../../molecules/GradeSummary/GradeSummary";
import { TGradeSummary } from "./GradeSummary";

export const GradeAccordion = (props: TGradeSummary) => {
  const { mainTeacher, name } = props;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={"panel_header" + name}
      >
        <Stack>
          <Typography variant="overline">{name}</Typography>
          <Typography variant="overline" color="text.disabled">
            {mainTeacher.displayName}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <GradeSummary {...props} />
      </AccordionDetails>
    </Accordion>
  );
};
