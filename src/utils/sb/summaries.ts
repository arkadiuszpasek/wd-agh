import { TGradeSummary } from "../../organisms/GradeAccordion/GradeSummary";
import { Teacher } from "../../types/Teacher";

const randomDate = () => Date.now() - Math.random() * 1000000 + 1000000;

export const semester6: TGradeSummary[] = [
  {
    name: "Inteligencja obliczeniowa w analizie danych cyfrowych",
    shortName: "IOADC",
    mainTeacher: new Teacher("Zbisław", "Tabor", "prof. dr hab."),
    details: {
      partialGrades: [],
      grade: { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [new Teacher("Zbisław", "Tabor", "prof. dr hab.")],
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
    name: "Interfejsy multimodalne",
    shortName: "IM",
    mainTeacher: new Teacher("Jaromir", "Przybyło", "dr inż."),
    details: {
      partialGrades: [],
      grade: { grade: 3 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [new Teacher("Jaromir", "Przybyło", "dr inż.")],
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
    name: "Prawo autorskie i patentowe",
    shortName: "PAiP",
    mainTeacher: new Teacher("Agnieszka", "Zielińska", "dr"),
    details: {
      partialGrades: [],
      grade: { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [new Teacher("Agnieszka", "Zielińska", "dr")],
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
    name: "Studio projektowe 1",
    shortName: "SP1",
    mainTeacher: new Teacher("Piotr", "Szwed", "dr inż."),
    details: {
      partialGrades: [],
      grade: { grade: 4 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [new Teacher("Piotr", "Szwed", "dr inż.")],
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

  {
    name: "Systemy czasu rzeczywistego",
    shortName: "SCR",
    mainTeacher: new Teacher("Tomasz", "Szmuc", "prof. dr hab. inż."),
    details: {
      partialGrades: [],
      grade: { grade: 4 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [
        new Teacher("Tomasz", "Szmuc", "prof. dr hab. inż."),
        new Teacher("Tomasz", "Nabagło", "dr inż."),
      ],
      type: "E",
      ects: 3,
      summaries: [
        {
          lessonType: "L",
          lengthHours: 20,
          group: "I181",
          grades: [
            { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
          ],
        },
      ],
    },
  },

  {
    name: "Systemy wbudowane",
    shortName: "SW",
    mainTeacher: new Teacher("Tomasz", "Szmuc", "prof. dr hab. inż."),
    details: {
      partialGrades: [],
      grade: { grade: 4 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [
        new Teacher("Tomasz", "Szmuc", "prof. dr hab. inż."),
        new Teacher("Rafał", "Mrówka", "dr inż."),
      ],
      type: "E",
      ects: 3,
      summaries: [
        {
          lessonType: "L",
          lengthHours: 20,
          group: "I181",
          grades: [
            { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
          ],
        },
      ],
    },
  },

  {
    name: "Teoria kompilacji i kompilatory",
    shortName: "TKiK",
    mainTeacher: new Teacher("Radosław", "Klimek", "dr hab. inż."),
    details: {
      partialGrades: [],
      grade: { grade: 4 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [
        new Teacher("Radosław", "Klimek", "dr hab. inż."),
        new Teacher("Dariusz", "Pałka", "dr"),
      ],
      type: "E",
      ects: 3,
      summaries: [
        {
          lessonType: "L",
          lengthHours: 20,
          group: "I181",
          grades: [
            { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
          ],
        },
      ],
    },
  },

  {
    name: "Teoria obliczeń",
    shortName: "TO",
    mainTeacher: new Teacher("Adam", "Sędziwy", "dr hab."),
    details: {
      partialGrades: [],
      grade: { grade: 4 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [new Teacher("Adam", "Sędziwy", "dr hab.")],
      type: "E",
      ects: 3,
      summaries: [
        {
          lessonType: "L",
          lengthHours: 20,
          group: "I181",
          grades: [
            { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
          ],
        },
      ],
    },
  },
];

export const semester7: TGradeSummary[] = [
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

  {
    name: "Systemy analizy biznesowej",
    shortName: "SAB",
    mainTeacher: new Teacher("Edyta", "Kucharska", "dr hab. inż."),
    details: {
      partialGrades: [],
      grade: { grade: 4 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [
        new Teacher("Katarzyna", "Grobler-Dębska", "dr"),
        new Teacher("Edyta", "Kucharska", "dr hab. inż."),
        new Teacher("Rafał", "Mularczyk", "mgr inż."),
        new Teacher("Natalia", "Kashpruk", "mgr"),
        new Teacher("Dagmara", "Stasiowska", "mgr inż."),
      ],
      type: "E",
      ects: 3,
      summaries: [
        {
          lessonType: "L",
          lengthHours: 20,
          group: "I181",
          grades: [
            { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
          ],
        },
      ],
    },
  },

  {
    name: "Systemy i technologie wirtualizacji",
    shortName: "SiTW",
    mainTeacher: new Teacher("Sebastian", "Ernst", "dr inż."),
    details: {
      partialGrades: [],
      grade: { grade: 4 as TGrade, timestamp: randomDate() as TTimestamp },
      teachers: [
        new Teacher("Sebastian", "Ernst", "dr inż."),
        new Teacher("Bernadetta", "Stachura-Terlecka", "mgr inż."),
        new Teacher("Szymon", "Bobek", "dr inż."),
      ],
      type: "E",
      ects: 3,
      summaries: [
        {
          lessonType: "L",
          lengthHours: 20,
          group: "I181",
          grades: [
            { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp },
          ],
        },
      ],
    },
  },
];

export const summaries: TGradeSummary[][] = [
  semester7,
  semester6,
  semester7,
  semester6,
  semester7,
  semester6,
  semester7,
];
