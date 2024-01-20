import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { IStateSchema, ReduxStoreWithManager } from '../types/StateSchema';
import { counterReducer } from 'entityes/Counter';
import { authUserReducer } from 'entityes/AuthUser';
import { modalReducer } from 'shared/Modal';
import { createReducerManager } from './reducerManager';

export function CreatorReduxStore (initialState?: IStateSchema): ReduxStoreWithManager {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    authUser: authUserReducer,
    modal: modalReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store: ReduxStoreWithManager = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState || {},
  });

  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof CreatorReduxStore>['dispatch'];
