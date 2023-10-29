import { lazy } from 'react';

const AboutLazy = lazy(() => new Promise((resolve: Function, reject: Function) => {
  setTimeout(() => {
    resolve(import('./About'));
  }, 1500);
}));

export default AboutLazy;
