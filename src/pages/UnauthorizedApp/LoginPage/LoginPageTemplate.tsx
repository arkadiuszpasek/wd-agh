import {
  Box,
  Container,
  Grid,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import LoginImage from "../../../assets/agh.jpg";
import { LoginDialog } from "../../../organisms/LoginDialog/LoginDialog";
import AghLogo from "../../../assets/aghlogo.jpg";
import { L10n } from "../../../models/intl/L10n/L10n";
import { Locale, Locales } from "../../../types/locales";
import { PasswordRecoveryDialog } from "../../../organisms/PasswordRecoveryDialog/PasswordRecoveryDialog";
import { PasswordRecoverySuccess } from "../../../organisms/PasswordRecoverySuccess/PasswordRecoverySuccess";

interface Props {
  onLogIn(id: string, password: string): void;
  locale: Locale;
  setLocale(locale: Locale): void;
}

enum StateType {
  Login,
  Recovery,
  RecoverySuccess,
}
interface LoginState {
  type: StateType.Login;
}
interface RecoveryState {
  type: StateType.Recovery;
}
interface RecoverySuccessState {
  type: StateType.RecoverySuccess;
}
type State = LoginState | RecoveryState | RecoverySuccessState;

export const LoginPageTemplate = ({ onLogIn, locale, setLocale }: Props) => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [state, setState] = useState<State>({ type: StateType.Login });

  const renderDialog = () => {
    switch (state.type) {
      case StateType.Recovery:
        return (
          <PasswordRecoveryDialog
            onBack={() => setState({ type: StateType.Login })}
            onSubmit={() => setState({ type: StateType.RecoverySuccess })}
          />
        );
      case StateType.RecoverySuccess:
        return (
          <PasswordRecoverySuccess
            onBack={() => setState({ type: StateType.Login })}
          />
        );
      case StateType.Login:
      default:
        return (
          <LoginDialog
            onLogIn={onLogIn}
            onForgot={() => setState({ type: StateType.Recovery })}
          />
        );
    }
  };

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
          {renderDialog()}
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
              {renderDialog()}
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
