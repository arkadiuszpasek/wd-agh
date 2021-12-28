import React from "react";
import { useL10n } from "../../../models/intl/L10n/L10nProvider";
import { useUser } from "../../../models/user";
import { TheUser } from "../../../models/user/User";
import { LoginPageTemplate } from "./LoginPageTemplate";

export const LoginPage = () => {
  const { setUser } = useUser();
  const { locale, setLocale } = useL10n();

  return (
    <LoginPageTemplate
      locale={locale}
      setLocale={setLocale}
      onLogIn={(id) => setUser(TheUser)}
    />
  );
};
