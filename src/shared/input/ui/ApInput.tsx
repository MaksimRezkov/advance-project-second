import { ChangeEvent, FC, PropsWithChildren, useEffect, useRef } from 'react';
import styleClasses from './ApInput.module.scss';
import { classNames } from 'shared/utils/classNames';

interface IApInputProps extends Partial<Omit<HTMLInputElement, 'value' | 'placeholder' | 'disable'>> {
  placeholder?: string
  value?: string
  additionalClasses?: string[]
  disable?: boolean
  isFocused?: boolean
  onInput?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
};

const ApInput: FC<IApInputProps> = (props: PropsWithChildren<IApInputProps>) => {
  const { placeholder = '', value, additionalClasses = [], disable = false, onInput, type, isFocused } = props;
  const className = classNames({
    mainClassName: styleClasses.ApInput,
    additional: additionalClasses,
  });
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (isFocused) {
      ref.current.focus();
    }
  }, []);

  const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onInput(event.target.value, event);
  };

  return (
    <input
      ref={ref}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      disabled={disable}
      onInput={onInputHandler}
    />
  );
};

export { ApInput };
