import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { L10n } from "../../models/intl/L10n/L10n";
import { GradeSummary } from "../../molecules/GradeSummary/GradeSummary";
import { TGradeSummary } from "./GradeSummary";

export const GradeAccordion = ({
  grade,
  mainTeacher,
  name,
  details,
}: TGradeSummary) => (
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
        <Typography variant="overline" color="text.primary">
          <L10n id="grade.seePartials" />
        </Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <GradeSummary {...details} />
    </AccordionDetails>
  </Accordion>
);
