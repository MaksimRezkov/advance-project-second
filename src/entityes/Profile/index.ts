import { profileActions, profileReducer } from '../../features/EditingProfileCard/model/slice/profileSlice';
import { ProfileCard } from './ui/ProfileCard';
import {
  validateAge,
  validateCountry,
  validateFirstname,
  validateLastname,
  validateEmail,
 } from './model/validation/validationFields';
import { ProfileFieldNames, IProfileData } from './constants/profileFieldNames';
export {
  profileActions,
  profileReducer,
  ProfileCard,
  validateAge,
  validateCountry,
  validateFirstname,
  validateLastname,
  validateEmail,
  ProfileFieldNames,
};

export type {
  IProfileData,
};
