import { IStateSchema } from 'store/types/StateSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginError: (state: IStateSchema) => string = (state: IStateSchema) => getLoginState(state)?.error;
