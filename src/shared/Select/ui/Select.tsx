import React, { ChangeEvent, FC, memo } from 'react';

import styleClasses from './Select.module.scss';
import { classNames } from 'shared/utils/classNames';

interface SelectPropsI {
  id: string;
  selectedValue?: string;
  label?: string;
  disabled?: boolean;
  options: { value: string; optionLabel: string }[];
  inlineLabel?: boolean;
  gap?: 'S' | 'M' | 'L' | 'XL';

  onChange?: (value: string, event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectPropsI> = memo((props) => {
  const { id, label, options, inlineLabel = false, gap = 'L', selectedValue, disabled, onChange } = props;
  const className = classNames({
    mainClassName: styleClasses.appSelectBody,
    mods: {
      [styleClasses.inlineLabel]: inlineLabel,
    },
    additional: [styleClasses[`gap${gap}`]],
  });

  const onInputHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value, event);
  };

  return (
    <div className={className}>
      {label && <label htmlFor={id} className={'flex-align-center'}>{label}</label>}
      <select onChange={onInputHandler} id={id} disabled={disabled} className={styleClasses.appSelect}>
        {!selectedValue && <option selected disabled value={''}>Выбрать опцию</option>}
        {
          options.map(option => (
            <option
              key={option.value}
              value={option.value}
              selected={option.value === selectedValue}
            >{option.optionLabel}</option>
          ))
        }
      </select>
    </div>
  );
});
