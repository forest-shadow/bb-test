import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { PostGrid } from './PostGrid';

export const PostPage: FC = () => (
  <Box>
    <Typography variant="h4" component="h2" color="white" marginBottom="2rem">
      Posts
    </Typography>
    <PostGrid />
  </Box>
);
