import { IStateSchema } from 'store/types/StateSchema';
import { IAuthUserSchema } from 'store/types/modules/authUser/authUserTypes';

export const getAuthUserState: (state: IStateSchema) => IAuthUserSchema = (state: IStateSchema) => state.authUser;
