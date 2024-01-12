import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthUser } from 'store/types/modules/authUser/authUserTypes';
import { ILoginData } from 'store/types/modules/login/loginTypes';
import axios from 'axios';
import { authUserActions } from 'entityes/AuthUser';
import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';
import { USER_TOKEN_KEY } from 'shared/const/LocalStorage';
import { loginActions } from '../slice/loginSlice';

export interface ILoginThunkParams {
  loginData: ILoginData
  onSuccessFn?: () => void
}

export const loginAsyncThunk = createAsyncThunk<IAuthUser, ILoginThunkParams>(
  'loginProcess/loginByUsername',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<IAuthUser>('http://localhost:8000/login', params.loginData);
      const { data } = response;
      dispatch(authUserActions.setAuthUser(data));
      localStorageService.setItem(USER_TOKEN_KEY, JSON.stringify(data));
      params?.onSuccessFn?.();
      if (!data) {
        throw new Error('error data');
      }
      return data;
    } catch (error) {
      if (error?.response?.status === 403) {
        return rejectWithValue('Пользователь не найден');
      }
      return rejectWithValue('Ошибка процесса авторизации');
    }
  },
);
