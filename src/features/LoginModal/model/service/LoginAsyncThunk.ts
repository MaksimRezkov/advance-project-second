import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthResponseData, IAuthUser } from 'store/types/modules/authUser/authUserTypes';
import { ILoginData } from 'store/types/modules/login/loginTypes';
import { authUserActions } from 'entityes/AuthUser';
import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';
import { ACCESS_TOKEN, USER_DATA_KEY, USER_ID } from 'shared/const/LocalStorage';
import { IThunkConfig } from 'store';

export interface ILoginThunkParams {
  loginData: ILoginData;
  onSuccessFn?: () => void;
}

export const loginAsyncThunk = createAsyncThunk<
    IAuthResponseData,
    ILoginThunkParams,
    IThunkConfig
  >(
  'loginProcess/loginByemail',
  async (params, thunkApi) => {
    const { rejectWithValue, dispatch, extra } = thunkApi;
    try {
      const { password, email } = params.loginData;
      const response = await extra.apiUsersClient.post<IAuthResponseData>('auth/login', { email, password });
      const { data } = response;
      const { accessToken, user } = data;

      localStorageService.setItem(ACCESS_TOKEN, accessToken);
      localStorageService.setItem(USER_ID, String(user.id));

      if (!data) {
        throw new Error('error data');
      }
      dispatch(authUserActions.setAuthUser(user));
      localStorageService.setItem(USER_DATA_KEY, JSON.stringify(user));
      return data;
    } catch (error: any) {
      if (error?.response?.status === 403) {
        return rejectWithValue('Пользователь не найден');
      }
      return rejectWithValue('Ошибка процесса авторизации');
    }
  },
);
