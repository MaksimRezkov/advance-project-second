import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICountrySchema } from 'store/types/modules/countries/countryTypes';
import { CountryGetAllAsyncThunk } from '../services/CountryGetAllAyncThunk';

const initialState: ICountrySchema = {
  countries: [],
  error: null,
  isLoading: false,
};

const CountriesSlice = createSlice({
  initialState,
  name: 'countries',
  reducers: {},
  extraReducers (builder) {
    builder.addCase(CountryGetAllAsyncThunk.pending, (state) => {
      state.error = null;
      state.isLoading = true;
      state.countries = [];
    })
    .addCase(CountryGetAllAsyncThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    })
    .addCase(CountryGetAllAsyncThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    });
  },
});

export const { actions: countriesActions, reducer: countriesRedicer } = CountriesSlice;
