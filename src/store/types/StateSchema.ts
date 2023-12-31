import { ICounterSchema } from 'entityes/Counter';

/** Описание глобального хранилища */
export interface IStateSchema {
  counter: ICounterSchema
}
