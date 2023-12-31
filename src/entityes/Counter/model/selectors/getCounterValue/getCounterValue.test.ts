import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'store/types/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('return value from counter', () => {
    const state: DeepPartial<IStateSchema> = {
      counter: { value: 10 },
    };

    const value = getCounterValue(state as IStateSchema);
    expect(value).toBe(10);
  });
});
