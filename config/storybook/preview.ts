import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/Decorators/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator('light'),
  ],
};

export default preview;
