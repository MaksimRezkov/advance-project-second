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
  validMap: {},
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
        state.validMap = {};
        state.isValidChange = true;
        state.profileDataForm = {
          ...state.profileData,
        };
      }
    },

    setValidMap: (state, action: PayloadAction<Record<string, boolean>>) => {
      state.validMap = {
        ...state.validMap,
        ...action.payload,
      };
      state.isValidChange = Object.values(state.validMap).every(isValid => isValid);
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
    setEmail: (state, action: PayloadAction<string>) => {
      if (state.profileDataForm) {
        state.isChange = true;
        state.profileDataForm = {
          ...state.profileDataForm,
          email: action.payload,
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
    setCurrency: (state, action: PayloadAction<string>) => {
      if (state.profileDataForm) {
        state.isChange = true;
        state.profileDataForm = {
          ...state.profileDataForm,
          currency: action.payload,
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
