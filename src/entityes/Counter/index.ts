import { Counter } from './ui/Counter';
import { counterReducer, counterActions } from './model/slice/counterSlice';
import type { ICounterSchema } from '../../store/types/modules/counter/counterTypes';

export {
  Counter,
  counterReducer,
  counterActions,
};

export type { ICounterSchema };
