import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';
import { RouteDecorator } from 'shared/config/storybook/Decorators/RouteDecorator';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
  args: {
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio officiis nihil incidunt nesciunt magni! Explicabo tenetur mollitia consequatur odio, non saepe praesentium dignissimos ipsum accusamus inventore laudantium provident eius recusandae.',
  },
  decorators: [
    StoreDecorator({}),
    RouteDecorator,
    ThemeDecorator('light'),
  ],
};

export const ModalDark: Story = {
  args: {
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio officiis nihil incidunt nesciunt magni! Explicabo tenetur mollitia consequatur odio, non saepe praesentium dignissimos ipsum accusamus inventore laudantium provident eius recusandae.',
  },
  decorators: [
    StoreDecorator({}),
    RouteDecorator,
    ThemeDecorator('dark'),
  ],
};
