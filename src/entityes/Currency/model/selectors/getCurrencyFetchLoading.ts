import { IStateSchema } from 'store/types/StateSchema';
import { getCurrencySchema } from './getCurrencySchema';

export const getCurrencyFetchLoading: (state: IStateSchema) => boolean | undefined = (state: IStateSchema) => getCurrencySchema(state)?.isLoading;
