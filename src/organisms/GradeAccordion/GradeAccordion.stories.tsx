import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { generateTGradeSummary } from '../../utils/sb/generator';
import { renderStoryBook } from '../../utils/sb/renderStoryBook';
import { GradeAccordion } from './GradeAccordion';

export default {
  title: 'Organisms/GradeAccordion',
  component: GradeAccordion,
} as ComponentMeta<typeof GradeAccordion>;


export const DefaultSummary: ComponentStory<typeof GradeAccordion> = () =>
  renderStoryBook(<GradeAccordion {...generateTGradeSummary()} />)

