import React, { FC, useMemo } from 'react';
import { Provider } from 'react-redux';
import { CreatorReduxStore } from '../config/CreatorReduxStore';
import { IStateSchema } from '../types/StateSchema';
import { useNavigate } from 'react-router-dom';

export interface IStoreProviderProps {
  initialState?: IStateSchema
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
  const navigate = useNavigate();
  const store = useMemo(() => CreatorReduxStore(initialState, navigate), []);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
