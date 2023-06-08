import { useEffect } from 'react';
import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import { selectedPostSelector } from 'store/postSlice';
import {
  commentsStateSelector,
  fetchComments,
  commentActions,
} from 'store/commentSlice';
import type { TThunkDispatch } from 'types/Store.types';
import { Comment } from './Comment';
import { CommentGridSkeleton } from './CommentGridSkeleton';

export const CommentGrid: FC = () => {
  const dispatch = useDispatch<TThunkDispatch>();
  const selectedPost = useSelector(selectedPostSelector);
  const { data: comments, isLoading } = useSelector(commentsStateSelector);
  useEffect(() => {
    if (selectedPost) {
      dispatch(commentActions.resetComments());
      dispatch(fetchComments(selectedPost.id));
    }
  }, [selectedPost?.id]);
  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      {(isLoading || !comments) && <CommentGridSkeleton />}

      {comments?.length &&
        comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </Box>
  );
};
