import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { IAppState } from 'store';
import { getPostsQuery } from 'api/postApi';
import type { IPost } from 'types/Post.types';

export const fetchPosts = createAsyncThunk<IPost[]>(
  'posts/fetchPosts',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await dispatch(getPostsQuery(null));

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);

interface AsyncState<T> {
  isLoading: boolean;
  error: string | null;
  data: T | null;
}
export interface PostState extends AsyncState<IPost[]> {
  selected: IPost | null;
}

const initialState: PostState = {
  isLoading: false,
  error: null,
  data: null,
  selected: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setCurrentPost: (state: PostState, action: PayloadAction<IPost>) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<IPost[]>) => {
          state.isLoading = false;
          state.data = action.payload.slice(0, 9);
          const [selectedPost] = action.payload;
          state.selected = selectedPost;
        },
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const postsStateSelector = (state: IAppState): PostState => state.posts;
export const { reducer: postReducer, actions: postActions } = postsSlice;
