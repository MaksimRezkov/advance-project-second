import { IStateSchema } from 'store/types/StateSchema';
import { getCountriesSchema } from './getCountriesSchema';

export const getCountriesFetchErr: (state: IStateSchema) => null | undefined | string = (state: IStateSchema) => getCountriesSchema(state)?.error;
