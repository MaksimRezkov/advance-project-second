import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'store';
import { ICurrency } from 'store/types/modules/currency/currencyTypes';

export const CurrencyGetAllAsyncThunk = createAsyncThunk<ICurrency[], undefined, IThunkConfig>(
  'currency/fetchAllCurrency',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const res = await extra.apiClient.get<ICurrency[]>('/currency');
      const { data } = res;

      return data;
    } catch (error: any) {
      if (error?.response?.status === 403) {
        return rejectWithValue('Пользователь не найден');
      }
      return rejectWithValue('Ошибка запроса данных о государствах');
    }
  },
);
