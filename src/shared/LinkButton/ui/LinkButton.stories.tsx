import type { Meta, StoryObj } from '@storybook/react';

import { LinkButton } from './LinkButton';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { RouteDecorator } from 'shared/config/storybook/Decorators/RouteDecorator';

const meta = {
  title: 'shared/LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkLight: Story = {
  args: {
    to: '',
    children: 'App Link',
  },
  decorators: [
    RouteDecorator,
  ],
};

export const LinkDark: Story = {
  args: {
    to: '',
    children: 'App Link',
  },
  decorators: [
    RouteDecorator,
    ThemeDecorator('dark'),
  ],
};
