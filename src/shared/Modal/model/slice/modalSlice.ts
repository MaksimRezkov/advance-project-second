import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalSchema } from 'store/types/modules/modal/modalTypes';

const initialState: IModalSchema = {
  modalsConfig: {
    isOpen: false,
    isLoginOpen: false,
    isRegisterOpen: false,
  },
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleOpenModal (state, action: PayloadAction<IModalSchema['modalsConfig']>) {
      state.modalsConfig = {
        ...state.modalsConfig,
        ...action.payload,
      };
    },
  },
});

export const { actions: modalActions, reducer: modalReducer } = modalSlice;
