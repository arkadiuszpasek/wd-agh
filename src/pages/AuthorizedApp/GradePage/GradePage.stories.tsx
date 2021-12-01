import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { generateTGradeSummary } from "../../../utils/sb/generator";
import { renderStoryBook } from "../../../utils/sb/renderStoryBook";
import { GradePage } from "./GradePage";

export default {
  title: "Pages/GradePage",
  component: GradePage,
} as ComponentMeta<typeof GradePage>;

const summaries = [1, 2, 3, 4, 5, 6, 7].map((i) => generateTGradeSummary());

export const DefaultSummary: ComponentStory<typeof GradePage> = () =>
  renderStoryBook(<GradePage summaries={summaries} />);
