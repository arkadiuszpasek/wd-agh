import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { renderStoryBook } from "../../utils/sb/renderStoryBook";
import { Teacher } from "../../types/Teacher";
import { timeStamp } from "console";
import {
  generatePartialSummary,
  generateTGradeSummaryDetails,
} from "../../utils/sb/generator";
import { PartialSummary } from "./PartialSummary";

export default {
  title: "Molecules/PartialSummary",
  component: PartialSummary,
} as ComponentMeta<typeof PartialSummary>;

export const DefaultPartialSummary: ComponentStory<typeof PartialSummary> =
  () => renderStoryBook(<PartialSummary {...generatePartialSummary()} />);
