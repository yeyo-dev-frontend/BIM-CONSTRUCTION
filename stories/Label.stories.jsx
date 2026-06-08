// stories/Label.stories.jsx
import React from 'react';
import Label from '@/components/atoms/labels.jsx';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    htmlFor: { control: 'text' },
    required: { control: 'boolean' },
    text: { control: 'text' },
    className: { control: 'text' },
  },
};
export default meta;

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'email',
  required: false,
  text: 'Etiqueta estándar',
};

export const Required = Template.bind({});
Required.args = {
  htmlFor: 'email',
  required: true,
  text: 'Correo electrónico',
};
