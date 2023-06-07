import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import type { FC } from 'react';
import { CommentGrid } from './CommentGrid';

export const CommentAsideView: FC = () => (
  <Box>
    <Typography variant="h5" component="h3" color="white" marginBottom="1rem">
      Comments
    </Typography>
    <CommentGrid />
  </Box>
);
