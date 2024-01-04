import { ICounterSchema } from './modules/counter/counterTypes';
import { IAuthUserSchema } from './modules/authUser/authUserTypes';

/** Описание глобального хранилища */
export interface IStateSchema {
  counter: ICounterSchema
  authUser: IAuthUserSchema
}
