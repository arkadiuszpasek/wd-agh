import {
  Box,
  Container,
  Grid,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import LoginImage from "../../../assets/agh.jpg";
import { LoginDialog } from "../../../organisms/LoginDialog/LoginDialog";
import AghLogo from "../../../assets/aghlogo.jpg";
import { L10n } from "../../../models/intl/L10n/L10n";
import { Locale, Locales } from "../../../types/locales";

interface Props {
  onLogIn(id: string, password: string): void;
  locale: Locale;
  setLocale(locale: Locale): void;
}

export const LoginPageTemplate = ({ onLogIn, locale, setLocale }: Props) => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isDownMd ? (
        <Container
          maxWidth="sm"
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={AghLogo}
            alt="AGH Logo"
            style={{
              maxWidth: "200px",
              alignSelf: "center",
              height: "auto",
              width: "auto",
            }}
          />

          <LoginDialog onLogIn={onLogIn} />
        </Container>
      ) : (
        <Grid container sx={{ height: "100%" }}>
          <Grid item md sx={{ width: "50%", overflow: "hidden" }}>
            <img
              src={LoginImage}
              alt="AGH University"
              style={{ height: "100vh" }}
            />
          </Grid>
          <Grid item md={6}>
            <Container
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={AghLogo}
                alt="AGH Logo"
                style={{
                  maxWidth: "200px",
                  alignSelf: "center",
                  height: "auto",
                  width: "auto",
                }}
              />
              <LoginDialog onLogIn={onLogIn} />
            </Container>
          </Grid>
        </Grid>
      )}
      <Box position="fixed" bottom={5} right={10}>
        <Link
          component="button"
          alignSelf="flex-start"
          onClick={() =>
            locale === Locales.EN
              ? setLocale(Locales.PL)
              : setLocale(Locales.EN)
          }
          variant="overline"
          color="text.primary"
        >
          <L10n
            id={
              locale === Locales.EN
                ? "intl.switch.polish"
                : "intl.switch.english"
            }
          />
        </Link>
      </Box>
    </>
  );
};
