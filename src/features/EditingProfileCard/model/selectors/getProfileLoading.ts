import { IStateSchema } from 'store/types/StateSchema';

export const getProfileLoading: (state: IStateSchema) => boolean | undefined | null = (state) => state?.profile?.isLoading;
