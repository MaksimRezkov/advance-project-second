import { IStateSchema } from 'store/types/StateSchema';
import { getAuthUserState } from './getAuthUserState';

export const getAuthUserId: (state: IStateSchema) => number | undefined = (state: IStateSchema) => getAuthUserState(state)?.authData?.id;
