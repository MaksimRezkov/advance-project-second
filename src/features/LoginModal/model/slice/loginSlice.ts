import { createSlice } from '@reduxjs/toolkit';
import { ILoginSchema } from 'store/types/modules/login/loginTypes';
import { loginAsyncThunk } from '../service/LoginAsyncThunk';

const initialState: ILoginSchema = {
  error: null,
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    clearLoginStore (state) {
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers (builder) {
    builder
      .addCase(loginAsyncThunk.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loginAsyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log('payload', action.payload);
      })
      .addCase(loginAsyncThunk.rejected, (state, action) => {
        console.log('error payload', action);
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
