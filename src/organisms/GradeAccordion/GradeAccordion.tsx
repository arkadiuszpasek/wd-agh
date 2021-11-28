import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { FormattedDate } from "react-intl";
import { L10n } from "../../models/intl/L10n/L10n";
import { GradeSummary } from "../../molecules/GradeSummary/GradeSummary";
import { Teacher } from "../../types/Teacher";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  grade: TGrade;
  mainTeacher: Teacher;
  name: string;
  details: React.ComponentProps<typeof GradeSummary>;
}

export const GradeAccordion = ({ grade, mainTeacher, name, details }: Props) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Stack>
        <Typography variant="overline">{name}</Typography>
        <Typography variant="overline" color="text.disabled">{mainTeacher.displayName}</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <GradeSummary {...details} />
    </AccordionDetails>
  </Accordion>
);
