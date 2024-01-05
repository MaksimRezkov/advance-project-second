import { IStateSchema } from 'store/types/StateSchema';
import { getLoginState } from './getLoginState';

export const getLoginLoading: (state: IStateSchema) => boolean = (state: IStateSchema) => getLoginState(state).isLoading;
