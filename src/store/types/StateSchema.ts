import { ICounterSchema } from './modules/counter/counterTypes';
import { IAuthUserSchema } from './modules/authUser/authUserTypes';
import { ILoginSchema } from './modules/login/loginTypes';
import { IModalSchema } from './modules/modal/modalTypes';

/** Описание глобального хранилища */
export interface IStateSchema {
  counter: ICounterSchema
  authUser: IAuthUserSchema
  loginProcess: ILoginSchema
  modal: IModalSchema
}
