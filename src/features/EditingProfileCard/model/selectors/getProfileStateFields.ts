import { createSelector } from '@reduxjs/toolkit';
import { getProfileData } from './getProfileData';
import { getProfileError } from './getProfileError';
import { getProfileLoading } from './getProfileLoading';
import { getProfileFormData } from './getProdileFormData';
import { getProfileEditing } from './getProfileEditing';
import { getProfileIsValidChange } from './getProfileIsValidChange';

export const getProfileStateFields = createSelector(
  getProfileData,
  getProfileFormData,
  getProfileError,
  getProfileLoading,
  getProfileEditing,
  getProfileIsValidChange,
  (
    data,
    formData,
    error,
    isLoading,
    isEdit,
    isValidChange,
  ) => ({
    data,
    formData,
    error,
    isLoading,
    isEdit,
    isValidChange,
  }),
);
