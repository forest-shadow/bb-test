import type { FC } from 'react';
import useAutocomplete from '@mui/base/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import { Root, InputWrapper, StyledTag, Listbox } from './TagInput.styles';

export interface ITag {
  title: string;
  slug: string;
}
interface TagInputProps {
  tags: ITag[];
  defaultTags: ITag[];
  handleTagsSelection: (tags: ITag[]) => void;
}
export const TagInput: FC<TagInputProps> = ({
  tags,
  defaultTags,
  handleTagsSelection,
}) => {
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
    defaultValue: defaultTags,
    multiple: true,
    options: tags,
    getOptionLabel: (option) => option.title,
    onChange: (event, value: ITag[]) => {
      handleTagsSelection(value);
    },
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option: ITag, index: number) => (
            <StyledTag label={option.title} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof tags).map((option, index) => (
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
