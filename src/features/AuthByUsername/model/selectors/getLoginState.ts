import { IStateSchema } from 'store/types/StateSchema';
import { ILoginSchema } from 'store/types/modules/login/loginTypes';

export const getLoginState: (state: IStateSchema) => ILoginSchema = (state: IStateSchema) => state.loginProcess;
