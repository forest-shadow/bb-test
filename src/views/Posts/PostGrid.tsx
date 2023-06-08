import type { FC } from 'react';
import Box from '@mui/material/Box';

import type { PostState } from 'store/postSlice';
import { Post } from './Post';
import { PostGridSkeleton } from './PostGridSkeleton';

interface PostGridProps {
  postState: PostState;
}
export const PostGrid: FC<PostGridProps> = ({ postState }) => {
  const { data: posts, isLoading, selected: selectedPost } = postState;
  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="2rem">
      {posts?.map((post) => (
        <Post post={post} isSelected={post.id === selectedPost?.id} />
      ))}

      {isLoading && <PostGridSkeleton />}
    </Box>
  );
};
