import { useCallback, useState, useEffect } from 'react';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import type { SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/material';

import { SearchInput, SelectInput } from 'components/form';
import { useDebounce } from 'hooks';
import { fetchPosts } from 'store/postSlice';
import { PostFilterType } from 'constants/api';
import type { TextInputChangeEvent } from 'types/DOM.types';
import type { TThunkDispatch } from 'types/Store.types';

const menuItems = [
  {
    value: PostFilterType.POST_BODY,
    label: 'Post body',
  },
  {
    value: PostFilterType.USER_ID,
    label: 'User id',
  },
];

export const AppFilter: FC = () => {
  const dispatch = useDispatch<TThunkDispatch>();
  const [filterType, setFilterType] = useState(
    PostFilterType.POST_BODY as string,
  );
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce<string>(searchQuery, 1000);

  const handleItemSelection = useCallback((e: SelectChangeEvent) => {
    setFilterType(e.target.value);
    setSearchQuery('');
  }, []);
  const handleInputChange = useCallback((e: TextInputChangeEvent) => {
    setSearchQuery(e.target.value);
  }, []);

  useEffect(() => {
    dispatch(
      fetchPosts({
        filterType: filterType as PostFilterType,
        query: debouncedSearchQuery,
      }),
    );
  }, [debouncedSearchQuery]);

  return (
    <Box display="flex" gap="1rem" alignItems="center">
      <SelectInput
        menuItems={menuItems}
        value={filterType}
        label="Select filter type"
        handleChange={handleItemSelection}
      />
      <Box>
        <SearchInput value={searchQuery} handleInput={handleInputChange} />
      </Box>
    </Box>
  );
};
