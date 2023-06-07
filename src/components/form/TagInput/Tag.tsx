import type { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import type { AutocompleteGetTagProps } from '@mui/base/useAutocomplete';

export interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}
export const Tag: FC<TagProps> = ({ label, onDelete, ...other }) => (
  <div {...other}>
    <span>{label}</span>
    <CloseIcon onClick={onDelete} />
  </div>
);
