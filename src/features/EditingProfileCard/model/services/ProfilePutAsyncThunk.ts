import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'store';
import { IProfileData } from 'entityes/Profile';

export interface IProfileThunkParams {
  id: number
}

export const ProfilePutAsyncThunk = createAsyncThunk<IProfileData, IProfileData, IThunkConfig>(
  'profile/putProfileData',
  // ф-я должна вернуть IProfileData
  async (params, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    try {
      const response = await extra.apiClient.put<IProfileData>(`/users/${params.id}`, params);
      const { data } = response;

      return data;
    } catch (error: any) {
      if (error?.response?.status === 403) {
        return rejectWithValue('Пользователь не найден');
      }
      return rejectWithValue('Ошибка процесса авторизации');
    }
  },
);
