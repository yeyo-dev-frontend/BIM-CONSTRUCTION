// stories/Button.stories.jsx
import React from 'react';
import Button from '@/components/atoms/buttons';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { control: { type: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'danger'] } },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    text: { control: 'text' },
    className: { control: 'text' },
  },
};
export default meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  text: 'Guardar Cambios',
  disabled: false,
  isLoading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'md',
  text: 'Cancelar',
  disabled: false,
  isLoading: false,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'md',
  text: 'Más info',
  disabled: false,
  isLoading: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'md',
  text: 'Ghost',
  disabled: false,
  isLoading: false,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'md',
  text: 'Eliminar',
  disabled: false,
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  variant: 'primary',
  size: 'md',
  text: 'Cargando...',
  disabled: true,
  isLoading: true,
};
