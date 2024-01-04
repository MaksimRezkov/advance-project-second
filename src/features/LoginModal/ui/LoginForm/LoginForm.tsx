import { FC, memo } from 'react';
import { ApInput } from 'shared/input';
import { getClassName } from '../../lib/utils/getClassName';
import { useLoginData } from '../../lib/hooks/useLoginData';
import { usePasswordData } from '../../lib/hooks/usePasswordData';
import { Button } from 'shared/Button/ui/Button';

const ApInputMemo = memo(ApInput);

interface LoginFormProps {
  onConfirm: () => void
  onCancel: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ onConfirm, onCancel }) => {
  const { formBtnsClassName, formClassName, formInputsClassName } = getClassName();
  const { login, loginInputHandler } = useLoginData();
  const { password, passwordInputHandler } = usePasswordData();

  return (
    <div className={formClassName}>
      <div className={formInputsClassName}>
        <ApInputMemo placeholder='Логин' onInput={loginInputHandler} value={login} isFocused={true}/>
        <ApInputMemo placeholder='Пароль' onInput={passwordInputHandler} value={password}/>
      </div>
      <div className={formBtnsClassName}>
        <Button onClick={onConfirm}>
          Ок
        </Button>
        <Button onClick={onCancel}>
          Отмена
        </Button>
      </div>
    </div>
  );
};
