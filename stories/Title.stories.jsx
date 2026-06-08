// stories/Title.stories.jsx
import React from 'react';
import Title from '@/components/atoms/titles';

const meta = {
  title: 'Atoms/Title',
  component: Title,
  argTypes: {
    level: { control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] } },
    variant: { control: { type: 'select', options: ['default', 'primary', 'secondary'] } },
    align: { control: { type: 'select', options: ['left', 'center', 'right'] } },
    weight: { control: { type: 'select', options: ['light', 'normal', 'bold'] } },
    text: { control: 'text' },
  },
};
export default meta;

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  level: 'h2',
  variant: 'primary',
  align: 'center',
  weight: 'bold',
  text: 'Título de ejemplo',
};

export const Secondary = Template.bind({});
Secondary.args = {
  level: 'h3',
  variant: 'secondary',
  align: 'left',
  weight: 'normal',
  text: 'Otro título',
};
