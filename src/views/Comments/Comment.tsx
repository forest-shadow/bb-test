import type { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import type { IComment } from 'types/Comment.types';

interface CommentProps {
  comment: Partial<IComment>;
}
export const Comment: FC<CommentProps> = ({ comment }) => {
  const { id, postId, body } = comment;
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
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">Reply</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};
