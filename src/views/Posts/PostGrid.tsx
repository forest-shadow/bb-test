import type { FC } from 'react';
import Box from '@mui/material/Box';
import { Post } from './Post';

export const PostGrid: FC = () => (
  <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="2rem">
    <Post />
    <Post />
    <Post />

    <Post />
    <Post />
    <Post />

    <Post />
    <Post />
    <Post />
  </Box>
);
