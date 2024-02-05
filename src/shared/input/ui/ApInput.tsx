import React, { ChangeEvent, FC, LegacyRef, PropsWithChildren, memo, useEffect, useRef } from 'react';
import styleClasses from './ApInput.module.scss';
import { classNames } from 'shared/utils/classNames';

interface IApInputProps extends Partial<Omit<HTMLInputElement, 'value' | 'placeholder' | 'disable'>> {
  label: string
  placeholder?: string
  value?: string | number
  additionalClasses?: string[]
  disable?: boolean
  isFocused?: boolean
  onInput?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
  isShowLabel?: boolean
};

const ApInput: FC<IApInputProps> = memo((props: PropsWithChildren<IApInputProps>) => {
  const {
    label,
    placeholder = '',
    value,
    additionalClasses = [],
    disable = false,
    onInput,
    type,
    isFocused,
    isShowLabel = false,
  } = props;
  console.log('disabel', disable);
  const className = classNames({
    mainClassName: styleClasses.ApInput,
    additional: additionalClasses,
  });
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (isFocused) {
      ref.current?.focus();
    }
  }, []);

  const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onInput?.(event.target.value, event);
  };

  return (
    <div className={styleClasses.apInputWrapp}>
      {isShowLabel && <label
      className={classNames({ mainClassName: styleClasses.apLabel, additional: ['flex-align-center'] })}
        htmlFor={label}
      >
        {placeholder}
      </label>}

      <input
        id={label}
        ref={ref as LegacyRef<HTMLInputElement> | undefined}
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        disabled={disable}
        onInput={onInputHandler}
      />
    </div>
  );
});

export { ApInput };
