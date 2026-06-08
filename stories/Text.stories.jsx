// stories/Text.stories.jsx
import React from 'react';
import Text from '@/components/atoms/texts';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    as: { control: { type: 'select', options: ['p', 'span', 'small', 'strong'] } },
    variant: { control: { type: 'select', options: ['default', 'primary', 'secondary', 'muted', 'error'] } },
    size: { control: { type: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl'] } },
    weight: { control: { type: 'select', options: ['light', 'normal', 'medium', 'bold'] } },
    align: { control: { type: 'select', options: ['left', 'center', 'right', 'justify'] } },
    text: { control: 'text' },
  },
};
export default meta;

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: 'p',
  variant: 'default',
  size: 'base',
  weight: 'normal',
  align: 'left',
  text: 'Ejemplo de texto estándar',
};

export const Primary = Template.bind({});
Primary.args = {
  as: 'span',
  variant: 'primary',
  size: 'lg',
  weight: 'bold',
  align: 'center',
  text: 'Texto destacado',
};
