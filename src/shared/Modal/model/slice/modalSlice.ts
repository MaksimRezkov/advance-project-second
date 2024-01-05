import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalSchema } from 'store/types/modules/modal/modalTypes';

const initialState: IModalSchema = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleOpenModal (state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { actions: modalActions, reducer: modalReducer } = modalSlice;
