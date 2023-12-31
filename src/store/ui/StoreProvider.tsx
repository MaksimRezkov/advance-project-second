import { FC } from 'react';
import { Provider } from 'react-redux';
import { CreatorReduxStore } from '../config/CreatorReduxStore';
import { IStateSchema } from '../types/StateSchema';

export interface IStoreProviderProps {
  initialState?: IStateSchema
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children, initialState }) => {
  const store = CreatorReduxStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
