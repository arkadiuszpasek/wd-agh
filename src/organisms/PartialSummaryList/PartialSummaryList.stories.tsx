import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { generatePartialSummary, getTGradeSummaries } from "../../utils/sb/generator";
import { renderStoryBook } from "../../utils/sb/renderStoryBook";
import { PartialSummaryList } from "./PartialSummaryList";

export default {
  title: "Organisms/PartialSummaryList",
  component: PartialSummaryList,
} as ComponentMeta<typeof PartialSummaryList>;

const summaries = [1,2,3,4].map(() => generatePartialSummary());
export const DefaultSummary: ComponentStory<typeof PartialSummaryList> = () =>
  renderStoryBook(<PartialSummaryList summaries={summaries} />);
