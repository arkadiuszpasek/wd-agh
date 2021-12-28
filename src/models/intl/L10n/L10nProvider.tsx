import React, { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import { enStrings, plStrings } from "../../../text";
import { Locale, Locales } from "../../../types/locales";

interface L10nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}
const L10nContext = createContext<L10nContextValue | undefined>(undefined);

export const L10nProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [locale, setLocale] = useState<Locale>(Locales.PL);
  const messages = locale === Locales.EN ? enStrings : plStrings;

  return (
    <L10nContext.Provider value={{ locale, setLocale }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </L10nContext.Provider>
  );
};

export const useL10n = (): L10nContextValue => {
  const context = React.useContext(L10nContext);

  if (!context) {
    throw Error("L10nContext must be used withing L10nProvider");
  }

  return context;
};
