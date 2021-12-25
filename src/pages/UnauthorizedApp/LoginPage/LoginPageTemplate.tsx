import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import LoginImage from "../../../assets/agh.jpg";
import { LoginDialog } from "../../../organisms/LoginDialog/LoginDialog";

interface Props {
  onLogIn(id: string, password: string): void;
}

export const LoginPageTemplate = ({ onLogIn }: Props) => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return isDownMd ? (
    <Container
      maxWidth="sm"
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
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
            justifyContent: "center",
          }}
        >
          <LoginDialog onLogIn={onLogIn} />
        </Container>
      </Grid>
    </Grid>
  );
};
