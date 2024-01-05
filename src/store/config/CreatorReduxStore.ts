import { configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from '../types/StateSchema';
import { counterReducer } from 'entityes/Counter';
import { authUserReducer } from 'entityes/AuthUser';
import { loginReducer } from 'features/AuthByUsername';

export function CreatorReduxStore (initialState?: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: {
      counter: counterReducer,
      authUser: authUserReducer,
      loginProcess: loginReducer,
    },
    preloadedState: initialState || {},
  });
};
