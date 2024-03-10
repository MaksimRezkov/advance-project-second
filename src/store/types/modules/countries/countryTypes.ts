export interface ICountry {
  id: 1;
  code: string;
  name: string;
}

export interface ICountrySchema {
  isLoading: boolean;
  error: string | null;
  countries: ICountry[];
}
