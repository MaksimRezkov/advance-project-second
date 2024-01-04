import { createSlice } from '@reduxjs/toolkit';
import { IAuthUserSchema } from 'store/types/modules/authUser/authUserTypes';

const initialState: IAuthUserSchema = {
  authData: null,
};

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setauthUser (state, action) {
      state.authData = action.payload;
    },
  },
});

export const { actions: authUserActions } = authUserSlice;
export const { reducer: authUserReducer } = authUserSlice;
