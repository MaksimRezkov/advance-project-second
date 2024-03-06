import { DeepPartial } from '@reduxjs/toolkit';
import React from 'react';
import { StoreProvider } from 'store';
import { IStateSchema } from 'store/types/StateSchema';

export const StoreDecorator = (state: DeepPartial<IStateSchema>): any => (story: any): any => (
  <StoreProvider initialState={state as IStateSchema}>
    {story()}
  </StoreProvider>
);
