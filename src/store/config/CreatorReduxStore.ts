import { CombinedState, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { NavigateOptions, To } from 'react-router-dom';
import { IStateSchema, ReduxStoreWithManager } from '../types/StateSchema';
import { counterReducer } from 'entityes/Counter';
import { authUserReducer } from 'entityes/AuthUser';
import { createReducerManager } from './reducerManager';
import { apiClient } from 'shared/api/apiClient';
import { profileReducer } from 'entityes/Profile';
import { loginModalReducer } from 'features/LoginModal/model/slice/loginModalSlice';
import { coverLoaderReducer } from 'widgets/CoverLoader';

export function CreatorReduxStore (initialState?: IStateSchema, navigate?: (to: To, options?: NavigateOptions) => void): ReduxStoreWithManager {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    authUser: authUserReducer,
    loginModal: loginModalReducer,
    coverLoader: coverLoaderReducer,
  };

  if (_PROJECT_ !== 'frontend') {
    // @ts-ignore
    rootReducer.profile = profileReducer;
  }

  const reducerManager = createReducerManager(rootReducer);

  const store: ReduxStoreWithManager = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
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
