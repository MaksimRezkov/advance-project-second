import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthData, IAuthUser } from 'store/types/modules/authUser/authUserTypes';
import { ILoginData } from 'store/types/modules/login/loginTypes';
import { authUserActions } from 'entityes/AuthUser';
import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';
import { USER_DATA_KEY, USER_TOKEN_KEY } from 'shared/const/LocalStorage';
import { IThunkConfig } from 'store';

export interface ILoginThunkParams {
  data: ILoginData
  onSuccessFn?: () => void
}

export const loginAsyncThunk = createAsyncThunk<
    IAuthUser,
    ILoginThunkParams,
    IThunkConfig
  >(
  'loginProcess/loginByUsername',
  async (params, thunkApi) => {
    const { rejectWithValue, dispatch, extra } = thunkApi;
    try {
      const response = await extra.apiClient.post<IAuthUser>('login', params.data);
      const { data } = response;
      if (!data) {
        throw new Error('error data');
      }
      const { accessToken } = data;
      localStorageService.setItem(USER_DATA_KEY, JSON.stringify(data));
      localStorageService.setItem(USER_TOKEN_KEY, accessToken);
      dispatch(authUserActions.setAuthUser(data));
      return data;
    } catch (error: any) {
      if (error?.response?.status === 403) {
        return rejectWithValue('Пользователь не найден');
      }
      return rejectWithValue('Ошибка процесса авторизации');
    }
  },
);
