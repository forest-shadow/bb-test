import { useState, useCallback } from 'react';
import type { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { TextareaInput } from 'components/form';
import type { IComment, ICommentReply } from 'types/Comment.types';
import type { TextInputChangeEvent } from 'types/DOM.types';

enum CommentReplyMode {
  DEFAULT = 'default',
  EDIT = 'edit',
}
interface CommentReplyProps {
  comment: IComment;
  reply: ICommentReply;
  mode?: CommentReplyMode;
  onReplySave: (comment: IComment, reply: ICommentReply) => void;
}
export const CommentReply: FC<CommentReplyProps> = ({
  comment,
  reply,
  onReplySave,
  mode = CommentReplyMode.EDIT,
}) => {
  const { id } = comment;
  const [replyText, setReplyText] = useState(reply.body || '');
  const [commentMode, setCommentMode] = useState(mode);
  const isEditMode = commentMode === CommentReplyMode.EDIT;
  const isDefaultMode = commentMode === CommentReplyMode.DEFAULT;

  const changeCommendMode = (mode: CommentReplyMode): void => {
    setCommentMode(mode);
  };
  const onSaveReply = useCallback(() => {
    console.log('onSaveReply', replyText);
    changeCommendMode(CommentReplyMode.DEFAULT);
    onReplySave(comment, { id: reply.id, body: replyText });
  }, [replyText]);
  const setEditMode = useCallback(
    () => changeCommendMode(CommentReplyMode.EDIT),
    [],
  );

  const handleReplyTextInput = (e: TextInputChangeEvent): void => {
    setReplyText(e.target.value);
  };

  return (
    <Card>
      <CardContent sx={{ pb: 0 }}>
        <Typography gutterBottom component="div">
          Reply to commentId: {id}
        </Typography>
        {!isEditMode && reply.body && (
          <Typography variant="body2" color="text.secondary">
            {reply.body}
          </Typography>
        )}
        {isEditMode && (
          <TextareaInput
            value={replyText}
            placeholder="Write reply"
            onChange={handleReplyTextInput}
          />
        )}
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {isEditMode && (
          <Button size="small" onClick={onSaveReply}>
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
