import React, { ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { L10nKey } from "../../text";

interface Props {
  id: L10nKey;
  values?: Record<string, ReactNode>;
}
export const L10n = ({ id, values }: Props) => {
  return (
    <FormattedMessage id={id} values={values} />
  );
};
