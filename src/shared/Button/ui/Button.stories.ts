import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator/ThemeDecorator';

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
