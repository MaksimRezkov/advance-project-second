import { FC, memo, useCallback, useEffect, useMemo } from 'react';
import { ApInput } from 'shared/input';
import { getClassName } from '../../lib/utils/getClassName';
import { useLoginData } from '../../lib/hooks/useLoginData';
import { usePasswordData } from '../../lib/hooks/usePasswordData';
import { Button } from 'shared/Button/ui/Button';
import { useSelector } from 'react-redux';
import { loginAsyncThunk } from '../../model/service/LoginAsyncThunk';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { AnimationAlertWrapp, ErrorAlert } from 'shared/Alert';
import { loginActions, loginReducer } from 'features/LoginModal/model/slice/loginSlice';
import { AddedReducerConf, useAddAsyncReducer } from 'shared/lib/hooks/useAddAsyncReducer';
import { useAppDispatch } from 'store/lib/hooks/useAppDispatch';

const ButtonMemo = memo(Button);

export interface IConfirmData {
  login: string
  password: string
}

export interface LoginFormProps {
  onConfirm: () => void
  onCancel: () => void
}

const addingReducers: AddedReducerConf[] = [{ reducer: loginReducer, reducerKey: 'loginProcess' }];

const LoginForm: FC<LoginFormProps> = ({ onConfirm, onCancel }) => {
  const { formBtnsClassName, formClassName, formInputsClassName } = getClassName();

  const dispatch = useAppDispatch();
  useAddAsyncReducer({
    reducers: addingReducers,
    removeAfterDestroy: true,
  });
  useEffect(() => {
    dispatch(loginActions.setDefaultLoginStore());
  }, []);

  const { login, loginInputHandler } = useLoginData();
  const { password, passwordInputHandler } = usePasswordData();

  const errorLoginResponse = useSelector(getLoginError);

  const confirmData = useCallback(async () => {
    const result = await dispatch(loginAsyncThunk({
      loginData: {
        password,
        username: login,
      },
    }));
    if (result.meta.requestStatus === 'fulfilled') {
      onConfirm();
    }
  }, [onConfirm, login, password]);

  return (
    <div className={formClassName}>
      <AnimationAlertWrapp isHidden={!errorLoginResponse}>
        <ErrorAlert errorText={errorLoginResponse}/>
      </AnimationAlertWrapp>

      <div className={formInputsClassName}>
        <ApInput placeholder='Логин' onInput={loginInputHandler} value={login} isFocused={true}/>
        <ApInput placeholder='Пароль' onInput={passwordInputHandler} value={password}/>
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

export default LoginForm;
