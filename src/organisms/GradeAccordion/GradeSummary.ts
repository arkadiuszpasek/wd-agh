import { TPartialSummary } from "../../molecules/PartialSummary/TPartialSummary";
import { Teacher } from "../../types/Teacher";

export interface TTimedGrade {
  grade: TGrade;
  timestamp: TTimestamp;
}
export interface TGradeLessonsSummary {
  lessonType: "A" | "L" | "W" | "P";
  lengthHours: number;
  group: string;
  grades?: TTimedGrade[];
}
export interface TGradeSummaryDetails {
  grade?: TTimedGrade;
  teachers: Teacher[];
  type: "P" | "R" | "E" | "D" | "PP" | "I";
  ects: number;
  summaries: TGradeLessonsSummary[];
  partialGrades: TPartialSummary[];
}

export interface TGradeSummary {
  mainTeacher: Teacher;
  name: string;
  shortName: string;
  details: TGradeSummaryDetails;
}
