import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import type { FC } from 'react';

interface IMenuItem {
  label: string;
  value: string;
}
interface SelectInputProps {
  value: string;
  label: string;
  handleChange: (e: SelectChangeEvent) => void;
  menuItems: IMenuItem[];
}
export const SelectInput: FC<SelectInputProps> = ({
  value,
  label,
  handleChange,
  menuItems,
}) => (
  <Box display="flex" alignItems="center">
    <InputLabel sx={{ color: 'white' }}>{label}</InputLabel>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select value={value} onChange={handleChange} sx={{ bgcolor: 'white' }}>
        {menuItems.map(({ value, label }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
);
