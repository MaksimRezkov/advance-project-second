import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSizes } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    additionalClasses: ['appButton'],
    children: 'Story',
  },
  decorators: [
  ],
};

export const PrimaryDark: Story = {
  args: {
    additionalClasses: ['appButton'],
    children: 'Story',
  },
  decorators: [
    ThemeDecorator('dark'),
  ],
};

export const DisabledLight: Story = {
  args: {
    additionalClasses: ['appButton'],
    children: 'Story',
    disabled: true,
  },
  decorators: [
  ],
};

export const DisabledDark: Story = {
  args: {
    additionalClasses: ['appButton'],
    children: 'Story',
    disabled: true,
  },
  decorators: [
    ThemeDecorator('dark'),
  ],
};

export const PrimaryL: Story = {
  args: {
    additionalClasses: ['appButton'],
    children: 'Story',
    size: ButtonSizes.L,
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};

export const PrimaryXL: Story = {
  args: {
    additionalClasses: ['appButton'],
    children: 'Story',
    size: ButtonSizes.XL,
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};

export const PrimaryM: Story = {
  args: {
    additionalClasses: ['appButton'],
    children: 'Story',
    size: ButtonSizes.M,
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};

export const PrimaryBordered: Story = {
  args: {
    additionalClasses: ['appButton'],
    children: 'Story',
    bordered: true,
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};
