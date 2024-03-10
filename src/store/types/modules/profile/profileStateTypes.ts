import { IProfileData } from 'entityes/Profile';

export interface IProfileSchema {
  profileData: IProfileData | null;
  profileDataForm: IProfileData | null;
  isLoading: boolean;
  error: string | null;
  isEdit: boolean;
  isChange?: boolean;
  isValidChange?: boolean;
}
