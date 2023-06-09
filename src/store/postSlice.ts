import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { IAppState } from 'store';
import { getPostsQuery } from 'api/postApi';
import { PostFilterType } from 'constants/api';
import type { IPost } from 'types/Post.types';
import type { RawAsyncState } from 'types/Store.types';

interface PostFilter {
  filterType: PostFilterType;
  query: string;
}
const filterStrategies = {
  [PostFilterType.POST_BODY]: (query: string) => (post: IPost) =>
    post.body.includes(query),
  [PostFilterType.USER_ID]: (query: string) => (post: IPost) =>
    post.userId === Number(query),
};
export const fetchPosts = createAsyncThunk<IPost[], PostFilter | null>(
  'posts/fetchPosts',
  async (postFilter, { rejectWithValue, dispatch }) => {
    try {
      const response = await dispatch(getPostsQuery(null));

      if (postFilter?.query && !!postFilter?.query) {
        const filterStrategy = filterStrategies[postFilter.filterType](
          postFilter.query,
        );
        return response.data.filter(filterStrategy);
      }

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('error');
    }
  },
);

export interface PostState extends RawAsyncState<IPost> {
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
export const selectedPostSelector = (state: IAppState): IPost | null =>
  state.posts.selected;
export const { reducer: postReducer, actions: postActions } = postsSlice;
