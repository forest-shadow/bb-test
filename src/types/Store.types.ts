import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { IAppState } from 'store';

export type TThunkDispatch = ThunkDispatch<IAppState, unknown, AnyAction>;
