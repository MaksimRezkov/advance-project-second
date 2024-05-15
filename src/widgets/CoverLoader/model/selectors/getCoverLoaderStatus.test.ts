import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'store/types/StateSchema';
import { getCoverLoaderStatus } from './getCoverLoaderStatus';

describe('getCoverLoaderStatus', () => {
  test('loading process', () => {
    const state: DeepPartial<IStateSchema> = {
      coverLoader: {
        isLoading: true,
      },
    };

    expect(getCoverLoaderStatus(state as IStateSchema)).toBe(true);
  });
});
