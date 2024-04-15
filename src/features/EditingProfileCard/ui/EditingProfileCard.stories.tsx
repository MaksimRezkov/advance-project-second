import type { Meta, StoryObj } from '@storybook/react';

import { EditingProfileCard } from './EditingProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';
import { RouteDecorator } from 'shared/config/storybook/Decorators/RouteDecorator';

const meta = {
  title: 'feature/EditingProfileCard',
  component: EditingProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EditingProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const profileData = {
  email: 'story@mail.ru',
  id: 0,
  age: 25,
  avatar: 'https://i.pinimg.com/736x/c6/25/90/c62590c1756680060e7c38011cd704b5.jpg',
  country: 'Russia',
  city: 'Moskow',
  currency: 'RUB',
  firstname: 'Ragnar',
  lastname: 'LordBrock',
};

const getProfileState = (isLoading: boolean) => ({
  profile: {
    isLoading,
    error: null,
    isEdit: false,
    profileData,
    profileDataForm: profileData,
    validMap: {},
  },
});

const profileState = {
  profile: {
    isLoading: true,
    error: null,
    isEdit: false,
    profileData,
    profileDataForm: profileData,
    validMap: {},
  },
};

export const ProfileEditingCard: Story = {
  args: {
    userId: 1,
  },
  decorators: [
    StoreDecorator(getProfileState(false)),
    ThemeDecorator('light'),
    RouteDecorator,
  ],
};

export const ProfileEditingCardLoading: Story = {
  args: {
    userId: 1,
  },
  decorators: [
    StoreDecorator(getProfileState(true)),
    ThemeDecorator('light'),
    RouteDecorator,
  ],
};
