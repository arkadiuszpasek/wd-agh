import { TPartialSummary } from "../../molecules/PartialSummary/TPartialSummary";
import {
  TGradeSummary,
  TGradeSummaryDetails,
} from "../../organisms/GradeAccordion/GradeSummary";
import { summaries } from "./summaries";

export const getRandom = <T extends unknown>(items: T[]) => {
  const ind = Math.floor((Math.random() * 1000) % items.length);

  return items[ind];
};

export const getTGradeSummaries = (
  semesterNumber: number = 7
): TGradeSummary[] => {
  return summaries[semesterNumber - 1];
};

export const getPartialSummaries = (): TPartialSummary[] => {
  return getRandom(
    getTGradeSummaries()
      .map((i) => i.details.partialGrades)
      .filter((i) => !!i.length)
  );
};
export const generateTGradeSummaryDetails = (): TGradeSummaryDetails => {
  return generateTGradeSummary().details;
};

export const generateTGradeSummary = (): TGradeSummary => {
  return getRandom(getTGradeSummaries());
};

export const generatePartialSummary = (): TPartialSummary => {
  return getRandom(getPartialSummaries());
};
