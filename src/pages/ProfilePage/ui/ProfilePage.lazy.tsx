import { lazy } from 'react';

export const ProfilePageLazy = lazy(async () => await new Promise((resolve: Function, reject: Function) => {
  setTimeout(() => {
    resolve(import('./ProfilePage'));
  }, 1500);
}));

export default ProfilePageLazy;
