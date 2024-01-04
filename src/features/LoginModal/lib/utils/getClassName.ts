import { classNames } from 'shared/utils/classNames';
import styleClasses from '../../ui/LoginForm/LoginForm.module.scss';

const formClassName = classNames({
  mainClassName: styleClasses.loginForm,
  additional: ['flex-column'],
});

const formInputsClassName = classNames({
  mainClassName: styleClasses.formInputs,
  additional: ['flex-column'],
});

const formBtnsClassName = classNames({
  mainClassName: styleClasses.formBtns,
  additional: ['flex-j-between'],
});

export const getClassName = () => {
  return {
    formClassName,
    formInputsClassName,
    formBtnsClassName,
  };
};
