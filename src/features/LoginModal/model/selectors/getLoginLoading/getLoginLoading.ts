import { IStateSchema } from 'store/types/StateSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginLoading: (state: IStateSchema) => boolean | undefined = (state: IStateSchema) => getLoginState(state)?.isLoading;
