import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import type { PostState } from 'store/postSlice';
import { PostGrid } from './PostGrid';

interface PostPageProps {
  postState: PostState;
}
export const PostPage: FC<PostPageProps> = ({ postState }) => (
  <Box>
    <Typography variant="h4" component="h2" color="white" marginBottom="2rem">
      Posts
    </Typography>
    <PostGrid postState={postState} />
  </Box>
);
