import React from 'react';
import { StoreProvider } from 'store';
import { IStateSchema } from 'store/types/StateSchema';

export const StoreDecorator = (state: IStateSchema): any => (story: any): any => (
  <StoreProvider initialState={state}>
    {story()}
  </StoreProvider>
);
