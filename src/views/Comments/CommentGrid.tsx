import type { FC } from 'react';
import Box from '@mui/material/Box';
import { Comment } from './Comment';

export const CommentGrid: FC = () => (
  <Box display="flex" flexDirection="column" gap="1rem">
    <Comment />
    <Comment />
    <Comment />
  </Box>
);
