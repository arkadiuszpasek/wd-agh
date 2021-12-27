import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { renderStoryBook } from "../../utils/sb/renderStoryBook";
import { NavMenuItem } from "./NavMenuItem";
import { School } from "@mui/icons-material";

export default {
  title: "Molecules/NavMenuItem",
  component: NavMenuItem,
} as ComponentMeta<typeof NavMenuItem>;

export const DefaultPartialSummary: ComponentStory<typeof NavMenuItem> =
  () => renderStoryBook(<NavMenuItem text="Kalendarz" Icon={<School />} />);
