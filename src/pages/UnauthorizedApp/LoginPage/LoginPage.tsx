import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoginImage from "../../../assets/agh.jpg";
import { LoginDialog } from "../../../organisms/LoginDialog/LoginDialog";

export const LoginPage = () => {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  console.log("theme", theme);

  return isDownMd ? (
    <Container
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <LoginDialog />
    </Container>
  ) : (
    <Grid container sx={{ height: "100%" }}>
      <Grid item md sx={{ width: "50%", overflow: "hidden" }}>
        <img src={LoginImage} alt="AGH University" style={{ height: "100%" }} />
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
          <LoginDialog />
        </Container>
      </Grid>
    </Grid>
  );
};
