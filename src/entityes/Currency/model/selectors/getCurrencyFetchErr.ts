import { IStateSchema } from 'store/types/StateSchema';
import { getCurrencySchema } from './getCurrencySchema';

export const getCurrencyFetchErr: (state: IStateSchema) => null | undefined | string = (state: IStateSchema) => getCurrencySchema(state)?.error;
