import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// https://redux.js.org/usage/usage-with-typescript#define-typed-hooks
// 加了這個呼叫端在使用useSelector時，就不用一直要宣告型別
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
