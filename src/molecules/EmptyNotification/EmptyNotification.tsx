import { Stack, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as DogSvg } from "../../assets/dog.svg";

interface Props {
  text: React.ReactNode;
}
export const EmptyNotification = ({ text }: Props) => {
  return (
    <Stack alignItems="center">
      <DogSvg width={360} height={360} />
      <Typography variant="h5">{text}</Typography>
    </Stack>
  );
};
