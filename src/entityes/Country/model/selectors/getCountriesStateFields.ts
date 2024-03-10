import { createSelector } from '@reduxjs/toolkit';
import { getCountriesData } from './getCountriesData';
import { getCountriesFetchLoading } from './getCountriesFetchLoading';
import { getCountriesFetchErr } from './getCountriesFetchErr';

export const getCountriesStateFields = createSelector(
  getCountriesData,
  getCountriesFetchLoading,
  getCountriesFetchErr,
  (
    countriesList,
    isLoadingCountries,
    countriesFetchErr,
  ) => ({
    countriesList,
    isLoadingCountries,
    countriesFetchErr,
  }),
);
