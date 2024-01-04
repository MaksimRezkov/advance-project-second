import { FC, FormEvent, PropsWithChildren } from 'react';
import styleClasses from './ApInput.module.scss';
import { classNames } from 'shared/utils/classNames';

interface IApInputProps {
  placeholder?: string
  value?: string
  additionalClasses?: string[]
  disable?: boolean
  onInput?: (event: any) => void
};

const ApInput: FC<IApInputProps> = (props: PropsWithChildren<IApInputProps>) => {4
  console.log('input render');

  const { placeholder = '', value, additionalClasses = [], disable = false, onInput } = props;
  const className = classNames({
    mainClassName: styleClasses.ApInput,
    additional: additionalClasses,
  });

  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      disabled={disable}
      onInput={onInput}
    />
  );
};

export { ApInput };
