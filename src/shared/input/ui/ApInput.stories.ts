import type { Meta, StoryObj } from '@storybook/react';

import { ApInput } from './ApInput';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';

const meta = {
  title: 'shared/ApInput',
  component: ApInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ApInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputLight: Story = {
  args: {
    placeholder: 'Story Input',
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};

export const InputDisabled: Story = {
  args: {
    placeholder: 'Story Input Disabled',
    disable: true,
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};

export const InputDark: Story = {
  args: {
    placeholder: 'Story Input',
  },
  decorators: [
    ThemeDecorator('dark'),
  ],
};
