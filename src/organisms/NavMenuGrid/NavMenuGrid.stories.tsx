import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { renderStoryBook } from "../../utils/sb/renderStoryBook";
import { School } from "@mui/icons-material";
import { NavMenuGrid } from "./NavMenuGrid";

export default {
  title: "Organisms/NavMenuGrid",
  component: NavMenuGrid,
} as ComponentMeta<typeof NavMenuGrid>;

export const DefaultPartialSummary: ComponentStory<typeof NavMenuGrid> =
  () => renderStoryBook(<NavMenuGrid />);
