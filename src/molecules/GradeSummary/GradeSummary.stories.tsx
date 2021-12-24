import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { renderStoryBook } from "../../utils/sb/renderStoryBook";
import { GradeSummary } from "./GradeSummary";
import { Teacher } from "../../types/Teacher";
import { timeStamp } from "console";
import {
  generateTGradeSummary,
  generateTGradeSummaryDetails,
} from "../../utils/sb/generator";

export default {
  title: "Molecules/GradeSummary",
  component: GradeSummary,
} as ComponentMeta<typeof GradeSummary>;

const details = generateTGradeSummary();
export const DefaultSummary: ComponentStory<typeof GradeSummary> = () =>
  renderStoryBook(<GradeSummary {...details} />);
