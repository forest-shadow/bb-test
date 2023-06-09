import { useCallback, useEffect } from 'react';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

import { postActions } from 'store/postSlice';
import type { PostState } from 'store/postSlice';
import { commentActions, fetchComments } from 'store/commentSlice';
import type { TThunkDispatch } from 'types/Store.types';
import type { IPost } from 'types/Post.types';
import { Post } from './Post';
import { PostGridSkeleton } from './PostGridSkeleton';

interface PostGridProps {
  postState: PostState;
}
export const PostGrid: FC<PostGridProps> = ({ postState }) => {
  const { data: posts, isLoading, selected: selectedPost } = postState;
  const dispatch = useDispatch<TThunkDispatch>();

  const setCurrentPost = useCallback((post: IPost) => {
    dispatch(postActions.setCurrentPost(post));
    dispatch(commentActions.resetComments());
    dispatch(fetchComments(post.id));
  }, []);

  useEffect(() => {
    if (selectedPost) dispatch(fetchComments(selectedPost.id));
  }, [selectedPost]);

  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="2rem">
      {posts?.map((post) => (
        <Post
          key={post.id}
          post={post}
          isSelected={post.id === selectedPost?.id}
          onClickHandler={setCurrentPost}
        />
      ))}

      {isLoading && <PostGridSkeleton />}
    </Box>
  );
};
