import { ComponentDecorator } from 'shared/config/tests/decorators/componentDecorator';
import { Counter } from './Counter';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Counter component', () => {
  test('check display value', () => {
    const value = 10;
    const initialState = {
      counter: { value },
    };
    ComponentDecorator(<Counter/>, {
      initialState,
    });

    expect(screen.getByTestId('counter-value')).toHaveTextContent(String(value));
  });

  test('increment action', async () => {
    const value = 15;
    const initialState = {
      counter: { value },
    };
    ComponentDecorator(<Counter/>, {
      initialState,
    });

    const user = userEvent.setup();
    await user.click(screen.getByTestId('counter-increment'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent(String(value + 1));
  });

  test('decrement action', async () => {
    const value = 15;
    const initialState = {
      counter: { value },
    };
    ComponentDecorator(<Counter/>, {
      initialState,
    });

    const user = userEvent.setup();
    await user.click(screen.getByTestId('counter-decrement'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent(String(value - 1));
  });
});
