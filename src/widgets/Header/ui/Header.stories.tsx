import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { RouteDecorator } from 'shared/config/storybook/Decorators/RouteDecorator';

const meta = {
  title: 'shared/Header',
  component: Header,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderLight: Story = {
  decorators: [
    RouteDecorator,
  ],
};

export const HeaderDark: Story = {
  decorators: [
    RouteDecorator,
    ThemeDecorator('dark'),
  ],
};
