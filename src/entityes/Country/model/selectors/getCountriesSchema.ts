import { IStateSchema } from 'store/types/StateSchema';
import { ICountrySchema } from 'store/types/modules/countries/countryTypes';

export const getCountriesSchema: (state: IStateSchema) => ICountrySchema | undefined = (state: IStateSchema) => state?.countries;
