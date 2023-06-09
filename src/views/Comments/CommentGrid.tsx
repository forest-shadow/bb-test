import { useCallback } from 'react';
import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import { commentsStateSelector, commentActions } from 'store/commentSlice';
import type { TThunkDispatch } from 'types/Store.types';
import type { IComment } from 'types/Comment.types';
import type { ITag } from 'components/form/TagInput/TagInput';
import { Comment } from './Comment';
import { CommentGridSkeleton } from './CommentGridSkeleton';

const commentTags: ITag[] = [
  { title: 'Tag #1', slug: 'tag-1' },
  { title: 'Tag #2', slug: 'tag-2' },
  { title: 'Tag #3', slug: 'tag-3' },
  { title: 'Tag #4', slug: 'tag-4' },
];

export const CommentGrid: FC = () => {
  const dispatch = useDispatch<TThunkDispatch>();
  const { data: comments, isLoading } = useSelector(commentsStateSelector);

  const handleTagSelection = useCallback((comment: IComment, tags: ITag[]) => {
    dispatch(commentActions.setCommentTags({ comment, tags }));
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      {isLoading && <CommentGridSkeleton />}

      {!isLoading &&
        comments?.length > 0 &&
        comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            onTagSelect={handleTagSelection}
            tags={commentTags}
          />
        ))}
    </Box>
  );
};
