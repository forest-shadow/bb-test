import type { FC } from 'react';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';

import { AppHeader } from 'components/layout';
import { PostPage, CommentAsideView } from './views';

const App: FC = () => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <AppHeader />

    <Box display="flex" flexGrow="1">
      <Box flexBasis="80%" bgcolor={blue[400]} padding="2rem 4rem">
        <PostPage />
      </Box>

      <Box flexBasis="30%" bgcolor={blue[500]} padding="2rem">
        <CommentAsideView />
      </Box>
    </Box>
  </Box>
);

export default App;
