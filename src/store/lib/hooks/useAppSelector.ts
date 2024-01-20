import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IStateSchema } from 'store/types/StateSchema';

export const useAppSelector: TypedUseSelectorHook<IStateSchema> = useSelector;
