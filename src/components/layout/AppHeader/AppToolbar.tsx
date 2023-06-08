import type { ReactNode, FC } from 'react';
import { Box, Toolbar, Typography, AppBar } from '@mui/material';

interface AppToolbarProps {
  title: string;
  children: ReactNode;
}
export const AppToolbar: FC<AppToolbarProps> = ({ title, children }) => (
  <AppBar position="static">
    <Toolbar>
      <Box
        display="flex"
        justifyContent="space-between"
        flexBasis="100%"
        alignItems="center"
      >
        <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box>{children}</Box>
      </Box>
    </Toolbar>
  </AppBar>
);
