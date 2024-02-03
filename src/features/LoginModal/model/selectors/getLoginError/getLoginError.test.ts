import { IStateSchema } from 'store/types/StateSchema';
import { getLoginError } from './getLoginError';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginError', () => {
  test('check value error', () => {
    const state: DeepPartial<IStateSchema> = {
      loginProcess: {
        error: 'Error',
        isLoading: false,
      },
    };

    expect(getLoginError(state as IStateSchema)).toBe(state?.loginProcess?.error);
  });
});
