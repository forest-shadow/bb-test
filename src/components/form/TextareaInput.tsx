import type { FC } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import type { TextInputChangeEvent } from 'types/DOM.types';

interface TextareaInputProps {
  value: string;
  placeholder: string;
  onChange: (e: TextInputChangeEvent) => void;
}
export const TextareaInput: FC<TextareaInputProps> = ({
  value,
  placeholder,
  onChange,
}) => (
  <TextareaAutosize
    minRows={2}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    style={{ width: '100%' }}
  />
);
