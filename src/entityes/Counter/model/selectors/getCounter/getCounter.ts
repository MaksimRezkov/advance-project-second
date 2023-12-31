import { IStateSchema } from 'store/types/StateSchema';
import { ICounterSchema } from 'store/types/modules/counter/counterTypes';

/** Возвращает из зранилища объект с данными couner */
export const getCounter: (state: IStateSchema) => ICounterSchema = (state: IStateSchema) => state.counter;
