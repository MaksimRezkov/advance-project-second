import { ICounterSchema } from './modules/counter/counterTypes';
import { IAuthUserSchema } from './modules/authUser/authUserTypes';
import { ILoginSchema } from './modules/login/loginTypes';

/** Описание глобального хранилища */
export interface IStateSchema {
  counter: ICounterSchema
  authUser: IAuthUserSchema
  loginProcess: ILoginSchema
}
