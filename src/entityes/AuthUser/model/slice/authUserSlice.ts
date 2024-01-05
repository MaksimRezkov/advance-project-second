import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthUser, IAuthUserSchema } from 'store/types/modules/authUser/authUserTypes';

const initialState: IAuthUserSchema = {
  authData: null,
};

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setAuthUser (state, action: PayloadAction<IAuthUser>) {
      state.authData = action.payload;
    },
    clearAuthUser (state) {
      state.authData = null;
    },
  },
});

export const { actions: authUserActions } = authUserSlice;
export const { reducer: authUserReducer } = authUserSlice;
