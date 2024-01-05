import { IStateSchema } from 'store/types/StateSchema';
import { getAuthUserState } from './getAuthUserState';

export const getAuthUserId: (state: IStateSchema) => number = (state: IStateSchema) => getAuthUserState(state)?.authData?.id;
