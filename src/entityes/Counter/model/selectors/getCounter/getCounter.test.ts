import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'store/types/StateSchema';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('return counter state', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 5 },
    };

    expect(getCounter(state as IStateSchema)).toBe(state.counter);
  });
});
