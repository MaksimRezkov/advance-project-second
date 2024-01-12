import { IStateSchema } from 'store/types/StateSchema';
import { getLoginLoading } from './getLoginLoading';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginLoading', () => {
  test('check value loading', () => {
    const state: DeepPartial<IStateSchema> = {
      loginProcess: {
        isLoading: false,
      },
    };
    expect(getLoginLoading(state as IStateSchema)).toBe(state.loginProcess.error);
  });
  test('check value with emty state', () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginLoading(state as IStateSchema)).toBe(false);
  });
});
