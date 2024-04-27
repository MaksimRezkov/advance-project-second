import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoginModalSchema } from 'store/types/modules/login/loginTypes';

const initialState: ILoginModalSchema = {
  isModalOpen: false,
};

const loginModalSlice = createSlice({
  name: 'loginModalState',
  initialState,
  reducers: {
    toggleModalOpen (state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { actions: loginModalActions } = loginModalSlice;
export const { reducer: loginModalReducer } = loginModalSlice;
