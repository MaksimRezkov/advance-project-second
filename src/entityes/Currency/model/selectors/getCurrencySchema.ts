import { IStateSchema } from 'store/types/StateSchema';
import { ICurrencySchema } from 'store/types/modules/currency/currencyTypes';

export const getCurrencySchema: (state: IStateSchema) => ICurrencySchema | undefined = (state: IStateSchema) => state?.currency;
