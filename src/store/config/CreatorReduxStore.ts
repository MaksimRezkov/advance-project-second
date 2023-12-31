import { configureStore } from '@reduxjs/toolkit';
import { IStateSchema } from '../types/StateSchema';
import { counterReducer } from 'entityes/Counter';

export function CreatorReduxStore (initialState?: IStateSchema) {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState || {},
  });
};
