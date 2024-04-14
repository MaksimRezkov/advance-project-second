// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { authUserActions } from 'entityes/AuthUser';
// import { USER_DATA_KEY } from 'shared/const/LocalStorage';
// import { localStorageService } from 'shared/utils/LocalStorage/LocalStorageService';
// import { IThunkConfig } from 'store';
// import { IAuthData, IAuthUser } from 'store/types/modules/authUser/authUserTypes';
// import { ILoginData } from 'store/types/modules/login/loginTypes';

// export interface IRegisterData {
//   data: ILoginData;
// }

// export const registerAsyncThunk = createAsyncThunk<IAuthData, IRegisterData, IThunkConfig>(
//   'registerProcess/registerNewUser',
//   async (params, thunkApi) => {
//     const { rejectWithValue, dispatch, extra } = thunkApi;

//     try {
//       const { password, username } = params.data;

//       const authResponse = await extra.apiAuthClient.post<IAuthData>('auth/register', {
//         password,
//         email: username,
//       });

//       const { data: authData } = authResponse;
//       const { accessToken } = authData;
//       localStorageService.setItem(USER_DATA_KEY, accessToken);

//       const response = await extra.apiClient.post<IAuthUser>('login', params.data);
//       const { data } = response;

//       dispatch(authUserActions.setAuthUser(data));
//       return authData;
//     } catch (error) {
//       return rejectWithValue('Ошибка процесса регистрации');
//     }
//   },
// );
