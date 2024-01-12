import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKeys } from 'store/types/StateSchema';

export interface AddedReducerConf {
  reducerKey: StateSchemaKeys
  reducer: Reducer
}

interface IUseAddAsyncReducerParams {
  removeAfterDestroy?: boolean
  reducers: AddedReducerConf[]
}

export function useAddAsyncReducer (params: IUseAddAsyncReducerParams): void {
  const { reducers, removeAfterDestroy = false } = params;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();
  useEffect(() => {
    reducers.forEach(({ reducer, reducerKey }) => {
      store.reducerManager.add(reducerKey, reducer);
      dispatch({ type: `@INIT ${reducerKey} reducer` });
    });

    return () => {
      if (removeAfterDestroy) {
        reducers.forEach(({ reducerKey }) => {
          store.reducerManager.remove(reducerKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };
  }, []);
};
