import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  text: React.ReactNode;
}
export const BreadcrumbLink = ({ to, text }: Props) => {
  return (
    <Link to={to}>
      <Typography
        sx={{ "&:hover": { textDecoration: "underline" } }}
        color="inherit"
      >
        {text}
      </Typography>
    </Link>
  );
};
