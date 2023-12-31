import { FC, memo, useCallback } from 'react';
import { Button } from 'shared/Button/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';

const ButtonMemo = memo(Button);

export const Counter: FC = () => {
  const value = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const { decrement, increment } = counterActions;

  const incrementValue = useCallback(() => {
    dispatch(increment(1));
  }, [dispatch, increment]);
  const decrementValue = useCallback(() => {
    dispatch(decrement(1));
  }, [dispatch, decrement]);

  return (
    <div>
      <strong data-testid={'counter-value'}>counter: {value}</strong>
      <ButtonMemo
        testId={'counter-increment'}
        onClick={incrementValue}
      >
        increment
      </ButtonMemo>

      <ButtonMemo
        testId={'counter-decrement'}
        onClick={decrementValue}
      >
        decrement
      </ButtonMemo>
    </div>
  );
};
