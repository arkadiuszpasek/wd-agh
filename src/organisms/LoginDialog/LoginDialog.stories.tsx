import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginDialog } from "./LoginDialog";
import { renderStoryBook } from "../../utils/sb/renderStoryBook";

export default {
  title: "LoginDialog",
  component: LoginDialog,
} as ComponentMeta<typeof LoginDialog>;

export const DefaultDialog: ComponentStory<typeof LoginDialog> = () =>
  renderStoryBook(<LoginDialog onLogIn={() => undefined} />);
