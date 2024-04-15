import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { ICountry } from 'store/types/modules/countries/countryTypes';

const meta = {
  title: 'entity/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const currencyList = [
  {
    code: 'RUB',
    id: 1,
    label: 'Рубль',
  },
];

const countries: ICountry[] = [
  {
    code: 'RUS',
    id: 1,
    name: 'Россия',
  },
];

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

export const ProfileCardWithData: Story = {
  args: {
    profileData,
    readonly: true,
    countries,
    currencyList,
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};

export const ProfileCardWithErrors: Story = {
  args: {
    profileData,
    validateErorrsMap: {
      email: 'test err email',
      lastname: 'test err lastname',
    },
    currencyList,
    countries,
  },
  decorators: [
    ThemeDecorator('light'),
  ],
};
