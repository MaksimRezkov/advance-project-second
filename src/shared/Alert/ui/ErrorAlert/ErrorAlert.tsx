import { FC } from 'react';
import styleClasses from './ErrorAlert.module.scss';

export interface IErrorAlertProps {
  title?: string
  errorText?: string
  details?: string
}

export const ErrorAlert: FC<IErrorAlertProps> = (props) => {
  const {
    title = 'Ошибка',
    errorText,
    details,
  } = props;

  return (
    <div className={styleClasses.alertBody}>
      <h4 className={styleClasses.title}>{ title }:</h4>

      {errorText && <span className={styleClasses.text}>{errorText}</span>}

      {
        details &&
        <div className={styleClasses.details}>
          <span>{ details }</span>
        </div>
      }
    </div>
  );
};
