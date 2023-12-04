import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export const RouteDecorator = (Story: any): any => (
  <BrowserRouter>
    {Story()}
  </BrowserRouter>
);
