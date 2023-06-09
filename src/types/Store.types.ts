import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { IAppState } from 'store';

export type TThunkDispatch = ThunkDispatch<IAppState, unknown, AnyAction>;

export interface AsyncState {
  isLoading: boolean;
  error: string | null;
}
export interface RawAsyncState<T> extends AsyncState {
  data: T[] | null;
}
export interface NormalizedAsyncState<T> extends AsyncState {
  ids: number[];
  entities: Record<number, T>;
}
