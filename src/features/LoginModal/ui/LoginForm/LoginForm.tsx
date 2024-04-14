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
import { DEFAULT_ERR_TEXT } from 'shared/const/messages';
// import { IRegisterData, registerAsyncThunk } from 'features/LoginModal/model/service/Register/RegisterAsyncThunk';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';
import { getModalOpenFlags } from 'shared/Modal/model/selectors/getModalOpenFlags';

const ButtonMemo = memo(Button);

export interface IConfirmData {
  login: string;
  password: string;
}

export interface LoginFormProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const addingReducers: AddedReducerConf[] = [{ reducer: loginReducer, reducerKey: 'loginProcess' }];

const LoginForm: FC<LoginFormProps> = ({ onConfirm, onCancel }) => {
  const { formBtnsClassName, formClassName, formInputsClassName } = getClassName();
  const modalOpenFlags = useAppSelector(getModalOpenFlags);

  const isRegister = useMemo(() => modalOpenFlags.isRegisterOpen, [modalOpenFlags]);

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
    const data = {
      data: {
        password,
        username: login,
      },
    };
    // if (isRegister) {
    //   result = await dispatch(registerAsyncThunk(data));
    // } else {
    // }
    const result = await dispatch(loginAsyncThunk(data));
    if (result.meta.requestStatus === 'fulfilled') {
      onConfirm();
    }
  }, [onConfirm, login, password]);

  return (
    <div className={formClassName}>
      <AnimationAlertWrapp isHidden={!errorLoginResponse}>
        <ErrorAlert errorText={errorLoginResponse || DEFAULT_ERR_TEXT}/>
      </AnimationAlertWrapp>

      <div className={formInputsClassName}>
        <ApInput label={login} placeholder='Логин' onInput={loginInputHandler} value={login} isFocused={true}/>
        <ApInput label={password} placeholder='Пароль' onInput={passwordInputHandler} value={password}/>
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
