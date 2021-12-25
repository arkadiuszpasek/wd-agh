import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginPageTemplate } from "./LoginPageTemplate";
import { renderStoryBook } from "../../../utils/sb/renderStoryBook";

export default {
  title: "LoginPage",
  component: LoginPageTemplate,
} as ComponentMeta<typeof LoginPageTemplate>;

export const DefaultDialog: ComponentStory<typeof LoginPageTemplate> = () =>
  renderStoryBook(<LoginPageTemplate onLogIn={() => undefined} />);
