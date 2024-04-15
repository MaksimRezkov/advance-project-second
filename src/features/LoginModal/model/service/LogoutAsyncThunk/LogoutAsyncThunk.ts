import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'store';

export const logoutAsyncThunk = createAsyncThunk<
    boolean,
    never,
    IThunkConfig
  >(
  'logoutProcess/logout',
  async (_, thunkApi) => {
    try {
      const response = await thunkApi.extra.apiUsersClient.post<boolean>('auth/logout');
      const { data } = response;
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue('Ошибка процесса выхода');
    }
  },
);
