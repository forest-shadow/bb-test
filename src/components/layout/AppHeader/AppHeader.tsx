import type { FC } from 'react';
import { AppToolbar } from './AppToolbar';
import { AppFilter } from './AppFilter';

export const AppHeader: FC = () => (
  <AppToolbar title="Posts App">
    <AppFilter />
  </AppToolbar>
);
