import { IStateSchema } from 'store/types/StateSchema';
import { IModalSchema } from 'store/types/modules/modal/modalTypes';

export const getModalState: (state: IStateSchema) => IModalSchema = (state: IStateSchema) => state.modal;
