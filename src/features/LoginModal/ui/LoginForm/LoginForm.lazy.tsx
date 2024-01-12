import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

const LoginFormLazy = lazy<FC<LoginFormProps>>(async () => await new Promise((resolve: (data: any) => void, reject: (err: any) => void) => {
  setTimeout(() => {
    resolve(import('./LoginForm'));
  }, 1500);
}));

export default LoginFormLazy;
