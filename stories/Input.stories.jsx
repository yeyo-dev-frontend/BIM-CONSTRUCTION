// stories/Input.stories.jsx
import React from 'react';
import Input from '@/components/atoms/inputs';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    type: { control: { type: 'select', options: ['text', 'email', 'password', 'number', 'search'] } },
    isError: { control: 'boolean' },
    leftIcon: { control: 'object' },
    rightIcon: { control: 'object' },
    className: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Escribe algo...',
  isError: false,
  disabled: false,
};

export const WithError = Template.bind({});
WithError.args = {
  type: 'email',
  placeholder: 'correo@invalid.com',
  isError: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  type: 'search',
  placeholder: 'Buscar...',
  leftIcon: <span>🔍</span>,
  rightIcon: <span>❌</span>,
};
