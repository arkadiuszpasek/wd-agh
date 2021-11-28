import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { renderStoryBook } from '../../utils/sb/renderStoryBook';
import { GradeAccordion } from './GradeAccordion';
import { Teacher } from '../../types/Teacher';
import { timeStamp } from 'console';


export default {
  title: 'Organisms/GradeAccordion',
  component: GradeAccordion,
} as ComponentMeta<typeof GradeAccordion>;

const randomDate = () => Date.now () - Math.random() * 1000000 + 1000000;

const defaultProps: React.ComponentProps<typeof GradeAccordion> = {
  grade: 4.5 as TGrade,
  name: "Pracownia inżynierska dyplomowa",
  mainTeacher: new Teacher("Charles", "Bukowski"),
  details: {
    grade: 5.0 as TGrade,
    teachers: [
      new Teacher("Arkadiusz", "Pasek"),
      new Teacher("John", "Doe"),
    ],    
    type: "Rożnice programgowe",
    ects: 3,
    summaries: [
      {
        lessonType: "Ćwiczenia audytoryjne",
        lengthHours: 14,
        group: "I181",
        grades: [
          { grade: 5.0 as TGrade, timestamp: randomDate() as TTimestamp },
          { grade: 2.0 as TGrade, timestamp: randomDate() as TTimestamp }
        ]
      },
      {
        lessonType: "Wykład",
        lengthHours: 28,
        group: "I08D",
        grades: [
          { grade: 4.5 as TGrade, timestamp: randomDate() as TTimestamp }
        ]
      }
    ]
  }
}
export const DefaultSummary: ComponentStory<typeof GradeAccordion> = () =>
  renderStoryBook(<GradeAccordion {...defaultProps} />)

