import { useState, useCallback } from 'react';
import type { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { TagInput } from 'components/form';
import type { IComment, ICommentReply } from 'types/Comment.types';
import type { ITag } from 'components/form/TagInput/TagInput';
import { CommentReply } from './CommentReply';

enum CommentMode {
  DEFAULT = 'default',
  EDIT = 'edit',
}
interface CommentProps {
  comment: IComment;
  onTagSelect: (comment: IComment, tags: ITag[]) => void;
  onReplySet: (comment: IComment, reply: ICommentReply) => void;
  tags: ITag[];
}
export const Comment: FC<CommentProps> = ({
  comment,
  tags,
  onTagSelect,
  onReplySet,
}) => {
  const { id, postId, body, reply } = comment;
  const [displayReply, setDisplayReply] = useState(true);
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
  const onAddReply = useCallback((): void => {
    onReplySet(comment, {
      id: 0,
      body: '',
    });
    setDisplayReply(false);
  }, []);
  const onReplyUpdateHandler = useCallback(
    (comment: IComment, reply: ICommentReply): void => {
      // console.log('onReplyUpdateHandler', comment, { id: reply.id, body })
      onReplySet(comment, reply);
    },
    [],
  );

  return (
    <>
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
          {displayReply && (
            <Button size="small" onClick={onAddReply}>
              Reply
            </Button>
          )}
        </CardActions>
      </Card>
      {reply && (
        <Box pl="1rem" display="flex" gap="1rem" flexDirection="column">
          <CommentReply
            key={reply.id}
            comment={comment}
            reply={reply}
            onReplySave={onReplyUpdateHandler}
          />
        </Box>
      )}
    </>
  );
};
