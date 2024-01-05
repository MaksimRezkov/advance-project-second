import { configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from '../types/StateSchema';
import { counterReducer } from 'entityes/Counter';
import { authUserReducer } from 'entityes/AuthUser';
import { loginReducer } from 'features/LoginModal';
import { modalReducer } from 'shared/Modal';

export function CreatorReduxStore (initialState?: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: {
      counter: counterReducer,
      authUser: authUserReducer,
      loginProcess: loginReducer,
      modal: modalReducer,
    },
    preloadedState: initialState || {},
  });
};
