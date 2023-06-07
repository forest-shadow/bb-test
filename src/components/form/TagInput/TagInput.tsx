import type { FC } from 'react';
import useAutocomplete from '@mui/base/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import { Root, InputWrapper, StyledTag, Listbox } from './TagInput.styles';

const postTags = [
  { title: 'Tag #1', slug: 'tag-1' },
  { title: 'Tag #2', slug: 'tag-2' },
  { title: 'Tag #3', slug: 'tag-3' },
  { title: 'Tag #4', slug: 'tag-4' },
];

interface FilmOptionType {
  title: string;
  slug: string;
}

export const TagInput: FC = () => {
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [postTags[1]],
    multiple: true,
    options: postTags,
    getOptionLabel: (option) => option.title,
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option: FilmOptionType, index: number) => (
            <StyledTag label={option.title} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof postTags).map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.title}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
};
