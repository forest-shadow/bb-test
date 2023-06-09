import type { NormalizedAsyncState } from 'types/Store.types';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { getPostCommentsQuery } from 'api/postApi';
import type { IAppState } from 'store';
import type { IComment, ICommentReply } from 'types/Comment.types';
import type { ITag } from 'components/form/TagInput';

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

const commentsAdapter = createEntityAdapter<IComment>({
  selectId: (comment) => comment.id,
});
export interface CommentState extends NormalizedAsyncState<IComment> {}
const initialState: CommentState = {
  isLoading: false,
  error: null,
  ids: [],
  entities: {},
};
const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState<CommentState>(initialState),
  reducers: {
    resetComments: () => {
      commentsAdapter.getInitialState(initialState);
    },
    setCommentTags: (
      state,
      action: PayloadAction<{ comment: IComment; tags: ITag[] }>,
    ) => {
      commentsAdapter.setOne(state, {
        ...action.payload.comment,
        tags: [...action.payload.tags],
      });
    },
    setCommentReply: (
      state,
      action: PayloadAction<{ comment: IComment; reply: ICommentReply }>,
    ) => {
      console.log(action.payload.comment);
      commentsAdapter.setOne(state, {
        ...action.payload.comment,
        reply: { ...action.payload.reply },
      });
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
        commentsAdapter.setAll(state, action.payload.slice(0, 3));
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

const { selectAll: selectAllComments } = commentsAdapter.getSelectors(
  (state: IAppState) => state.comments,
);

const stateSelector = (state: IAppState): CommentState => state.comments;
export const commentsStateSelector = createSelector(
  selectAllComments,
  stateSelector,
  (comments, commentsState) => ({
    isLoading: commentsState.isLoading,
    data: comments,
  }),
);

export const { reducer: commentsReducer, actions: commentActions } =
  commentsSlice;
