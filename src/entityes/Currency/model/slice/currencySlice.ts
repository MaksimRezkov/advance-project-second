import { createSlice } from '@reduxjs/toolkit';
import { ICurrencySchema } from 'store/types/modules/currency/currencyTypes';
import { CurrencyGetAllAsyncThunk } from '../services/CurrencyGetAllAsyncThunk';

const initialState: ICurrencySchema = {
  currencyList: [],
  error: null,
  isLoading: false,
};

const CurrencySlice = createSlice({
  initialState,
  name: 'currency',
  reducers: {},
  extraReducers (builder) {
    builder
    .addCase(CurrencyGetAllAsyncThunk.pending, (state) => {
      state.error = null;
      state.isLoading = true;
      state.currencyList = [];
    })
    .addCase(CurrencyGetAllAsyncThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currencyList = action.payload;
    })
    .addCase(CurrencyGetAllAsyncThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { reducer: currencyReducers, actions: currencyActions } = CurrencySlice;
