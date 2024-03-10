import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'store';
import { ICountry } from 'store/types/modules/countries/countryTypes';

export const CountryGetAllAsyncThunk = createAsyncThunk<ICountry[], Record<string, unknown>, IThunkConfig>(
  'country/fetchAllCountries',
  async (_, thunkApi) => {
    const { rejectWithValue, extra, dispatch } = thunkApi;
    try {
      const res = await extra.apiClient.get<ICountry[]>('/countries');
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
