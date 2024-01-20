import { createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from 'store/types/modules/profile/profileStateTypes';

const initialState: IProfileSchema = {
  profileData: null,
  error: null,
  isLoading: false,
};

const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
