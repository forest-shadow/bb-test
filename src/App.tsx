import type { FC } from 'react';
import Box from '@mui/material/Box';
import { AppHeader } from 'components/layout';
import { PostPage, CommentAsideView } from './views';

const App: FC = () => (
  <Box display="flex" flexDirection="column" minHeight="100vh">
    <AppHeader />

    <Box display="flex" flexGrow="1">
      <Box flexBasis="80%" bgcolor="#4dabf5" padding="2rem 4rem">
        <PostPage />
      </Box>

      <Box flexBasis="30%" bgcolor="#2196f3" padding="2rem">
        <CommentAsideView />
      </Box>
    </Box>
  </Box>
);

export default App;
