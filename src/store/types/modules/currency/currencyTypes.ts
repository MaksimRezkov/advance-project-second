export interface ICurrency {
  id: number;
  code: string;
  label: string;
};

export interface ICurrencySchema {
  isLoading: boolean;
  error: string | null;
  currencyList: ICurrency[];
}
