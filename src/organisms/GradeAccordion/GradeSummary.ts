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
  type: "P" | "R" | "E";
  ects: number;
  summaries: TGradeLessonsSummary[];
}

export interface TGradeSummary {
  mainTeacher: Teacher;
  name: string;
  details: TGradeSummaryDetails;
}
