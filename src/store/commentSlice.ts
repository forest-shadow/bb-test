import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { IAppState } from 'store';
import { getPostCommentsQuery } from 'api/postApi';
import type { IComment } from 'types/Comment.types';
import type { AsyncState } from 'types/Store.types';

export const fetchComments = createAsyncThunk<IComment[], number>(
  'comments/fetchComments',
  async (postId, { rejectWithValue, dispatch }) => {
    try {
      const response = await dispatch(getPostCommentsQuery(postId));

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);

export interface CommentState extends AsyncState<IComment[]> {}

const initialState: CommentState = {
  isLoading: false,
  error: null,
  data: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    resetComments: (state: CommentState) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.slice(0, 3);
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const commentsStateSelector = (state: IAppState): CommentState =>
  state.comments;
export const { reducer: commentsReducer, actions: commentActions } =
  commentsSlice;
