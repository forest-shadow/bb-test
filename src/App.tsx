import { useEffect } from 'react';
import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';

import { AppHeader } from 'components/layout';
import { fetchPosts, postsStateSelector } from 'store/postSlice';
import type { TThunkDispatch } from 'types/Store.types';
import { PostPage, CommentAsideView } from './views';

const App: FC = () => {
  const dispatch = useDispatch<TThunkDispatch>();
  const postState = useSelector(postsStateSelector);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppHeader />

      <Box display="flex" flexGrow="1">
        <Box flexBasis="80%" bgcolor={blue[400]} padding="2rem 4rem">
          <PostPage postState={postState} />
        </Box>

        <Box flexBasis="30%" bgcolor={blue[500]} padding="2rem">
          <CommentAsideView />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
