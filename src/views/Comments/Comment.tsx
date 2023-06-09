import { useState, useCallback } from 'react';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { TagInput } from 'components/form';
import type { IComment } from 'types/Comment.types';
import type { ITag } from 'components/form/TagInput/TagInput';

enum CommentMode {
  DEFAULT = 'default',
  EDIT = 'edit',
}
interface CommentProps {
  comment: IComment;
  onTagSelect: (comment: IComment, tags: ITag[]) => void;
  tags: ITag[];
}
export const Comment: FC<CommentProps> = ({ comment, tags, onTagSelect }) => {
  const { id, postId, body } = comment;
  const [commentMode, setCommentMode] = useState(CommentMode.DEFAULT);
  const isEditMode = commentMode === CommentMode.EDIT;
  const isDefaultMode = commentMode === CommentMode.DEFAULT;

  const changeCommendMode = (mode: CommentMode): void => {
    setCommentMode(mode);
  };
  const setDefaultMode = useCallback(
    () => changeCommendMode(CommentMode.DEFAULT),
    [],
  );
  const setEditMode = useCallback(
    () => changeCommendMode(CommentMode.EDIT),
    [],
  );
  const tagSelectionHandler = useCallback((tags: ITag[]) => {
    onTagSelect(comment, tags);
  }, []);

  return (
    <Card>
      <CardContent sx={{ pb: 0 }}>
        <Box display="flex" gap="1rem">
          <Typography gutterBottom component="div">
            postId: {postId}
          </Typography>
          <Typography gutterBottom component="div">
            commentId: {id}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
        {comment?.tags && comment?.tags?.length > 0 && !isEditMode && (
          <Typography gutterBottom component="div">
            Tags: {comment.tags.map((tag) => tag.title).join(', ')}
          </Typography>
        )}
        {isEditMode && (
          <TagInput
            tags={tags}
            handleTagsSelection={tagSelectionHandler}
            defaultTags={comment.tags ?? []}
          />
        )}
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">Reply</Button>
        {isEditMode && (
          <Button size="small" onClick={setDefaultMode}>
            Save
          </Button>
        )}
        {isDefaultMode && (
          <Button size="small" onClick={setEditMode}>
            Edit
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
