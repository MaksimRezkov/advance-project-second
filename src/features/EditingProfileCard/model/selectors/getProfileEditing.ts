import { IStateSchema } from 'store/types/StateSchema';

export const getProfileEditing: (state: IStateSchema) => boolean | undefined = (state) => state?.profile?.isEdit;
