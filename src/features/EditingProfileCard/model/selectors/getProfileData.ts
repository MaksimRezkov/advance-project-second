import { IProfileData } from 'entityes/Profile';
import { IStateSchema } from 'store/types/StateSchema';

export const getProfileData: (state: IStateSchema) => IProfileData | undefined | null = (state) => state?.profile?.profileData;
