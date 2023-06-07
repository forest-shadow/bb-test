import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import type { FC } from 'react';
import { PostGrid } from './PostGrid';

export const PostPage: FC = () => (
  <Box>
    <Typography variant="h4" component="h2" color="white" marginBottom="2rem">
      News
    </Typography>
    <PostGrid />
  </Box>
);
