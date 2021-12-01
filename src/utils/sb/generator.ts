import { Teacher } from "../../types/Teacher";

export const generateTGradeSummaryDetails = () => {
  return {
    grade: 5.0 as TGrade,
    teachers: [new Teacher("Arkadiusz", "Pasek"), new Teacher("John", "Doe")],
    type: "Rożnice programgowe",
    ects: 3,
    summaries: [
      {
        lessonType: "Ćwiczenia audytoryjne",
        lengthHours: 14,
        group: "I181",
        grades: [
          { grade: 5.0 as TGrade, timestamp: randomDate() as TTimestamp },
          { grade: 2.0 as TGrade, timestamp: randomDate() as TTimestamp },
        ],
      },
      {
        lessonType: "Wykład",
        lengthHours: 28,
        group: "I08D",
        grades: [
          { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
        ],
      },
    ],
  };
};

export const generateTGradeSummary = () => {
  return {
    grade: 4.5 as TGrade,
    name: "Pracownia inżynierska dyplomowa - podejśćie " + Math.random() * 1000,
    mainTeacher: new Teacher("Charles", "Bukowski"),
    details: generateTGradeSummaryDetails(),
  };
};

const randomDate = () => Date.now() - Math.random() * 1000000 + 1000000;
