import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { BreadcrumbLink } from "../../../atoms/BreadcrumbLink/BreadcrumbLink";
import { L10n } from "../../../models/intl/L10n/L10n";
import { User } from "../../../models/user/User";
import {
  SummaryContentTypography,
  SummaryLabelTypography,
} from "../../../molecules/GradeSummary/GradeSummary";

interface Props {
  profile: User;
}
export const ProfilePageTemplate = ({ profile }: Props) => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink to="/" text="Home" />
        <Typography color="text.primary">
          <L10n id="nav.profile" />
        </Typography>
      </Breadcrumbs>
      <Divider sx={{ marginBottom: 4, marginTop: 2 }} />
      <Box display="flex" flexDirection="row" alignItems="flex-end" my={2}>
        <div
          style={{
            width: "150px",
            marginRight: "20px",
            height: "200px",
            backgroundColor: "pink",
          }}
        >
          <img src={profile.avatarUrl} alt="Profile" />
        </div>
        <Stack>
          <Typography variant="h5">
            {profile.name} {profile.lastName}
          </Typography>
          <Typography color="text.disabled" variant="h6">
            {profile.id}
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Accordion
        elevation={0}
        sx={{ borderBottom: "solid 1px rgba(0,0,0,.12) " }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <L10n id="profile.personalData" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.email" />
              </SummaryLabelTypography>
              <Stack direction="row" alignItems="center">
                <MuiLink
                  component="p"
                  onClick={() => null}
                  variant="body2"
                  color="primary.main"
                  marginBottom={1}
                  marginRight={2}
                  sx={{ cursor: "pointer" }}
                >
                  <L10n id="change" />
                </MuiLink>
                <SummaryContentTypography>
                  {profile.email}
                </SummaryContentTypography>
              </Stack>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.phone" />
              </SummaryLabelTypography>
              <Stack direction="row" alignItems="center">
                <MuiLink
                  component="p"
                  onClick={() => null}
                  variant="body2"
                  color="primary.main"
                  marginBottom={1}
                  marginRight={2}
                  sx={{ cursor: "pointer" }}
                >
                  <L10n id="change" />
                </MuiLink>
                <SummaryContentTypography>
                  {profile.phone}
                </SummaryContentTypography>
              </Stack>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.address" />
              </SummaryLabelTypography>
              <SummaryContentTypography>
                {profile.address}
              </SummaryContentTypography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.postAddress" />
              </SummaryLabelTypography>
              <SummaryContentTypography>-</SummaryContentTypography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.pesel" />
              </SummaryLabelTypography>
              <SummaryContentTypography>
                {profile.pesel}
              </SummaryContentTypography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.nationalId" />
              </SummaryLabelTypography>
              <SummaryContentTypography>
                {profile.nationalId}
              </SummaryContentTypography>
            </Box>
            <Divider sx={{ marginBottom: 2 }} />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.bornPlace" />
              </SummaryLabelTypography>
              <SummaryContentTypography>
                {profile.bornPlace}
              </SummaryContentTypography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.bornTime" />
              </SummaryLabelTypography>
              <SummaryContentTypography>
                {profile.bornTime}
              </SummaryContentTypography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.motherName" />
              </SummaryLabelTypography>
              <SummaryContentTypography>
                {profile.motherName}
              </SummaryContentTypography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.fatherName" />
              </SummaryLabelTypography>
              <SummaryContentTypography>
                {profile.fatherName}
              </SummaryContentTypography>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        sx={{ borderBottom: "solid 1px rgba(0,0,0,.12) " }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <L10n id="profile.financialData" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <SummaryLabelTypography>
                <L10n id="profile.accountNumber" />
              </SummaryLabelTypography>
              <SummaryContentTypography>
                {profile.accountNumber || "-"}
              </SummaryContentTypography>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        sx={{ borderBottom: "solid 1px rgba(0,0,0,.12) " }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <L10n id="profile.loginData" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MuiLink
            component="p"
            onClick={() => null}
            variant="body2"
            color="primary.main"
            marginBottom={1}
            marginRight={2}
            sx={{ cursor: "pointer" }}
          >
            <L10n id="change.password" />
          </MuiLink>
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}
        sx={{ borderBottom: "solid 1px rgba(0,0,0,.12) " }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <L10n id="profile.agreements" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={<L10n id="profile.agreement.email" />}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<L10n id="profile.agreement.parents" />}
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Typography sx={{ marginTop: 2 }} variant="body2">
        <L10n id="profile.info" />
      </Typography>
    </Container>
  );
};
