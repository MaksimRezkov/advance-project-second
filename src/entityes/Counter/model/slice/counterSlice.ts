import { createSlice } from '@reduxjs/toolkit';
import { ICounterSchema } from 'store/types/modules/counter/counterTypes';

const initialState: ICounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (counterState, action) => {
      counterState.value += action.payload;
    },
    decrement: (counterState, action) => {
      counterState.value -= action.payload;
    },
  },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
