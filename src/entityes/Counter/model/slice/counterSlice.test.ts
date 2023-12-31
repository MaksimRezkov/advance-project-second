import { ICounterSchema } from 'store/types/modules/counter/counterTypes';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('increment reducer', () => {
    const counterState: ICounterSchema = { value: 5 };

    const incrementRes = counterReducer(counterState, counterActions.increment(1));
    expect(incrementRes.value).toBe(6);
  });

  test('decrement reducer', () => {
    const counterState: ICounterSchema = { value: 5 };

    const incrementRes = counterReducer(counterState, counterActions.decrement(1));
    expect(incrementRes.value).toBe(4);
  });
});
