import { IStateSchema } from 'store/types/StateSchema';

export const getOpenLoginModal: (state: IStateSchema) => boolean = (state) => state.loginModal.isModalOpen;
