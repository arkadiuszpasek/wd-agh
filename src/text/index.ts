import { strings as plStrings } from "./pl/strings";
import { strings as enStrings } from "./en/strings";

export type L10nKey = keyof typeof plStrings;

export {
  plStrings,
  enStrings
};
