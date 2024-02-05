import { IStateSchema } from 'store/types/StateSchema';
import { IProfileData } from 'store/types/modules/profile/profileStateTypes';

export const getProfileFormData: (state: IStateSchema) => IProfileData | undefined | null = (state) => state?.profile?.profileDataForm;
