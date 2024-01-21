import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { IStateSchema, ReduxStoreWithManager } from '../types/StateSchema';
import { counterReducer } from 'entityes/Counter';
import { authUserReducer } from 'entityes/AuthUser';
import { modalReducer } from 'shared/Modal';
import { createReducerManager } from './reducerManager';
import { apiClient } from 'shared/api/apiClient';
import { NavigateOptions, To } from 'react-router-dom';

export function CreatorReduxStore (initialState?: IStateSchema, navigate?: (to: To, options?: NavigateOptions) => void): ReduxStoreWithManager {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    authUser: authUserReducer,
    modal: modalReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store: ReduxStoreWithManager = configureStore({
    reducer: reducerManager.reduce,
    preloadedState: initialState || {},
    devTools: _IS_DEV_,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          apiClient,
          navigate,
        },
      },
    }),
  });

  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof CreatorReduxStore>['dispatch'];
