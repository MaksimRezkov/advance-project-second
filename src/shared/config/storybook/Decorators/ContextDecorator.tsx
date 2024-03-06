import { IThemeContextValues, ThemeContext, ThemeValueType } from 'app/lib/context/Context';

import React from 'react';

export const ContextDecorator = (contextValues: IThemeContextValues) => (Story: any): any => (
  <ThemeContext.Provider value={contextValues}>
    {Story()}
  </ThemeContext.Provider>
);
