import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { BreadcrumbLink } from "../../../atoms/BreadcrumbLink/BreadcrumbLink";
import { L10n } from "../../../models/intl/L10n/L10n";

export const ContactPage = () => {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <BreadcrumbLink to="/" text="Home" />
        <Typography color="text.primary">
          <L10n id="nav.contact" />
        </Typography>
      </Breadcrumbs>
      <Divider sx={{ marginBottom: 4, marginTop: 2 }} />
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <L10n id="contact.deansOffice" />
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              <L10n id="contact.deansOffice.description" />
            </Typography>
            <Typography variant="body2" color="text.primary">
              eaiib@agh.edu.pl
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://www.eaiib.agh.edu.pl/dziekanat/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <L10n id="seeMore" />
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <L10n id="contact.support" />
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              <L10n id="contact.support.description" />
            </Typography>
            <Typography variant="body2" color="text.primary">
              wu@agh.edu.pl
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href="https://www.cri.agh.edu.pl/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <L10n id="seeMore" />
              </Button>
            </a>
          </CardActions>
        </Card>
      </Stack>{" "}
    </Container>
  );
};
