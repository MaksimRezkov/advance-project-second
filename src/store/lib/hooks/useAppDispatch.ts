import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../config/CreatorReduxStore';

export type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = () => useDispatch<AppDispatch>();
