import { IStateSchema } from 'store/types/StateSchema';
import { getCountriesSchema } from './getCountriesSchema';

export const getCountriesFetchLoading: (state: IStateSchema) => boolean | undefined = (state: IStateSchema) => getCountriesSchema(state)?.isLoading;
