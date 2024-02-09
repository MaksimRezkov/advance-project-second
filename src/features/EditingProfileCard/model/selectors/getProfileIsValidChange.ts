import { IStateSchema } from 'store/types/StateSchema';

export const getProfileIsValidChange: (state: IStateSchema) => boolean | undefined | null = (state) => state?.profile?.isValidChange;
