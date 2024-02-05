import { IStateSchema } from 'store/types/StateSchema';
import { IProfileData } from 'store/types/modules/profile/profileStateTypes';

export const getProfileData: (state: IStateSchema) => IProfileData | undefined | null = (state) => state?.profile?.profileData;
