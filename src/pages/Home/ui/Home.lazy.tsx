import { lazy } from 'react';

export const HomeLazy = lazy(() => new Promise((resolve: Function, reject: Function) => {
  setTimeout(() => {
    resolve(import('./Home'));
  }, 1500);
}));

export default HomeLazy;
