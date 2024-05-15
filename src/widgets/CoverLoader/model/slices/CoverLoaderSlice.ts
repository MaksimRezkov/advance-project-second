import { createSlice } from '@reduxjs/toolkit';
import { ICoverLoaderStateSchema } from 'store/types/modules/coverLoader/coverLoaderTypes';

const initialState: ICoverLoaderStateSchema = {
  isLoading: false,
};

const coverLoaderSlice = createSlice({
  initialState,
  name: 'coverLoader',
  reducers: {
    startLoading (state) {
      state.isLoading = true;
    },
    stopLoading (state) {
      state.isLoading = false;
    },
  },
});

export const { actions: coverLoaderActions, reducer: coverLoaderReducer } = coverLoaderSlice;
