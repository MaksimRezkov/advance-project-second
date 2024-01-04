import { configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from '../types/StateSchema';
import { counterReducer } from 'entityes/Counter';
import { authUserReducer } from 'entityes/AuthUser';

export function CreatorReduxStore (initialState?: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: {
      counter: counterReducer,
      authUser: authUserReducer,
    },
    preloadedState: initialState || {},
  });
};
