import SearchIcon from '@mui/icons-material/Search';
import type { FC } from 'react';
import type { TextInputChangeEvent } from 'types/DOM.types';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './SearchInput.styles';

interface SearchInputProps {
  value: string;
  handleInput: (e: TextInputChangeEvent) => void;
}
export const SearchInput: FC<SearchInputProps> = ({ value, handleInput }) => (
  <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      value={value}
      onChange={(e) => handleInput(e)}
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  </Search>
);
