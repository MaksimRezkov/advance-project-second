import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'store';
import { IProfileData } from 'store/types/modules/profile/profileStateTypes';

export interface IProfileThunkParams {
  id: number
}

export const ProfileGetAsyncThunk = createAsyncThunk<IProfileData, IProfileThunkParams, IThunkConfig>(
  'profile/fetchingProfileData',
  // ф-я должна вернуть IProfileData
  async (params, thunkApi) => {
    const { rejectWithValue, dispatch, extra } = thunkApi;
    try {
      const response = await extra.apiClient.get<IProfileData>(`/users/${params.id}`);
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
