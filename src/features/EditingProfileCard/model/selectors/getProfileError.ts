import { IStateSchema } from 'store/types/StateSchema';

export const getProfileError: (state: IStateSchema) => string | undefined | null = (state) => state?.profile?.error;
