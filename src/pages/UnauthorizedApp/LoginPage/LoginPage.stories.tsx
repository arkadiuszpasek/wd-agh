import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginPage } from "./LoginPage";
import { renderStoryBook } from "../../../utils/sb/renderStoryBook";

export default {
  title: "LoginPage",
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

export const DefaultDialog: ComponentStory<typeof LoginPage> = () =>
  renderStoryBook(<LoginPage />);
