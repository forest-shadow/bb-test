import type { FC } from 'react';
import { SearchInput } from 'components/form';
import { AppToolbar } from './AppToolbar';

export const AppHeader: FC = () => (
  <AppToolbar title="Posts App">
    <SearchInput />
  </AppToolbar>
);
