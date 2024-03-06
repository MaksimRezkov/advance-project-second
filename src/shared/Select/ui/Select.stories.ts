import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { optionLabel: 'Вариант 1', value: 'first' },
  { optionLabel: 'Вариант 2', value: 'second' },
  { optionLabel: 'Вариант 3', value: 'third' },
];

export const SelectWithLabelLight: Story = {
  args: {
    options,
    id: 'story-select-light-label',
    label: 'Тест селект',
    gap: 'S',
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};

export const SelectWithLabelLightInline: Story = {
  args: {
    options,
    id: 'story-select-light-label',
    label: 'Тест селект',
    inlineLabel: true,
    gap: 'XL',
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};

export const SelectWithLabelDark: Story = {
  args: {
    options,
    id: 'story-select-dark-label',
    label: 'Тест селект',
    gap: 'S',
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};
