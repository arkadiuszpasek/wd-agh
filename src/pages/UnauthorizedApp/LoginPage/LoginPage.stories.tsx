import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LoginPageTemplate } from "./LoginPageTemplate";
import { renderStoryBook } from "../../../utils/sb/renderStoryBook";
import { Locales } from "../../../types/locales";

export default {
  title: "LoginPage",
  component: LoginPageTemplate,
} as ComponentMeta<typeof LoginPageTemplate>;

export const DefaultDialog: ComponentStory<typeof LoginPageTemplate> = () =>
  renderStoryBook(
    <LoginPageTemplate
      setLocale={() => null}
      locale={Locales.PL}
      onLogIn={() => undefined}
    />
  );
