import { IStateSchema } from 'store/types/StateSchema';
import { getModalState } from './getModalState';

export const getModalOpenFlag: (state: IStateSchema) => boolean = (state: IStateSchema) => getModalState(state).isOpen;
