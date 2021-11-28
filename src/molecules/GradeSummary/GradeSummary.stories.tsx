import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { renderStoryBook } from '../../utils/sb/renderStoryBook';
import { GradeSummary } from './GradeSummary';
import { Teacher } from '../../types/Teacher';
import { timeStamp } from 'console';


export default {
  title: 'Molecules/GradeSummary',
  component: GradeSummary,
} as ComponentMeta<typeof GradeSummary>;

const randomDate = () => Date.now () - Math.random() * 1000000 + 1000000;

const defaultProps: React.ComponentProps<typeof GradeSummary> = {
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
export const DefaultSummary: ComponentStory<typeof GradeSummary> = () =>
  renderStoryBook(<GradeSummary {...defaultProps} />)

