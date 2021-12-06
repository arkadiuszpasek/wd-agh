import { TPartialSummary } from "../../molecules/PartialSummary/TPartialSummary";
import { TGradeSummaryDetails, TGradeSummary, TTimedGrade } from "../../organisms/GradeAccordion/GradeSummary";
import { Teacher } from "../../types/Teacher";

export const getTGradeSummaries = (): TGradeSummary[] => {
  return [
    {
      name: "Aspekty prawne i organizacja przedsiębiorstwa",
      mainTeacher: new Teacher("Marta", "Kraszewska"),
      details: {
        grade: { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp},
        teachers: [new Teacher("Marta", "Kraszewska")],
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
      }
    },

    {
      name: "Hurtownie danych",
      mainTeacher: new Teacher("Leszek", "Kotulski"),
      details: {
        grade: { grade: 3 as TGrade, timestamp: randomDate() as TTimestamp},
        teachers: [new Teacher("Leszek", "Kotulski"), new Teacher("Adam", "Sędziwy"), new Teacher("Artur", "Basiura")],
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
      }
    },

    {
      name: "Pracownia inżynierska dyplomowa",
      mainTeacher: new Teacher("Adam", "Sędziwy"),
      details: {
        grade: { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp},
        teachers: [new Teacher("Adam", "Sędziwy")],
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
      }
    },

    {
      name: "Studio projektowe 2",
      mainTeacher: new Teacher("Tomasz", "Szmuc"),
      details: {
        grade: {grade:4 as TGrade, timestamp: randomDate() as TTimestamp},
        teachers: [new Teacher("Tomasz", "Szmuc"), new Teacher("Radosław", "Klimek"), new Teacher("Jacek", "Piwowarczyk"), new Teacher("Tomasz", "Szmuc"), new Teacher("Andrzej", "Bielecki")],
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
      }
    }, 
    
  ]
}
export const generateTGradeSummaryDetails = (): TGradeSummaryDetails => {
  return generateTGradeSummary().details;
};

export const generateTGradeSummary = (): TGradeSummary => {
  const items = getTGradeSummaries();
  const ind = Math.floor(Math.random() * 1000 % items.length)
  return items[ind];
};

export const generatePartialSummary = (): TPartialSummary => {
  return {
    grade: (Math.random() > 0.5 ? 4.5 : 2.0 )as TGrade,
    timestamp: randomDate() as TTimestamp,
    description: Math.random() > 0.5 ? "Bardzo dobrze rozwiązane, brak założeń." : undefined,
    title: "Kolokwium nr 1 - webpack"
  }
}

const randomDate = () => Date.now() - Math.random() * 1000000 + 1000000;
