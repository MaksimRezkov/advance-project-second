import { createSelector } from '@reduxjs/toolkit';
import { getProfileData } from './getProfileData';
import { getProfileError } from './getProfileError';
import { getProfileLoading } from './getProfileLoading';
import { getProfileFormData } from './getProdileFormData';
import { getProfileEditing } from './getProfileEditing';

export const getProfileStateFields = createSelector(
  getProfileData,
  getProfileFormData,
  getProfileError,
  getProfileLoading,
  getProfileEditing,
  (
    data,
    formData,
    error,
    isLoading,
    isEdit,
  ) => ({
    data,
    formData,
    error,
    isLoading,
    isEdit,
  }),
);
