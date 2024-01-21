import { ICounterSchema } from './modules/counter/counterTypes';
import { IAuthUserSchema } from './modules/authUser/authUserTypes';
import { ILoginSchema } from './modules/login/loginTypes';
import { IModalSchema } from './modules/modal/modalTypes';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { IProfileSchema } from './modules/profile/profileStateTypes';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

/** Описание глобального хранилища */
export interface IStateSchema {
  counter: ICounterSchema
  authUser: IAuthUserSchema
  modal: IModalSchema

  // Async reducers
  loginProcess?: ILoginSchema
  profile?: IProfileSchema
}

export type StateSchemaKeys = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<IStateSchema, AnyAction, [ThunkMiddlewareFor<IStateSchema>]> {
  reducerManager?: IReducerManager
}

export interface IThunkExtra {
  apiClient: AxiosInstance
  navigate: (to: To, options?: NavigateOptions) => void
}
