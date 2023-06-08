import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import axios from 'axios';

import { api } from 'api';
import config from 'config';
import { postReducer } from './postSlice';
import type { PostState } from './postSlice';
import { commentsReducer } from './commentSlice';
import type { CommentState } from './commentSlice';

const reducer = combineReducers({
  posts: postReducer,
  comments: commentsReducer,
  [api.reducerPath]: api.reducer,
});

export interface IAppState {
  posts: PostState;
  comments: CommentState;
}
const store = configureStore({
  reducer,
  devTools: config.isDevEnvironment,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: axios.create({
            baseURL: config.apiBaseUrl,
          }),
        },
      },
    }).concat(api.middleware),
});

export default store;
