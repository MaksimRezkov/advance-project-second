import React from 'react';
import { ThemeValueType } from 'app/lib/context/Context';

export const ThemeDecorator = (theme: ThemeValueType): any => (story: any): any => (
  <div className={`app ${theme}`}>
    {story()}
  </div>
);
