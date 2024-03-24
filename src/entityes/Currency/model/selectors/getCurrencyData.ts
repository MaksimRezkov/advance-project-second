import { IStateSchema } from 'store/types/StateSchema';
import { getCurrencySchema } from './getCurrencySchema';
import { ICurrency } from 'store/types/modules/currency/currencyTypes';

export const getCurrencyData: (state: IStateSchema) => ICurrency[] = (state: IStateSchema) => getCurrencySchema(state)?.currencyList || [];
