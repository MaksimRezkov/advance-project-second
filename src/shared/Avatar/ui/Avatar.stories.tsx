import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarWithPhoto: Story = {
  args: {
    src: 'https://i.pinimg.com/736x/c6/25/90/c62590c1756680060e7c38011cd704b5.jpg',
    size: 300,
  },
  decorators: [
  ],
};

export const AvatarWithoutPhoto: Story = {
  args: {
    size: 300,
  },
  decorators: [
  ],
};
