import { ICounterSchema } from './modules/counter/counterTypes';
import { IAuthUserSchema } from './modules/authUser/authUserTypes';
import { ILoginModalSchema, ILoginSchema } from './modules/login/loginTypes';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { IProfileSchema } from './modules/profile/profileStateTypes';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { ICountrySchema } from './modules/countries/countryTypes';
import { ICurrencySchema } from './modules/currency/currencyTypes';

/** Описание глобального хранилища */
export interface IStateSchema {
  counter: ICounterSchema;
  authUser: IAuthUserSchema;
  loginModal: ILoginModalSchema;

  // Async reducers
  loginProcess?: ILoginSchema;
  profile?: IProfileSchema;
  countries?: ICountrySchema;
  currency?: ICurrencySchema;
}

export type StateSchemaKeys = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<IStateSchema, AnyAction, [ThunkMiddlewareFor<IStateSchema>]> {
  reducerManager?: IReducerManager;
}

export interface IThunkConfig<T = string> {
  extra: {
    apiClient: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
  };
  state: IStateSchema;
  rejectValue: T;
}
