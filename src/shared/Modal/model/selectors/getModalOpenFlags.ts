import { IStateSchema } from 'store/types/StateSchema';
import { getModalState } from './getModalState';
import { IModalSchema } from 'store/types/modules/modal/modalTypes';

export const getModalOpenFlags: (state: IStateSchema) => IModalSchema['modalsConfig'] = (state: IStateSchema) => getModalState(state).modalsConfig;
