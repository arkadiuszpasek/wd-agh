import { Teacher } from "../../types/Teacher";

export interface TTimedGrade {
  grade: TGrade;
  timestamp: TTimestamp
}
export interface TGradeLessonsSummary {
  lessonType: string;
  lengthHours: number;
  group: string;
  grades?: TTimedGrade[];
}
export interface TGradeSummaryDetails {
  grade?: TGrade;
  teachers: Teacher[];
  type: string;
  ects: number;
  summaries: TGradeLessonsSummary[]
}

export interface TGradeSummary {
  grade?: TGrade;
  mainTeacher: Teacher;
  name: string;
  details: TGradeSummaryDetails;
}
