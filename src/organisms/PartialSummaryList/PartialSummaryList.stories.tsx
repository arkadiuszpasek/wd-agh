import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import {
  generatePartialSummary,
  getPartialSummaries,
  getTGradeSummaries,
} from "../../utils/sb/generator";
import { renderStoryBook } from "../../utils/sb/renderStoryBook";
import { PartialSummaryList } from "./PartialSummaryList";

export default {
  title: "Organisms/PartialSummaryList",
  component: PartialSummaryList,
} as ComponentMeta<typeof PartialSummaryList>;

const summaries = getPartialSummaries()
export const DefaultSummary: ComponentStory<typeof PartialSummaryList> = () =>
  renderStoryBook(<PartialSummaryList summaries={summaries} />);
