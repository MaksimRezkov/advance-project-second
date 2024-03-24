import { createSelector } from '@reduxjs/toolkit';
import { getCurrencyData } from './getCurrencyData';
import { getCurrencyFetchLoading } from './getCurrencyFetchLoading';
import { getCurrencyFetchErr } from './getCurrencyFetchErr';

export const getCurrencyStateFields = createSelector(
  getCurrencyData,
  getCurrencyFetchLoading,
  getCurrencyFetchErr,
  (
    currencyList,
    isLoadingCurrency,
    currencyFetchErr,
  ) => ({
    currencyList,
    isLoadingCurrency,
    currencyFetchErr,
  }),
);
