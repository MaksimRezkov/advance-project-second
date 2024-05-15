import { IStateSchema } from 'store/types/StateSchema';

export const getCoverLoaderStatus: (state: IStateSchema) => boolean = (state: IStateSchema) => state.coverLoader.isLoading;
