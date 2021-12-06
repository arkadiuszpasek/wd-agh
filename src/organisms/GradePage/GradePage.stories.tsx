import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { getTGradeSummaries } from "../../utils/sb/generator";
import { renderStoryBook } from "../../utils/sb/renderStoryBook";
import { GradePage } from "./GradePage";

export default {
  title: "Organisms/GradePage",
  component: GradePage,
} as ComponentMeta<typeof GradePage>;

export const DefaultSummary: ComponentStory<typeof GradePage> = () =>
  renderStoryBook(<GradePage summaries={getTGradeSummaries()} />);
