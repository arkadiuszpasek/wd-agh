import { TPartialSummary } from "../../molecules/PartialSummary/TPartialSummary";
import {
  TGradeSummary,
  TGradeSummaryDetails,
} from "../../organisms/GradeAccordion/GradeSummary";
import { Teacher } from "../../types/Teacher";

export const getRandom = <T extends unknown>(items: T[]) => {
  const ind = Math.floor((Math.random() * 1000) % items.length);

  return items[ind];
};

export const getTGradeSummaries = (): TGradeSummary[] => {
  return [
    {
      name: "Aspekty prawne i organizacja przedsiębiorstwa",
      shortName: "APIOP",
      mainTeacher: new Teacher("Marta", "Kraszewska", "dr. inż."),
      details: {
        partialGrades: [],
        grade: { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
        teachers: [new Teacher("Marta", "Kraszewska", "dr. inż.")],
        type: "P",
        ects: 2,
        summaries: [
          {
            lessonType: "A",
            lengthHours: 14,
            group: "I181",
            grades: [
              { grade: 5.0 as TGrade, timestamp: randomDate() as TTimestamp },
              { grade: 2.0 as TGrade, timestamp: randomDate() as TTimestamp },
            ],
          },
          {
            lessonType: "W",
            lengthHours: 28,
            group: "I08D",
            grades: [
              { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
            ],
          },
        ],
      },
    },

    {
      name: "Hurtownie danych",
      shortName: "HD",
      mainTeacher: new Teacher("Leszek", "Kotulski", "prof. dr hab. inż."),
      details: {
        partialGrades: [],
        grade: { grade: 3 as TGrade, timestamp: randomDate() as TTimestamp },
        teachers: [
          new Teacher("Leszek", "Kotulski", "prof. dr hab. inż."),
          new Teacher("Adam", "Sędziwy", "dr hab."),
          new Teacher("Artur", "Basiura", "dr. inż."),
        ],
        type: "E",
        ects: 3,
        summaries: [
          {
            lessonType: "L",
            lengthHours: 14,
            group: "I181",
            grades: [
              { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
            ],
          },
          {
            lessonType: "W",
            lengthHours: 28,
            group: "I08D",
            grades: [
              { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
            ],
          },
        ],
      },
    },

    {
      name: "Pracownia inżynierska dyplomowa",
      shortName: "PID",
      mainTeacher: new Teacher("Adam", "Sędziwy", "dr hab."),
      details: {
        partialGrades: [
          {
            grade: 4 as TGrade,
            timestamp: randomDate() as TTimestamp,
            title: "Prezentacja nr 3",
          },
          {
            grade: 3.5 as TGrade,
            timestamp: (randomDate() - 1000000000) as TTimestamp,
            description: "Dobrze zaprezentowana, błędy merytoryczne",
            title: "Prezentacja nr 2",
          },
          {
            grade: 4.5 as TGrade,
            timestamp: (randomDate() - 4000000000) as TTimestamp,
            title: "Prezentacja nr 1",
          },
        ],
        grade: { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
        teachers: [new Teacher("Adam", "Sędziwy", "dr hab.")],
        type: "P",
        ects: 1,
        summaries: [
          {
            lessonType: "P",
            lengthHours: 14,
            group: "I181",
            grades: [
              { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
            ],
          },
        ],
      },
    },

    {
      name: "Studio projektowe 2",
      shortName: "SP2",
      mainTeacher: new Teacher("Tomasz", "Szmuc", "dr hab. inż."),
      details: {
        partialGrades: [],
        grade: { grade: 4 as TGrade, timestamp: randomDate() as TTimestamp },
        teachers: [
          new Teacher("Tomasz", "Szmuc", "dr hab. inż."),
          new Teacher("Radosław", "Klimek", "dr hab. inż."),
          new Teacher("Jacek", "Piwowarczyk", "dr. inż."),
          new Teacher("Tomasz", "Szmuc", "dr hab. inż."),
          new Teacher("Andrzej", "Bielecki", "dr hab."),
        ],
        type: "P",
        ects: 3,
        summaries: [
          {
            lessonType: "P",
            lengthHours: 14,
            group: "I181",
            grades: [
              { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
            ],
          },
        ],
      },
    },
  ];
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

const randomDate = () => Date.now() - Math.random() * 1000000 + 1000000;
