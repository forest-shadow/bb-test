import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { IAppState } from 'store';

export type TThunkDispatch = ThunkDispatch<IAppState, unknown, AnyAction>;

export interface AsyncState<T> {
  isLoading: boolean;
  error: string | null;
  data: T | null;
}
