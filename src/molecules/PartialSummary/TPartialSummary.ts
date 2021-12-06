import { TTimedGrade } from "../../organisms/GradeAccordion/GradeSummary";

export interface TPartialSummary extends TTimedGrade {
  description?: string;
  title: string;
}
