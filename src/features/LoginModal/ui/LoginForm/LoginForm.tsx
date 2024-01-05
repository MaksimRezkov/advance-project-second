import { FC, memo, useCallback, useMemo, useState } from 'react';
import { ApInput } from 'shared/input';
import { getClassName } from '../../lib/utils/getClassName';
import { useLoginData } from '../../lib/hooks/useLoginData';
import { usePasswordData } from '../../lib/hooks/usePasswordData';
import { Button } from 'shared/Button/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsyncThunk } from 'features/AuthByUsername/model/service/LoginAsyncThunk';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError';
import { AnimationAlertWrapp, ErrorAlert } from 'shared/Alert';

const ApInputMemo = memo(ApInput);
const ButtonMemo = memo(Button);

export interface IConfirmData {
  login: string
  password: string
}

interface LoginFormProps {
  onConfirm: () => void
  onCancel: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ onConfirm, onCancel }) => {
  const { formBtnsClassName, formClassName, formInputsClassName } = getClassName();
  const { login, loginRef, loginInputHandler } = useLoginData();
  const { password, passwordData, passwordInputHandler } = usePasswordData();
  const dispatch = useDispatch();
  const errorLoginResponse = useSelector(getLoginError);

  const confirmData = useCallback(() => {
    dispatch(loginAsyncThunk({
      loginData: {
        password: passwordData.current,
        username: loginRef.current,
      },
      onSuccessFn: onConfirm,
    }));
  }, [onConfirm]);

  return (
    <div className={formClassName}>
      <AnimationAlertWrapp isHidden={!!errorLoginResponse}>
        <ErrorAlert errorText={errorLoginResponse}/>
      </AnimationAlertWrapp>

      <div className={formInputsClassName}>
        <ApInputMemo placeholder='Логин' onInput={loginInputHandler} value={login} isFocused={true}/>
        <ApInputMemo placeholder='Пароль' onInput={passwordInputHandler} value={password}/>
      </div>
      <div className={formBtnsClassName}>
        <ButtonMemo onClick={confirmData} bordered={true}>
          Ок
        </ButtonMemo>
        <ButtonMemo onClick={onCancel}>
          Отмена
        </ButtonMemo>
      </div>
    </div>
  );
};
