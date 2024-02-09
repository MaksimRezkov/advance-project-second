import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from 'store/types/modules/profile/profileStateTypes';
import { ProfileGetAsyncThunk } from '../services/ProfileGetAsyncThunk';
import { ProfilePutAsyncThunk } from '../services/ProfilePutAsyncThunk';

const initialState: IProfileSchema = {
  profileData: null,
  profileDataForm: null,
  error: null,
  isLoading: false,
  isEdit: false,
  isChange: false,
  isValidChange: true,
};

const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    toggleEditing: (state) => {
      state.isEdit = !state.isEdit;
    },

    cancelEditing: (state) => {
      if (state.isChange && state.profileData) {
        state.isChange = false;
        state.profileDataForm = {
          ...state.profileData,
        };
      }
    },

    setValidChange: (state, action: PayloadAction<boolean>) => {
      state.isValidChange = action.payload;
    },

    setAge: (state, action: PayloadAction<number>) => {
      if (state.profileDataForm) {
        state.isChange = true;
        state.profileDataForm = {
          ...state.profileDataForm,
          age: action.payload,
        };
      }
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      if (state.profileDataForm) {
        state.isChange = true;
        state.profileDataForm = {
          ...state.profileDataForm,
          avatar: action.payload,
        };
      }
    },
    setUsername: (state, action: PayloadAction<string>) => {
      if (state.profileDataForm) {
        state.isChange = true;
        state.profileDataForm = {
          ...state.profileDataForm,
          username: action.payload,
        };
      }
    },
    setFirstname: (state, action: PayloadAction<string>) => {
      if (state.profileDataForm) {
        state.isChange = true;
        state.profileDataForm = {
          ...state.profileDataForm,
          firstname: action.payload,
        };
      }
    },
    setLastname: (state, action: PayloadAction<string>) => {
      if (state.profileDataForm) {
        state.isChange = true;
        state.profileDataForm = {
          ...state.profileDataForm,
          lastname: action.payload,
        };
      }
    },
    setCity: (state, action: PayloadAction<string>) => {
      if (state.profileDataForm) {
        state.isChange = true;
        state.profileDataForm = {
          ...state.profileDataForm,
          city: action.payload,
        };
      }
    },
    setCountry: (state, action: PayloadAction<string>) => {
      if (state.profileDataForm) {
        state.isChange = true;
        state.profileDataForm = {
          ...state.profileDataForm,
          country: action.payload,
        };
      }
    },
  },
  extraReducers (builder) {
    builder
      .addCase(ProfileGetAsyncThunk.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      }).addCase(ProfileGetAsyncThunk.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.profileDataForm = { ...action.payload };
        state.isLoading = false;
      }).addCase(ProfileGetAsyncThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      }).addCase(ProfilePutAsyncThunk.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      }).addCase(ProfilePutAsyncThunk.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.isChange = false;
        state.isEdit = false;
        state.isLoading = false;
      }).addCase(ProfilePutAsyncThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
