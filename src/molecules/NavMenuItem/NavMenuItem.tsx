import { Box, Paper, Stack, Typography } from "@mui/material"
import React, { useState } from "react"


interface Props {
  text: React.ReactNode;
  Icon: React.ReactNode;
}
export const NavMenuItem = ({ text, Icon }: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
      <Paper sx={{'&:hover': { cursor: "pointer" }}} elevation={isHovering ? 3 : 1}>
        <Stack alignItems="center" padding={2} spacing={1}>
          {Icon}
          <Typography>{text}</Typography>
        </Stack>
      </Paper>
    </div>
  )
}