import { IStateSchema } from 'store/types/StateSchema';
import { ICountry } from 'store/types/modules/countries/countryTypes';
import { getCountriesSchema } from './getCountriesSchema';

export const getCountriesData: (state: IStateSchema) => ICountry[] = (state: IStateSchema) => getCountriesSchema(state)?.countries || [];
